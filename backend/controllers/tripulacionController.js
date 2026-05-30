// Controlador de Tripulación — maneja el ABCC completo
// Principio SOLID: Single Responsibility — solo maneja lógica de tripulación
// Principio SOLID - Open/Closed: nuevas operaciones se agregan sin modificar las existentes
// Principio SOLID - Interface Segregation: cada funcion expone solo lo necesario
// Patron de diseño - Repository: abstrae el acceso a datos de tripulacion mediante Sequelize
// Clean Code: funciones pequeñas con un solo proposito, mensajes de error descriptivos
const { Tripulacion, Vuelo, VueloTripulacion } = require("../models/index");

// ─── Obtener toda la tripulación ──────────────────────────────
const obtenerTripulacion = async (req, res) => {
  try {
    const tripulacion = await Tripulacion.findAll();
    res.json(tripulacion);
  } catch (error) {
    console.error("Error al obtener tripulación:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Obtener un miembro por ID ────────────────────────────────
const obtenerTripulacionPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const miembro = await Tripulacion.findByPk(id, {
      include: [{ model: Vuelo, as: "Vuelos" }],
    });
    if (!miembro) {
      return res
        .status(404)
        .json({ message: "Miembro de tripulación no encontrado." });
    }
    res.json(miembro);
  } catch (error) {
    console.error("Error al obtener miembro:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Crear un miembro de tripulación ─────────────────────────
const crearTripulacion = async (req, res) => {
  try {
    const { nombre, primer_apellido, segundo_apellido, nacionalidad, rol } =
      req.body;

    const nuevoMiembro = await Tripulacion.create({
      nombre,
      primer_apellido,
      segundo_apellido,
      nacionalidad,
      rol,
    });

    res.status(201).json({
      message: "Miembro de tripulación creado correctamente.",
      tripulacion: nuevoMiembro,
    });
  } catch (error) {
    console.error("Error al crear tripulación:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Actualizar un miembro de tripulación ────────────────────
const actualizarTripulacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, primer_apellido, segundo_apellido, nacionalidad, rol } =
      req.body;

    const miembro = await Tripulacion.findByPk(id);
    if (!miembro) {
      return res
        .status(404)
        .json({ message: "Miembro de tripulación no encontrado." });
    }

    await miembro.update({
      nombre,
      primer_apellido,
      segundo_apellido,
      nacionalidad,
      rol,
    });
    res.json({
      message: "Miembro de tripulación actualizado correctamente.",
      tripulacion: miembro,
    });
  } catch (error) {
    console.error("Error al actualizar tripulación:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Eliminar un miembro de tripulación ──────────────────────
const eliminarTripulacion = async (req, res) => {
  try {
    const { id } = req.params;
    const miembro = await Tripulacion.findByPk(id);
    if (!miembro) {
      return res
        .status(404)
        .json({ message: "Miembro de tripulación no encontrado." });
    }

    // Verificar si está asignado a algún vuelo activo
    const vuelos = await VueloTripulacion.findAll({
      where: { id_tripulacion: id },
      include: [{ model: Vuelo, as: "Vuelo" }],
    });

    const vuelosActivos = vuelos.filter(
      (vt) =>
        vt.Vuelo &&
        (vt.Vuelo.estado === "programado" || vt.Vuelo.estado === "en_vuelo"),
    );

    if (vuelosActivos.length > 0) {
      const codigos = vuelosActivos
        .map((vt) => vt.Vuelo.codigo_vuelo)
        .join(", ");
      return res.status(400).json({
        message: `No se puede eliminar. Está asignado a los vuelos: ${codigos}. Primero quítalo de esos vuelos.`,
      });
    }

    await miembro.destroy();
    res.json({ message: "Miembro de tripulación eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar tripulación:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  obtenerTripulacion,
  obtenerTripulacionPorId,
  crearTripulacion,
  actualizarTripulacion,
  eliminarTripulacion,
};
