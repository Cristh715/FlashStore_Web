const { createConnection } = require('../database/database.js');

function agregarFavorito(usuario_id, producto_id, callback) {
    const connection = createConnection();
    const consulta = `
    INSERT INTO Favoritos (usuario_id, producto_id)
    VALUES (?, ?)`;
    connection.query(consulta, [usuario_id, producto_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function eliminarFavorito(usuario_id, producto_id, callback) {
    const connection = createConnection();
    const consulta = `
    DELETE FROM Favoritos
    WHERE usuario_id = ? AND producto_id = ?`;
    connection.query(consulta, [usuario_id, producto_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

function obtenerFavoritos(usuario_id, callback) {
    const connection = createConnection();
    const consulta = `
    SELECT p.*
    FROM Productos p
    INNER JOIN Favoritos f ON p.producto_id = f.producto_id
    WHERE f.usuario_id = ?`;
    connection.query(consulta, [usuario_id], (err, results) => {
        connection.end();
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
}

module.exports = { agregarFavorito, eliminarFavorito, obtenerFavoritos };
