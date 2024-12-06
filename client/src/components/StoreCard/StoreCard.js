import React from 'react';
import './StoreCard.css';
import Map from '../MapComponent/Map';
const StoreCard = ({ store }) => {
  return (
    <main class="main">
      <div className="store">
        <img src={store.imageUrl} alt="Foto de la tienda" className="store-photo" />
        <div className="store-info">
          <h3>{store.name}</h3>
          <p>Dirección: {store.address}</p>
          <p>Teléfono: {store.phone}</p>
          <p>Móvil: {store.mobile}</p>
          <p>Email: {store.email}</p>
        </div>
        <div className="store-hours">
          <Map />
          <p>{store.hours}</p>
        </div>
      </div>
    </main>
  );
};
export default StoreCard;
