const { obtenerHistorialPedidos } = require('../models/order.model');

exports.getOrderHistory = () => {
  return new Promise((resolve, reject) => {
    obtenerHistorialPedidos((err, orders) => {
      if (err) reject(err);
      else resolve(orders);
    });
  });
};
