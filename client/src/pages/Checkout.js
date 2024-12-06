import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CheckoutComponent from '../components/Checkout/Checkout';
import Entrega from '../components/Checkout/Entrega';
import Progreso from '../components/Checkout/Progreso';
import Payment from '../components/Checkout/Payment';
import { useCartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const { products, getTotal, clearCart } = useCartContext();
  const { usuario_id, isLoggedIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    
    if (!isLoggedIn) {
      navigate('/login');
    }else if (products.length === 0) {
      navigate('/home');
    }
    
  }, [isLoggedIn, products, navigate, loading]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleStep = (num) => {
    setStep(num);
  };

  const handleConfirmPayment = async (paymentDetails) => {
    try {
      const total = getTotal();
      const detalles = products.map(product => ({
        producto_id: product.producto.producto_id,
        cantidad: product.cantidad,
        precio_unitario: product.producto.precio
      }));
      await axios.post('/api/pedidos/crear', {
        usuario_id,
        metodo_pago_id: 1,
        total,
        detalles
      });
      clearCart();
      navigate('/home');
      alert('Compra confirmada con éxito.');
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
      alert('Error al confirmar la compra. Por favor, intente de nuevo.');
    }
  };

  return (
    <main>
      <Progreso step={step} setStep={handleStep} />
      {step === 1 && <CheckoutComponent onNextStep={handleNextStep} />}
      {step === 2 && <Entrega onNextStep={handleNextStep} />}
      {step === 3 && <Payment onConfirm={handleConfirmPayment} />}
    </main>
  );
};

export default Checkout;
