// Controlador de Reservas — maneja el ABCC completo
// Principio SOLID: Single Responsibility — solo maneja lógica de reservas
// Principio SOLID - Open/Closed: nuevas operaciones se agregan sin modificar las existentes
// Principio SOLID - Dependency Inversion: depende de modelos Sequelize no de consultas directas
// Patron de diseño - Strategy: calculo de descuentos intercambiable segun tipo de ruta y clase
// Clean Code: funciones con un solo proposito, manejo de errores consistente en todas las operaciones
const {
  Reserva,
  Pasajero,
  Vuelo,
  GrupoReserva,
  Pago,
  Ruta,
  Avion,
  Aeropuerto,
} = require("../models/index");
const { reservaObserver } = require("../services/ReservaObserver");

// ─── Obtener todas las reservas ───────────────────────────────
const obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      include: [
        { model: Pasajero },
        {
          model: Vuelo,
          as: "Vuelo",
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
          ],
        },
        { model: GrupoReserva, include: [{ model: Pago }] },
      ],
    });
    res.json(reservas);
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Obtener una reserva por ID ───────────────────────────────
const obtenerReservaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id, {
      include: [
        { model: Pasajero },
        { model: Vuelo, as: "Vuelo" },
        { model: GrupoReserva },
      ],
    });
    if (!reserva)
      return res.status(404).json({ message: "Reserva no encontrada." });
    res.json(reserva);
  } catch (error) {
    console.error("Error al obtener reserva:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Crear una reserva con pago ───────────────────────────────
const crearReserva = async (req, res) => {
  try {
    const { id_vuelo, id_pasajero, clase, metodo_pago, monto, id_asiento } =
      req.body;

    // Verificar que el pasajero no tenga reserva activa en este vuelo
    const reservaExistente = await Reserva.findOne({
      where: { id_pasajero, id_vuelo, estado: "confirmada" },
    });
    if (reservaExistente) {
      return res.status(400).json({
        message: "El pasajero ya tiene una reserva confirmada en este vuelo.",
      });
    }

    // Verificar que el pasajero no tenga reserva en la misma fecha de salida
    const { sequelize } = require("../models/index");
    const [conflicto] = await sequelize.query(
      `
      SELECT r.id_reserva FROM reservas r
      JOIN vuelos v ON r.id_vuelo = v.id_vuelo
      JOIN vuelos v2 ON v2.id_vuelo = :id_vuelo
      WHERE r.id_pasajero = :id_pasajero
      AND r.estado = 'confirmada'
      AND DATE(v.fecha_salida) = DATE(v2.fecha_salida)
    `,
      {
        replacements: { id_pasajero, id_vuelo },
        type: sequelize.QueryTypes.SELECT,
      },
    );

    if (conflicto) {
      return res.status(400).json({
        message: "El pasajero ya tiene una reserva en esa fecha de salida.",
      });
    }

    // Crear grupo de reserva
    const grupo = await GrupoReserva.create({
      id_pasajero_responsable: id_pasajero,
    });

    // Crear la reserva
    const nuevaReserva = await Reserva.create({
      id_vuelo,
      id_pasajero,
      id_grupo: grupo.id_grupo,
      estado: "confirmada",
      clase: clase || "turista",
    });

    // Guardar asiento seleccionado en vuelo_asientos
    if (id_asiento) {
      const { sequelize, ReservaAsiento } = require("../models/index");
      await sequelize.query(
        `INSERT INTO vuelo_asientos (id_vuelo, id_asiento, estado)
         VALUES (:id_vuelo, :id_asiento, 'ocupado')
         ON DUPLICATE KEY UPDATE estado = 'ocupado'`,
        { replacements: { id_vuelo, id_asiento } },
      );
      // Registrar asiento en reserva_asiento (relación N:M reserva-asiento)
      await ReservaAsiento.create({
        id_reserva: nuevaReserva.id_reserva,
        id_asiento: id_asiento,
        precio: monto,
      });
    }

    // Crear el pago
    await Pago.create({
      metodo: metodo_pago || "transferencia",
      monto_total: monto,
      moneda: "MXN",
      estado: "completado",
      id_grupo: grupo.id_grupo,
    });

    // Patrón Observer — notifica a los suscriptores que se creó una reserva
    reservaObserver.notificar("confirmada", {
      id_reserva: nuevaReserva.id_reserva,
    });

    res.status(201).json({
      message: "Reserva creada correctamente.",
      reserva: nuevaReserva,
    });
  } catch (error) {
    console.error("Error al crear reserva:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Actualizar una reserva ───────────────────────────────────
const actualizarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    const reserva = await Reserva.findByPk(id);
    if (!reserva)
      return res.status(404).json({ message: "Reserva no encontrada." });
    await reserva.update({ estado });
    // Patrón Observer — notifica a los suscriptores del cambio de estado
    reservaObserver.notificar(estado, { id_reserva: id });
    res.json({ message: "Reserva actualizada correctamente.", reserva });
  } catch (error) {
    console.error("Error al actualizar reserva:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Cancelar una reserva ─────────────────────────────────────
const cancelarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    if (!reserva)
      return res.status(404).json({ message: "Reserva no encontrada." });
    await reserva.update({ estado: "cancelada" });
    res.json({ message: "Reserva cancelada correctamente.", reserva });
  } catch (error) {
    console.error("Error al cancelar reserva:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// ─── Eliminar una reserva ─────────────────────────────────────
const eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    if (!reserva)
      return res.status(404).json({ message: "Reserva no encontrada." });
    // Eliminar registros dependientes antes de eliminar la reserva
    const { ReservaAsiento } = require("../models/index");
    const id_grupo = reserva.id_grupo;
    await ReservaAsiento.destroy({ where: { id_reserva: id } });
    await reserva.destroy();
    // Si el grupo quedó sin reservas, eliminar grupo y pago
    if (id_grupo) {
      const reservasRestantes = await Reserva.count({ where: { id_grupo } });
      if (reservasRestantes === 0) {
        await Pago.destroy({ where: { id_grupo } });
        await GrupoReserva.destroy({ where: { id_grupo } });
      }
    }
    res.json({ message: "Reserva eliminada correctamente." });
  } catch (error) {
    console.error("Error al eliminar reserva:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  obtenerReservas,
  obtenerReservaPorId,
  crearReserva,
  actualizarReserva,
  cancelarReserva,
  eliminarReserva,
};
