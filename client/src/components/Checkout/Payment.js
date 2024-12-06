import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ onConfirm }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    setError('')
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      setError('Número de tarjeta inválido.');
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setError('Fecha de expiración inválida.');
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError('CVV inválido.');
      return;
    }
    

    onConfirm({ cardNumber, expiryDate, cvv });
  };

  return (
    <div className="confirmar-compra">
      <h2>Confirmar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de Tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de Expiración</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/AA"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn-confirmar">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Payment;
