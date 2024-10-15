const express = require('express');
const productosController = require('../controllers/productosController');

const router = express.Router();

router.get('/productos', productosController.handleObtenerProductos);
router.get('/producto/:id', productosController.handleObtenerProductoEspecifico);

module.exports = router;
