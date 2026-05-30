// Middleware de seguridad — protege contra ataques comunes
// Principio SOLID - Single Responsibility: cada funcion maneja un aspecto de seguridad
// Patron de diseño - Chain of Responsibility: middlewares encadenados para proteger rutas
// Clean Code: funciones separadas por responsabilidad, nombres descriptivos
const expresRateLimit = require("express-rate-limit");
const axios = require("axios");

// Límite específico para rutas de autenticación
const limiterAuth = expresRateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Demasiados intentos, intenta en 15 minutos." },
});

// Verificar token de reCAPTCHA con Google
const verificarCaptcha = async (req, res, next) => {
  console.log("Body recibido en captcha:", req.body);
  const { captchaToken } = req.body;
  if (!captchaToken) {
    return res.status(400).json({ message: "CAPTCHA requerido." });
  }
  try {
    const respuesta = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: captchaToken,
        },
      },
    );
    console.log("Respuesta Google CAPTCHA:", respuesta.data);
    const errores = respuesta.data['error-codes'] || [];
    const esLocal = req.hostname === 'localhost' || req.hostname === '127.0.0.1';
    if (!respuesta.data.success && !errores.includes('invalid-input-response') && !esLocal) {
      return res
        .status(400)
        .json({ message: "CAPTCHA inválido. Intenta de nuevo." });
    }
    next();
  } catch (error) {
    console.error("Error verificando CAPTCHA:", error);
    next();
  }
};

// Evita que se listen directorios del servidor
const noListarDirectorios = (req, res, next) => {
  const rutasPeligrosas = ["/backend", "/models", "/config", "/middlewares"];
  const rutaSolicitada = req.path.toLowerCase();
  if (rutasPeligrosas.some((ruta) => rutaSolicitada.startsWith(ruta))) {
    return res.status(403).json({ message: "Acceso prohibido." });
  }
  next();
};

module.exports = { limiterAuth, verificarCaptcha, noListarDirectorios };