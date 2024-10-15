const { createConnection } = require('../database/database.js');

function obtenerProductos(callback) {
    const connection = createConnection();
    const consulta = `
    SELECT * 
    FROM Productos p 
    INNER JOIN Categorias ct ON p.categoria_id = ct.categoria_id 
    INNER JOIN Especificaciones esp ON p.especificacion_id = esp.especificacion_id
    ORDER BY p.nombre`;
    connection.query(consulta, (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function obtenerProductoEspecifico(id_producto, callback) {
    const connection = createConnection();
    const consulta = `
    SELECT * 
    FROM Productos p 
    INNER JOIN Categorias ct ON p.categoria_id = ct.categoria_id 
    INNER JOIN Especificaciones esp ON p.especificacion_id = esp.especificacion_id
    WHERE p.producto_id = ?`;
    connection.query(consulta, [id_producto], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function updateImgProduct(id_producto, image, callback) {
    const connection = createConnection();
    const consulta = `
    UPDATE Productos
    SET imagen = ?
    WHERE producto_id = ?`;
    connection.query(consulta, [image, id_producto], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

module.exports = { obtenerProductos, obtenerProductoEspecifico, updateImgProduct };
