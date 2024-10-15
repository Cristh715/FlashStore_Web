const authService = require('../services/authService');

exports.registerUser = async (req, res) => {
  try {
    const { password, email, nombre, apellido, direccion, telefono } = req.body;
    const userId = await authService.registerUser(password, email, nombre, apellido, direccion, telefono);
    res.status(200).send({ userId });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { authenticated, token, usuario_id } = await authService.authenticateUser(email, password);

    if (authenticated) {
      res.cookie('token', token, { httpOnly: true });
      res.status(200).send({ usuario_id });
    } else {
      res.status(401).send({ error: 'Credenciales incorrectas.' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario_id = req.usuario_id;
    const user = await authService.obtenerUsuario(usuario_id);
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).send({ message: 'Logout successful' });
};
