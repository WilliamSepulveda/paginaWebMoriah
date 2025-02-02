require('dotenv').config(); // Cargar variables de entorno primero
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ConnectMongo = require('./backend/config/db.js'); // Ajustar el import

// Crear instancia de la conexión a MongoDB
const connectMongo = new ConnectMongo(); // Instanciamos la clase ConnectMongo
connectMongo.connectOpen() // Conectar a la base de datos
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));

// Configuración de la app Express
const app = express();
const port = process.env.PORT || 5500;

// Middleware para manejo de JSON y formularios
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// Ruta principal (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configurar transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para enviar correos
app.post('/api/enviar-correo', async (req, res) => {
  try {
    const { nombre, correo, telefono, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
      return res.status(400).json({ message: 'Todos los campos requeridos deben completarse.' });
    }

    await transporter.sendMail({
      from: `"Solicitud de Oración" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'destinatario@gmail.com', // Destinatario desde .env
      subject: 'Nueva solicitud de oración',
      html: `
        <h1>Solicitud de Oración</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
});

// Iniciar servidor con manejo de errores
app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
}).on('error', (err) => {
  console.error('❌ Error al iniciar el servidor:', err);
});
