const { verifyToken } = require('../config/jwt');

function authenticateMiddleware(req, res, next) {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  verifyToken(token, (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to authenticate token.' });
    }
    req.usuario_id = decoded.usuario_id;
    next();
  });
}

module.exports = authenticateMiddleware;
