const { handleObtenerProductos, handleObtenerProductoEspecifico, handleUpdateImgProduct } = require('../controllers/productosController');
const { obtenerProductos, obtenerProductoEspecifico, updateImgProduct } = require('../models/productos.model');

jest.mock('../models/productos.model', () => ({
  obtenerProductos: jest.fn(),
  obtenerProductoEspecifico: jest.fn(),
  updateImgProduct: jest.fn()
}));

describe('Productos Controller', () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  test('handleObtenerProductos debe devolver los productos', async () => {

    obtenerProductos.mockImplementation((callback) => callback(null, [{ name: 'iPhone 13' }, { name: 'Samsung Galaxy S21' }]));

    const req = {};
    await handleObtenerProductos(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith([{ name: 'iPhone 13' }, { name: 'Samsung Galaxy S21' }]);
  });

  test('handleObtenerProductoEspecifico debe devolver el producto correcto', async () => {
    obtenerProductoEspecifico.mockImplementation((id, callback) => {
      if (id === '1') {
        callback(null, { name: 'iPhone 13', id: 1 });
      } else {
        callback(new Error('Producto no encontrado'), null);
      }
    });

    const req = { params: { id: '1' } };
    await handleObtenerProductoEspecifico(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ name: 'iPhone 13', id: 1 });
  });

  test('handleUpdateImgProduct debe actualizar la imagen del producto', async () => {
    updateImgProduct.mockImplementation((id, image, callback) => {
      if (id === '1') {
        callback(null, { message: 'Imagen actualizada', id });
      } else {
        callback(new Error('Error al actualizar la imagen'), null);
      }
    });

    const req = { params: { id: '1' }, body: { image: 'new-image.jpg' } };
    await handleUpdateImgProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: 'Imagen actualizada', id: '1' });
  });
});
