const { createConnection } = require('../database/database.js');

function crearPedido(usuario_id, metodo_pago_id, total, callback) {
    const connection = createConnection();
    const consulta = `
    INSERT INTO Pedidos (usuario_id, fecha_pedido, estado, total, metodo_pago_id)
    VALUES (?, NOW(), 'Pendiente', ?, ?)`;
    connection.query(consulta, [usuario_id, total, metodo_pago_id], (err, results) => {
        if (err) {
            connection.end();
            return callback(err, null);
        }
        const pedido_id = results.insertId;
        connection.end();
        return callback(null, { pedido_id });
    });
}

function agregarDetallePedido(pedido_id, producto_id, cantidad, precio_unitario, callback) {
    const connection = createConnection();
    const consulta = `
    INSERT INTO DetallesPedido (pedido_id, producto_id, cantidad, precio_unitario)
    VALUES (?, ?, ?, ?)`;
    connection.query(consulta, [pedido_id, producto_id, cantidad, precio_unitario], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function obtenerPedidosUsuario(usuario_id, callback) {
    const connection = createConnection();
    const consulta = `
    SELECT * FROM Pedidos WHERE usuario_id = ? ORDER BY fecha_pedido DESC`;
    connection.query(consulta, [usuario_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function obtenerHistorialPedidos(usuario_id, callback) {
    const connection = createConnection();
    const consulta = `
    SELECT imagen,fecha_pedido,nombre_producto,cantidad,precio_unitario,total_producto,nombre_categoria  
    FROM VistaHistorialPedidos 
    WHERE usuario_id = ?`;
    connection.query(consulta, [usuario_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

module.exports = { crearPedido, agregarDetallePedido, obtenerPedidosUsuario,obtenerHistorialPedidos };
