const { createConnection } = require('../database/database.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/jwt');

function registerUser(password, email, nombre, apellido, direccion, telefono, callback) {
  const connection = createConnection();
  const saltRounds = 5;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      callback(err);
      return;
    }

    const usuarioQuery = 'INSERT INTO Usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)';
    const cuentaQuery = 'INSERT INTO Cuentas (usuario_id, email, contraseña) VALUES (?, ?, ?)';

    connection.beginTransaction((err) => {
      if (err) {
        connection.end();
        callback(err);
        return;
      }

      connection.query(usuarioQuery, [nombre, apellido, direccion, telefono], (err, usuarioResult) => {
        if (err) {
          return connection.rollback(() => {
            connection.end();
            callback(err);
          });
        }

        const usuario_id = usuarioResult.insertId;

        connection.query(cuentaQuery, [usuario_id, email, hashedPassword], (err, cuentaResult) => {
          if (err) {
            return connection.rollback(() => {
              connection.end();
              callback(err);
            });
          }

          connection.commit((err) => {
            if (err) {
              return connection.rollback(() => {
                connection.end();
                callback(err);
              });
            }

            connection.end();
            callback(null, usuario_id);
          });
        });
      });
    });
  });
}

function authenticateUser(email, password, callback) {
  const connection = createConnection();
  
  const query = 'SELECT usuario_id, email, contraseña FROM Cuentas WHERE email = ?';
  
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      callback(err);
      return;
    }
  
    if (results.length === 0) {
      console.log('Usuario no encontrado.');
      callback(null, false);
      return;
    }
  
    console.log('Resultados de la consulta:', results);
  
    const { usuario_id, contraseña: hashedPassword } = results[0];
    console.log('Usuario encontrado:', usuario_id);
  
    bcrypt.compare(password, hashedPassword, (err, passwordValida) => {
      if (err) {
        console.error('Error en bcrypt.compare:', err);
        callback(err);
        return;
      }
  
      if (passwordValida) {
        const token = generateToken(usuario_id);
        console.log('Token generado:', token);
        callback(null, true, token, usuario_id);
      } else {
        console.log('Contraseña incorrecta.');
        callback(null, false);
      }
    });
  });

  connection.end();
}

function obtenerUsuario(usuario_id, callback) {
  const connection = createConnection();
  
  const query = 'SELECT * FROM Usuarios WHERE usuario_id = ?';

  connection.query(query, [usuario_id], (err, results) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, results[0]);
  });

  connection.end();
}

module.exports = {
  registerUser,
  authenticateUser,
  obtenerUsuario
};
