// Principio SOLID - Single Responsibility: cada middleware tiene una sola responsabilidad
// Principio SOLID - Open/Closed: nuevas rutas se agregan sin modificar las existentes
// Patron de diseño - Facade: app.js centraliza y simplifica la configuracion del servidor
// Clean Code: configuracion modular, cada seccion claramente separada y comentada

// Punto de entrada del servidor Express
// Aquí se configuran todos los middlewares de seguridad y las rutas
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// Importar rutas
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const pasajerosRoutes = require("./routes/pasajeros");
const reservasRoutes = require("./routes/reservas");
const tripulacionRoutes = require("./routes/tripulacion");
const vuelosRoutes = require("./routes/vuelos");
const rutasRoutes = require("./routes/rutas");
const avionesRoutes = require("./routes/aviones");
const aeropuertosRoutes = require("./routes/aeropuertos");

// Importar conexión a BD
const sequelize = require("./config/database");
require("./models/index");

const app = express();
app.set('trust proxy', 1);


// ─── Seguridad: Helmet protege cabeceras HTTP ────────────────
app.use(helmet());

// ─── Seguridad: CORS — solo permite peticiones del frontend ──
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://sanchezreyeslaura-reserva-vuelos-frontend.onrender.com"],
    credentials: true,
  }),
);

// ─── Parseo de JSON y formularios ───────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Seguridad: Rate Limiting ────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Demasiadas peticiones, intenta más tarde.",
});
app.use(limiter);

// ─── Seguridad: Sesiones ─────────────────────────────────────
let sessionStore;
if (process.env.NODE_ENV === 'production') {
  const MySQLStore = require('express-mysql-session')(session);
  sessionStore = new MySQLStore({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
      rolling: true,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    },
  }),
);

// ─── Rutas de la API ─────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/pasajeros", pasajerosRoutes);
app.use("/api/reservas", reservasRoutes);
app.use("/api/tripulacion", tripulacionRoutes);
app.use("/api/vuelos", vuelosRoutes);
app.use("/api/rutas", rutasRoutes);
app.use("/api/aviones", avionesRoutes);
app.use("/api/aeropuertos", aeropuertosRoutes);

// ─── Ruta no encontrada (404) ────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// ─── Conexión a BD e inicio del servidor ─────────────────────
const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la BD establecida correctamente");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar con la BD:", err);
  });
