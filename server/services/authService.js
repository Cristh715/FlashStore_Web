const { registerUser, authenticateUser, obtenerUsuario } = require('../models/auth.model');

exports.registerUser = async (password, email, nombre, apellido, direccion, telefono) => {
  return new Promise((resolve, reject) => {
    registerUser(password, email, nombre, apellido, direccion, telefono, (err, userId) => {
      if (err) reject(err);
      else resolve(userId);
    });
  });
};

exports.authenticateUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    authenticateUser(email, password, (err, authenticated, token, usuario_id) => {
      if (err) reject(err);
      else resolve({ authenticated, token, usuario_id });
    });
  });
};

exports.obtenerUsuario = async (usuario_id) => {
  return new Promise((resolve, reject) => {
    obtenerUsuario(usuario_id, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
};
