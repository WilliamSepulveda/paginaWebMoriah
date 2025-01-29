const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Servir archivos estáticos correctamente
app.use(express.static(__dirname)); // Sirve todo desde la raíz
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// Servir el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
