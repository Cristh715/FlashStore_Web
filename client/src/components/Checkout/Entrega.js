import React, { useState } from 'react';
import './Entrega.css';
import { FaTruck, FaStore } from 'react-icons/fa';

const Entrega = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('domicilio');

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
  };

  return (
    <div className="entrega-container">
      <div className="entrega-header">
        <h2>Método de entrega</h2>
        <p>Puedes seleccionar envío a domicilio o retiro en tienda, lockers y puntos autorizados.</p>
      </div>
      <div className="delivery-methods">
        <div 
          className={`delivery-method ${deliveryMethod === 'domicilio' ? 'selected' : ''}`}
          onClick={() => handleDeliveryMethodChange('domicilio')}
        >
          <FaTruck size={32} />
          <span>Envío a domicilio</span>
        </div>
        <div 
          className={`delivery-method ${deliveryMethod === 'tienda' ? 'selected' : ''}`}
          onClick={() => handleDeliveryMethodChange('tienda')}
        >
          <FaStore size={32} />
          <span>Retiro en tienda, lockers y puntos autorizados</span>
        </div>
      </div>
      <div className="email-input-container">
        <label>Ingresa tu correo</label>
        <input type="email" placeholder="nombre@dominio.com" />
        <p>Por favor, ingresa tu correo electrónico.</p>
      </div>
    </div>
  );
};

export default Entrega;
