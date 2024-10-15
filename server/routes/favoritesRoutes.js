const express = require('express');
const favoritosController = require('../controllers/favoritosController');

const router = express.Router();

router.post('/favoritos', favoritosController.handleAgregarFavorito);
router.delete('/favoritos', favoritosController.handleEliminarFavorito);
router.get('/favoritos/:usuario_id', favoritosController.handleObtenerFavoritos);

module.exports = router;
