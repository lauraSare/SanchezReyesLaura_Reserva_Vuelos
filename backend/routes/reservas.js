// Principio SOLID - Single Responsibility: este archivo solo define rutas de reservas
// Principio SOLID - Open/Closed: nuevas rutas se agregan sin modificar las existentes
// Patron de diseño - Chain of Responsibility: verificarSesion protege cada ruta antes del controlador
// Clean Code: rutas claras con metodos HTTP correctos, GET obtener, POST crear, PUT actualizar, DELETE eliminar
// Rutas de Reservas — ABCC completo
// Seguridad: verificarSesion protege todas las rutas
const express = require("express");
const router = express.Router();
const {
  obtenerReservas,
  obtenerReservaPorId,
  crearReserva,
  actualizarReserva,
  cancelarReserva,
  eliminarReserva,
} = require("../controllers/reservaController");
const { verificarSesion } = require("../middlewares/auth");

// GET /api/reservas — obtener todas las reservas
router.get("/", verificarSesion, obtenerReservas);

// GET /api/reservas/:id/boleto — obtener todos los datos para el boleto PDF
router.get("/:id/boleto", verificarSesion, async (req, res) => {
  try {
    const { id } = req.params;
    const { sequelize } = require("../models/index");

    // Datos completos de la reserva
    const [reserva] = await sequelize.query(
      `
      SELECT 
        r.id_reserva, r.fecha_reserva, r.estado, r.clase,
        p.nombre, p.primer_apellido, p.segundo_apellido,
        p.num_pasaporte, p.nacionalidad, p.correo, p.telefono,
        v.codigo_vuelo, v.fecha_salida, v.fecha_llegada, v.estado as estado_vuelo,
        av.matricula, av.modelo, av.fabricante,
        ao.nombre as origen_nombre, ao.codigo_iata as origen_iata, ao.ciudad as origen_ciudad, ao.pais as origen_pais,
        ad.nombre as destino_nombre, ad.codigo_iata as destino_iata, ad.ciudad as destino_ciudad, ad.pais as destino_pais,
        ru.distancia_km, ru.duracion_estimada,
        a.numero_asiento, a.clase as clase_asiento,
        pg.metodo, pg.monto_total, pg.moneda, pg.fecha_transaccion
      FROM reservas r
      JOIN pasajeros p ON r.id_pasajero = p.id_pasajeros
      JOIN vuelos v ON r.id_vuelo = v.id_vuelo
      JOIN aviones av ON v.id_avion = av.id_avion
      JOIN rutas ru ON v.id_ruta = ru.id_ruta
      JOIN aeropuertos ao ON ru.id_origen = ao.id_aeropuerto
      JOIN aeropuertos ad ON ru.id_destino = ad.id_aeropuerto
      LEFT JOIN vuelo_asientos va ON va.id_vuelo = v.id_vuelo AND va.estado = 'ocupado' AND va.id_asiento IN (
        SELECT id_asiento FROM asientos WHERE id_avion = av.id_avion
      )
      LEFT JOIN asientos a ON va.id_asiento = a.id_asiento
      LEFT JOIN grupo_reserva gr ON r.id_grupo = gr.id_grupo
      LEFT JOIN pagos pg ON gr.id_grupo = pg.id_grupo
      WHERE r.id_reserva = :id
      LIMIT 1
    `,
      { replacements: { id }, type: sequelize.QueryTypes.SELECT },
    );

    if (!reserva)
      return res.status(404).json({ message: "Reserva no encontrada." });

    // Validar que tenga todos los datos necesarios
    const faltantes = [];
    if (!reserva.numero_asiento) faltantes.push("asiento");
    if (!reserva.metodo) faltantes.push("pago");

    // Tripulación del vuelo
    const tripulacion = await sequelize.query(
      `
      SELECT t.nombre, t.primer_apellido, vt.rol_en_vuelo as rol
      FROM vuelo_tripulacion vt
      JOIN tripulacion t ON vt.id_tripulacion = t.id_tripulacion
      WHERE vt.id_vuelo = (SELECT id_vuelo FROM reservas WHERE id_reserva = :id)
    `,
      { replacements: { id }, type: sequelize.QueryTypes.SELECT },
    );

    if (tripulacion.length === 0) faltantes.push("tripulación");

    if (faltantes.length > 0) {
      return res.status(400).json({
        message: `Faltan datos para generar el boleto: ${faltantes.join(", ")}.`,
        faltantes,
      });
    }

    res.json({ reserva, tripulacion });
  } catch (error) {
    console.error("Error al obtener boleto:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

// GET /api/reservas/grupos/todos — obtener todos los grupos con sus reservas y pagos
router.get("/grupos/todos", verificarSesion, async (req, res) => {
  try {
    const { sequelize } = require("../models/index");
    const grupos = await sequelize.query(
      `
      SELECT 
        gr.id_grupo, gr.fecha_creacion,
        p.nombre AS responsable_nombre, p.primer_apellido AS responsable_apellido,
        COUNT(r.id_reserva) AS total_reservas,
        v.codigo_vuelo, ao.ciudad AS origen, ad.ciudad AS destino,
        pg.metodo, pg.monto_total, pg.moneda
      FROM grupo_reserva gr
      JOIN pasajeros p ON gr.id_pasajero_responsable = p.id_pasajeros
      LEFT JOIN reservas r ON gr.id_grupo = r.id_grupo
      LEFT JOIN vuelos v ON r.id_vuelo = v.id_vuelo
      LEFT JOIN rutas ru ON v.id_ruta = ru.id_ruta
      LEFT JOIN aeropuertos ao ON ru.id_origen = ao.id_aeropuerto
      LEFT JOIN aeropuertos ad ON ru.id_destino = ad.id_aeropuerto
      LEFT JOIN pagos pg ON gr.id_grupo = pg.id_grupo
      GROUP BY gr.id_grupo, gr.fecha_creacion, p.nombre, p.primer_apellido,
               v.codigo_vuelo, ao.ciudad, ad.ciudad, pg.metodo, pg.monto_total, pg.moneda
      ORDER BY gr.fecha_creacion DESC
    `,
      { type: sequelize.QueryTypes.SELECT },
    );
    res.json(grupos);
  } catch (error) {
    console.error("Error al obtener grupos:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

// POST /api/reservas/grupo — crear reserva grupal (Familia o Amigos)
router.post("/grupo", verificarSesion, async (req, res) => {
  try {
    const { id_vuelo, pasajeros, metodo_pago, tipo_grupo } = req.body;
    if (!id_vuelo)
      return res.status(400).json({ message: "El vuelo es obligatorio." });
    if (!pasajeros || pasajeros.length < 2)
      return res.status(400).json({
        message: "Se requieren al menos 2 pasajeros para una reserva grupal.",
      });
    if (!metodo_pago)
      return res
        .status(400)
        .json({ message: "El método de pago es obligatorio." });

    const {
      sequelize,
      GrupoReserva,
      Reserva,
      Pago,
      ReservaAsiento,
    } = require("../models/index");
    const { reservaObserver } = require("../services/ReservaObserver");

    for (const p of pasajeros) {
      const existe = await Reserva.findOne({
        where: { id_pasajero: p.id_pasajero, id_vuelo, estado: "confirmada" },
      });
      if (existe) return res.status(400).json({
        message: `El pasajero ${p.nombre} ya tiene una reserva confirmada en este vuelo.`,
      });

      const [conflictoFecha] = await sequelize.query(`
        SELECT r.id_reserva FROM reservas r
        JOIN vuelos v ON r.id_vuelo = v.id_vuelo
        JOIN vuelos v2 ON v2.id_vuelo = :id_vuelo
        WHERE r.id_pasajero = :id_pasajero
        AND r.estado = 'confirmada'
        AND DATE(v.fecha_salida) = DATE(v2.fecha_salida)
      `, { replacements: { id_pasajero: p.id_pasajero, id_vuelo }, type: sequelize.QueryTypes.SELECT });

      if (conflictoFecha) return res.status(400).json({
        message: `${p.nombre} ya tiene una reserva en esa fecha de salida.`,
      });
    }

    const grupo = await GrupoReserva.create({
      id_pasajero_responsable: pasajeros[0].id_pasajero,
      descripcion: tipo_grupo || "grupo",
    });

    let montoTotal = 0;
    const reservasCreadas = [];

    for (const p of pasajeros) {
      const nuevaReserva = await Reserva.create({
        id_vuelo,
        id_pasajero: p.id_pasajero,
        id_grupo: grupo.id_grupo,
        estado: "confirmada",
        clase: p.clase || "turista",
        precio_pagado: p.monto || 0,
      });

      if (p.id_asiento) {
        await sequelize.query(
          `INSERT INTO vuelo_asientos (id_vuelo, id_asiento, estado) VALUES (:id_vuelo, :id_asiento, 'ocupado') ON DUPLICATE KEY UPDATE estado = 'ocupado'`,
          { replacements: { id_vuelo, id_asiento: p.id_asiento } },
        );
        await ReservaAsiento.create({
          id_reserva: nuevaReserva.id_reserva,
          id_asiento: p.id_asiento,
          precio: p.monto,
        });
      }

      montoTotal += Number(p.monto || 0);
      reservasCreadas.push(nuevaReserva);
      reservaObserver.notificar("confirmada", {
        id_reserva: nuevaReserva.id_reserva,
      });
    }

    await Pago.create({
      metodo: metodo_pago,
      monto_total: montoTotal,
      moneda: "MXN",
      estado: "completado",
      id_grupo: grupo.id_grupo,
    });

    res.status(201).json({
      message: "Reserva grupal creada correctamente.",
      id_grupo: grupo.id_grupo,
      reservas: reservasCreadas,
    });
  } catch (error) {
    console.error("Error al crear reserva grupal:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

// GET /api/reservas/grupos/:id/pasajeros — obtener todos los pasajeros de un grupo
router.get("/grupos/:id/pasajeros", verificarSesion, async (req, res) => {
  try {
    const { id } = req.params;
    const { sequelize } = require("../models/index");

    const pasajeros = await sequelize.query(
      `
      SELECT 
        r.id_reserva, r.clase, r.estado,
        p.nombre, p.primer_apellido, p.segundo_apellido, p.num_pasaporte,
        a.numero_asiento, a.clase as clase_asiento,
        v.codigo_vuelo, v.fecha_salida, v.fecha_llegada,
        ao.ciudad as origen_ciudad, ao.codigo_iata as origen_iata,
        ad.ciudad as destino_ciudad, ad.codigo_iata as destino_iata,
        av.modelo, av.matricula,
        pg.metodo, pg.monto_total, pg.moneda,
        gr.descripcion as tipo_grupo
      FROM reservas r
      JOIN pasajeros p ON r.id_pasajero = p.id_pasajeros
      JOIN vuelos v ON r.id_vuelo = v.id_vuelo
      JOIN aviones av ON v.id_avion = av.id_avion
      JOIN rutas ru ON v.id_ruta = ru.id_ruta
      JOIN aeropuertos ao ON ru.id_origen = ao.id_aeropuerto
      JOIN aeropuertos ad ON ru.id_destino = ad.id_aeropuerto
      JOIN grupo_reserva gr ON r.id_grupo = gr.id_grupo
      LEFT JOIN pagos pg ON gr.id_grupo = pg.id_grupo
      LEFT JOIN reserva_asiento ra ON ra.id_reserva = r.id_reserva
      LEFT JOIN asientos a ON ra.id_asiento = a.id_asiento
      WHERE r.id_grupo = :id
    `,
      { replacements: { id }, type: sequelize.QueryTypes.SELECT },
    );

    const tripulacion = await sequelize.query(
      `
      SELECT t.nombre, t.primer_apellido, vt.rol_en_vuelo as rol
      FROM vuelo_tripulacion vt
      JOIN tripulacion t ON vt.id_tripulacion = t.id_tripulacion
      WHERE vt.id_vuelo = (SELECT id_vuelo FROM reservas WHERE id_grupo = :id LIMIT 1)
    `,
      { replacements: { id }, type: sequelize.QueryTypes.SELECT },
    );

    res.json({ pasajeros, tripulacion });
  } catch (error) {
    console.error("Error al obtener pasajeros del grupo:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
});

// PATCH /api/reservas/:id/cancelar — cancelar una reserva (baja lógica)
router.patch("/:id/cancelar", verificarSesion, cancelarReserva);

// GET /api/reservas/:id — obtener una reserva por ID
router.get("/:id", verificarSesion, obtenerReservaPorId);

// POST /api/reservas — crear una reserva
router.post("/", verificarSesion, crearReserva);

// PUT /api/reservas/:id — actualizar una reserva
router.put("/:id", verificarSesion, actualizarReserva);

// DELETE /api/reservas/:id — eliminar una reserva (baja física)
router.delete("/:id", verificarSesion, eliminarReserva);

module.exports = router;
