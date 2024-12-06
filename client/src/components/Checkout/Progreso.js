import React from 'react';
import './Progreso.css';

const Progreso = ({ step, setStep }) => {
  return (
    <div className="progress-bar">
      <div 
        className={`step ${step >= 1 ? 'completed' : ''}`} 
        onClick={() => setStep(1)}
      >
        Carrito
      </div>
      <div 
        className={`step ${step >= 2 ? 'completed' : ''}`} 
        onClick={() => setStep(2)}
      >
        Entrega
      </div>
      <div 
        className={`step ${step >= 3 ? 'completed' : ''}`} 
        onClick={() => setStep(3)} 
      >
        Pago
      </div>
    </div>
  );
};

export default Progreso;
