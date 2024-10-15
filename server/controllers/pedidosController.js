
const { crearPedido, agregarDetallePedido, obtenerPedidosUsuario ,obtenerHistorialPedidos} = require('../models/order.model');

function handleCrearPedido(req, res) {
    const { usuario_id, metodo_pago_id, total, detalles } = req.body;
    crearPedido(usuario_id, metodo_pago_id, total, (err, pedido) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        const { pedido_id } = pedido;
        const detallesPromises = detalles.map(detalle => {
            return new Promise((resolve, reject) => {
                agregarDetallePedido(pedido_id, detalle.producto_id, detalle.cantidad, detalle.precio_unitario, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });

        Promise.all(detallesPromises)
            .then(results => res.send({ pedido_id, detalles: results }))
            .catch(err => res.status(500).send({ error: err.message }));
    });
}

function handleObtenerPedidosUsuario(req, res) {
    const usuario_id = req.params.usuario_id;
    obtenerPedidosUsuario(usuario_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}


function handleObtenerHistorialPedidos(req, res) {
    const usuario_id = req.query.usuario_id;
    obtenerHistorialPedidos(usuario_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}

module.exports = { handleCrearPedido, handleObtenerPedidosUsuario, handleObtenerHistorialPedidos };
