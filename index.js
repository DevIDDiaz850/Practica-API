const express = require('express');
const dotenv = require('dotenv');
const { conectarDB } = require('./config/db');
const libroRoutes = require('./routes/routes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

conectarDB();

app.get('/', (req, res) => {
    res.send('API REST funcionando. Accede a /api/libros para gestionar los recursos.');
});

app.use('/api', libroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
});