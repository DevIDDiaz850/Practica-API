const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/LibroController');

router.delete('/eliminarLibro/:id', LibroController.eliminnarLibro)
router.put('/actualizarLibro/:id', LibroController.actualizarLibro)
router.get('/obtenerLibros', LibroController.obtenerLibros);
router.post('/crearLibro', LibroController.crearLibro);

module.exports = router;

