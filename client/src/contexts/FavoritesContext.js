import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './ProductContext';
import { AuthContext } from './AuthContext';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { usuario_id, isLoggedIn } = useContext(AuthContext);
  const { products, filteredProducts } = useContext(ProductContext);
  const [favorites, setFavorites] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/api/favoritos/favoritos/${usuario_id}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error al obtener favoritos:', error);
      }
    };

    if (isLoggedIn) {
      fetchFavorites();
    }
  }, [products, isLoggedIn, usuario_id]);

  useEffect(() => {
    if (products.length > 0) {
      const favoriteProductsDetails = favorites
        .map(fav => products.find(product => product.producto_id === fav.producto_id))
        .filter(product => product !== undefined);
      setFavoriteProducts(favoriteProductsDetails);
    }
  }, [favorites, products]);

  const addFavorite = async (producto_id) => {
    try {
      await axios.post('/api/favoritos/favoritos', { usuario_id, producto_id });
      setFavorites(prevFavorites => [...prevFavorites, { usuario_id, producto_id }]);
    } catch (error) {
      console.error('Error al agregar favorito:', error);
    }
  };

  const removeFavorite = async (producto_id) => {
    try {
      await axios.delete('/api/favoritos/favoritos', { data: { usuario_id, producto_id } });
      setFavorites(prevFavorites => prevFavorites.filter(fav => fav.producto_id !== producto_id));
    } catch (error) {
      console.error('Error al eliminar favorito:', error);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, favoriteProducts }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
