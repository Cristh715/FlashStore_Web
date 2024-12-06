const { handleAgregarFavorito, handleEliminarFavorito, handleObtenerFavoritos } = require('../controllers/favoritosController');
const { agregarFavorito, eliminarFavorito, obtenerFavoritos } = require('../models/favoritos.model');

jest.mock('../models/favoritos.model', () => ({
  agregarFavorito: jest.fn(),
  eliminarFavorito: jest.fn(),
  obtenerFavoritos: jest.fn()
}));

describe('Favoritos Controller', () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  test('handleAgregarFavorito debe agregar un producto a favoritos', async () => {
    agregarFavorito.mockImplementation((usuario_id, producto_id, callback) => callback(null, { usuario_id, producto_id }));

    const req = { body: { usuario_id: 1, producto_id: 1 } };
    await handleAgregarFavorito(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Producto agregado a favoritos',
      results: { usuario_id: 1, producto_id: 1 }
    });
  });

  test('handleEliminarFavorito debe eliminar un producto de favoritos', async () => {
    eliminarFavorito.mockImplementation((usuario_id, producto_id, callback) => callback(null, { usuario_id, producto_id }));

    const req = { body: { usuario_id: 1, producto_id: 1 } };
    await handleEliminarFavorito(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Producto eliminado de favoritos',
      results: { usuario_id: 1, producto_id: 1 }
    });
  });

  test('handleObtenerFavoritos debe devolver los favoritos de un usuario', async () => {
    obtenerFavoritos.mockImplementation((usuario_id, callback) => callback(null, [{ producto_id: 1, name: 'iPhone 13' }]));

    const req = { params: { usuario_id: '1' } };
    await handleObtenerFavoritos(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([{ producto_id: 1, name: 'iPhone 13' }]);
  });
});
