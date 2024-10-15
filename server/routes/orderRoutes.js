const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/crear'/*, authMiddleware*/, pedidosController.handleCrearPedido);
router.get('/historialCompras'/*, authMiddleware*/, pedidosController.handleObtenerHistorialPedidos);
router.get('/:usuario_id'/*, authMiddleware*/, pedidosController.handleObtenerPedidosUsuario);


module.exports = router;
