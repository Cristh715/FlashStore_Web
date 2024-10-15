const { addFavoriteInDB, removeFavoriteInDB, getFavoritesFromDB } = require('../models/favoritos.model');

exports.addFavorite = (usuario_id, producto_id) => {
  return new Promise((resolve, reject) => {
    addFavoriteInDB(usuario_id, producto_id, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

exports.removeFavorite = (usuario_id, producto_id) => {
  return new Promise((resolve, reject) => {
    removeFavoriteInDB(usuario_id, producto_id, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

exports.getFavorites = (usuario_id) => {
  return new Promise((resolve, reject) => {
    getFavoritesFromDB(usuario_id, (err, favorites) => {
      if (err) reject(err);
      else resolve(favorites);
    });
  });
};
