const { obtenerProductos, obtenerProductoEspecifico, updateImgProduct } = require('../models/productos.model');

function handleObtenerProductos(req, res) {
    obtenerProductos((err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}

function handleObtenerProductoEspecifico(req, res) {
    const id = req.params.id;
    obtenerProductoEspecifico(id, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}

function handleUpdateImgProduct(req, res) {
    const id = req.params.id;
    const { image } = req.body;
    updateImgProduct(id, image, (err, results) => {
        if (err) {
            res.status(500).send({ error: err.message });
        } else {
            res.send(results);
        }
    });
}

module.exports = { handleObtenerProductos, handleObtenerProductoEspecifico, handleUpdateImgProduct};
