const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, 'src')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Cambia 'index.html' si es necesario
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
