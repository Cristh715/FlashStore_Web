const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

function generateToken(usuario_id) {
  const payload = { usuario_id };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verifyToken(token, callback) {
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, decoded);
  });
}

module.exports = {
  generateToken,
  verifyToken
};
