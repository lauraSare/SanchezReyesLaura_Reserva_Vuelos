// Controlador de Vuelos — maneja el ABCC completo
// Principio SOLID: Single Responsibility — solo maneja lógica de vuelos
// Principio SOLID - Open/Closed: nuevas operaciones se agregan sin modificar las existentes
// Principio SOLID - Dependency Inversion: depende de modelos Sequelize no de consultas directas
// Patron de diseño - Template Method: cada operacion ABCC sigue la misma estructura
// Clean Code: funciones pequeñas, nombres descriptivos, manejo de errores consistente
const { Vuelo, Ruta, Avion, Aeropuerto, Tripulacion, VueloTripulacion } = require("../models/index");
const { Op } = require("sequelize");

// ─── Obtener todos los vuelos ─────────────────────────────────
const obtenerVuelos = async (req, res) => {
  try {
    const vuelos = await Vuelo.findAll({
      include: [
        {
          model: Ruta,
          as: "Ruta",
          include: [
            { model: Aeropuerto, as: "origen" },
            { model: Aeropuerto, as: "destino" },
          ],
        },
        { model: Avion },
        { model: Tripulacion, through: { attributes: ['rol_en_vuelo'] } },
      ],
    });
    res.json(vuelos);
  } catch (error) {
    console.error("Error al obtener vuelos:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Obtener un vuelo por ID ──────────────────────────────────
const obtenerVueloPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const vuelo = await Vuelo.findByPk(id, {
      include: [
        {
          model: Ruta,
          include: [
            { model: Aeropuerto, as: "origen" },
            { model: Aeropuerto, as: "destino" },
          ],
        },
        { model: Avion },
      ],
    });
    if (!vuelo) {
      return res.status(404).json({ message: "Vuelo no encontrado." });
    }
    res.json(vuelo);
  } catch (error) {
    console.error("Error al obtener vuelo:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Crear un vuelo ───────────────────────────────────────────
const crearVuelo = async (req, res) => {
  try {
    const {
      codigo_vuelo,
      fecha_salida,
      fecha_llegada,
      estado,
      id_ruta,
      id_avion,
    } = req.body;

    // Validar avión no ocupado en misma fecha/hora
    const avionOcupado = await Vuelo.findOne({
      where: {
        id_avion,
        estado: { [Op.notIn]: ['cancelado', 'completado'] },
        fecha_salida: { [Op.lt]: fecha_llegada },
        fecha_llegada: { [Op.gt]: fecha_salida }
      }
    });
    if (avionOcupado) {
      return res.status(400).json({ message: `El avión ya tiene el vuelo ${avionOcupado.codigo_vuelo} programado en ese horario.` });
    }

    const nuevoVuelo = await Vuelo.create({
      codigo_vuelo,
      fecha_salida,
      fecha_llegada,
      estado: estado || "programado",
      id_ruta,
      id_avion,
    });

    res
      .status(201)
      .json({ message: "Vuelo creado correctamente.", vuelo: nuevoVuelo });
  } catch (error) {
    console.error("Error al crear vuelo:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Actualizar un vuelo ──────────────────────────────────────
const actualizarVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      codigo_vuelo,
      fecha_salida,
      fecha_llegada,
      estado,
      id_ruta,
      id_avion,
    } = req.body;

    const vuelo = await Vuelo.findByPk(id);
    if (!vuelo) {
      return res.status(404).json({ message: "Vuelo no encontrado." });
    }

    const { Reserva } = require("../models/index");
    const reservasActivas = await Reserva.count({
      where: { id_vuelo: id, estado: "confirmada" }
    });

    // Validar estado completado solo si fecha llegada ya pasó
    const fechaLlegadaFinal = fecha_llegada ? new Date(fecha_llegada) : new Date(vuelo.fecha_llegada)
    if (estado === 'completado' && fechaLlegadaFinal > new Date()) {
      return res.status(400).json({ message: "No se puede marcar como completado antes de la fecha de llegada." });
    }

    if (reservasActivas > 0) {
      await vuelo.update({ estado, fecha_salida, fecha_llegada });
    } else {
      await vuelo.update({ codigo_vuelo, fecha_salida, fecha_llegada, estado, id_ruta, id_avion });
    }
    res.json({ message: "Vuelo actualizado correctamente.", vuelo });
  } catch (error) {
    console.error("Error al actualizar vuelo:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Cancelar un vuelo (baja lógica) ─────────────────────────
const cancelarVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const vuelo = await Vuelo.findByPk(id);
    if (!vuelo) {
      return res.status(404).json({ message: "Vuelo no encontrado." });
    }
    const { Reserva } = require("../models/index");
    const reservasActivas = await Reserva.count({
      where: { id_vuelo: id, estado: "confirmada" }
    });
    if (reservasActivas > 0) {
      return res.status(400).json({ 
        message: `Este vuelo tiene ${reservasActivas} reserva(s) activa(s). Cancela las reservas primero.` 
      });
    }
    await vuelo.update({ estado: "cancelado" });
    res.json({ message: "Vuelo cancelado correctamente.", vuelo });
  } catch (error) {
    console.error("Error al cancelar vuelo:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Eliminar un vuelo (solo si está cancelado) ───────────────
const eliminarVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const vuelo = await Vuelo.findByPk(id);
    if (!vuelo) {
      return res.status(404).json({ message: "Vuelo no encontrado." });
    }
    if (vuelo.estado !== "cancelado") {
      return res
        .status(400)
        .json({ message: "Solo se pueden eliminar vuelos cancelados." });
    }
    // Verificar si tiene reservas antes de eliminar
    const { Reserva, sequelize } = require("../models/index");
    const totalReservas = await Reserva.count({ where: { id_vuelo: id } });
    if (totalReservas > 0) {
      return res.status(400).json({ 
        message: `Este vuelo tiene ${totalReservas} reserva(s). Ve a la sección de Reservas y elimínalas primero.` 
      });
    }
    // Eliminar registros dependientes antes de eliminar el vuelo
    await VueloTripulacion.destroy({ where: { id_vuelo: id } });
    await sequelize.query(`DELETE FROM vuelo_asientos WHERE id_vuelo = :id`, { replacements: { id } });
    await vuelo.destroy();
    res.json({ message: "Vuelo eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar vuelo:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Obtener tripulación de un vuelo ─────────────────────────
const obtenerTripulacionVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const vuelo = await Vuelo.findByPk(id, {
      include: [{ model: Tripulacion, through: { attributes: ['rol_en_vuelo'] } }]
    });
    if (!vuelo) return res.status(404).json({ message: "Vuelo no encontrado." });
    const tripulacion = (vuelo.Tripulacions || []).map(t => ({
      ...t.toJSON(),
      rol: t.VueloTripulacion?.rol_en_vuelo || t.rol
    }));
    res.json(tripulacion);
  } catch (error) {
    console.error("Error al obtener tripulación:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Asignar tripulación a un vuelo ──────────────────────────
const asignarTripulacionVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const { tripulacion } = req.body; // [id1, id2, id3, id4]

    const vuelo = await Vuelo.findByPk(id);
    if (!vuelo) return res.status(404).json({ message: "Vuelo no encontrado." });

    // Verificar disponibilidad de cada tripulante
    for (const id_tripulacion of tripulacion) {
      const asignaciones = await VueloTripulacion.findAll({ where: { id_tripulacion } });
      for (const asig of asignaciones) {
        if (asig.id_vuelo == id) continue;
        const otroVuelo = await Vuelo.findByPk(asig.id_vuelo);
        if (!otroVuelo) continue;
        const conflicto =
          new Date(otroVuelo.fecha_salida) < new Date(vuelo.fecha_llegada) &&
          new Date(otroVuelo.fecha_llegada) > new Date(vuelo.fecha_salida);
        if (conflicto) {
          const trip = await Tripulacion.findByPk(id_tripulacion);
          return res.status(400).json({
            message: `${trip.nombre} ${trip.primer_apellido} ya tiene un vuelo en ese horario.`
          });
        }
      }
    }

    // Eliminar asignación anterior y guardar nueva
    await VueloTripulacion.destroy({ where: { id_vuelo: id } });
    const roles = ['piloto', 'copiloto', 'auxiliar', 'auxiliar'];
    for (let i = 0; i < tripulacion.length; i++) {
      await VueloTripulacion.create({ 
        id_vuelo: id, 
        id_tripulacion: tripulacion[i],
        rol_en_vuelo: roles[i]
      });
    }

    res.json({ message: "Tripulación asignada correctamente." });
  } catch (error) {
    console.error("Error al asignar tripulación:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  obtenerVuelos,
  obtenerVueloPorId,
  crearVuelo,
  actualizarVuelo,
  cancelarVuelo,
  eliminarVuelo,
  obtenerTripulacionVuelo,
  asignarTripulacionVuelo,
};
