const express = require('express');
const authController = require('../controllers/usuariosControllers');
const authenticateMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/registro', authController.registerUser);
router.post('/login', authController.authenticateUser);
router.get('/usuario', authenticateMiddleware, authController.obtenerUsuario);
router.post('/logout', authController.logout);

module.exports = router;
