const { agregarFavorito, eliminarFavorito, obtenerFavoritos } = require('../models/favoritos.model');

function handleAgregarFavorito(req, res) {
    const { usuario_id, producto_id } = req.body;
    agregarFavorito(usuario_id, producto_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.status(200).send({ message: 'Producto agregado a favoritos', results });
        }
    });
}

function handleEliminarFavorito(req, res) {
    const { usuario_id, producto_id } = req.body;
    eliminarFavorito(usuario_id, producto_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.status(200).send({ message: 'Producto eliminado de favoritos', results });
        }
    });
}

function handleObtenerFavoritos(req, res) {
    const usuario_id = req.params.usuario_id;
    obtenerFavoritos(usuario_id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.status(200).send(results);
        }
    });
}

module.exports = { handleAgregarFavorito, handleEliminarFavorito, handleObtenerFavoritos };
