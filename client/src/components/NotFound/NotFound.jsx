// src/pages/NotFound.jsx
import React from 'react';
import './NotFound.css'; // Asegúrate de tener el archivo CSS correspondiente
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="content">
        <h1 className="title-404">404</h1>
        <hr />
        <div className="text-page">La página no está disponible</div>
        <Link className="btn-volver-home" to={"/home"}>Volver a Inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
