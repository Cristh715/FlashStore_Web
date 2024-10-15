import React, { useContext, useState, useEffect } from 'react';
import './ProductCard.css';
import Tag from '../Tag/Tag';
import { AuthContext } from '../../contexts/AuthContext';
import { useFavorites } from '../../contexts/FavoritesContext';
import { FaCircleCheck } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";

const ProductCard = ({ product, onClick }) => {
  const { usuario_id, isLoggedIn } = useContext(AuthContext);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const { producto_id, nombre, precio, imagen, marca, stock } = product;

  useEffect(() => {
    const isProductFavorite = favorites.some(fav => fav.producto_id === producto_id);
    setIsFavorite(isProductFavorite);
  }, [favorites, producto_id]);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation();
    try {
      setShowNotification(false);
      if (isLoggedIn) {
        if (!isFavorite) {
          await addFavorite(producto_id);
          console.log(`Usuario con ID ${usuario_id} ha marcado como favorito el producto ${producto_id}`);
          setNotificationMessage('Producto agregado a favoritos');
        } else {
          await removeFavorite(producto_id);
          console.log(`Usuario con ID ${usuario_id} ha eliminado de favoritos el producto ${producto_id}`);
          setNotificationMessage('Producto eliminado de favoritos');
        }
      } else {
        setNotificationMessage('Inicia sesión para añadir a favoritos');
      }
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      
      setIsFavorite(false);
    } catch (error) {
      console.error('Error al actualizar favoritos:', error);
    }
  };

  return (
    <>
      <article className="product">
        <div className="product-image" onClick={onClick}>
          <img src={imagen} alt={nombre} />
        </div>
        <div className="product-content">
          <div className='container-tags'>
            <Tag name={marca} clase={marca} />
            {stock <= 40 && (<Tag name={"Pocas unidades"} clase={"warning-text"} />)}
            {stock > 100 && (<Tag name={"Nuevo"} clase={"important-text"} />)}
          </div>
          <h3 className="product-name" onClick={onClick}>{nombre} </h3>
          <p className="product-price">S/ {precio}</p>
          <section className='product-tools'>
            <button className="buy-btn" onClick={onClick}><span>Conoce más</span></button>
            <label className="add-favorite">
              <input type="checkbox" checked={isFavorite} onChange={handleFavoriteClick}></input>
              <div className="checkmark">
                <svg viewBox="0 0 256 256">
                  <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#007bff" fill="none"></path></svg>
              </div>
            </label>
          </section>
        </div>
      </article>
      {showNotification && (
        <div className={`notification-favorites ${isLoggedIn ? 'msg-favorites-check' : 'msg-favorites-error'}`}>
          {isLoggedIn ? <FaCircleCheck /> : <FaExclamationCircle />}
          <p>{notificationMessage}</p>
        </div>
      )}
    </>
  );
};

export default ProductCard;
