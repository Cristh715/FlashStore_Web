import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { PiTrashSimple } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import './Checkout.css';

const Checkout = ({ onNextStep }) => {
    const { products, removeProduct, updateProductQuantity, getTotal } = useCartContext();

    const handleDecrement = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            updateProductQuantity(productId, currentQuantity - 1);
        }
    };

    const handleIncrement = (productId, currentQuantity) => {
        if (currentQuantity < 10) {
            updateProductQuantity(productId, currentQuantity + 1);
        }
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2>Carrito de compras</h2>
            </div>

            <div className="checkout-content">
                <div className="cart-items">
                    {products.map(({ producto, cantidad }) => (
                        <div className="cart-item" key={producto.producto_id}>
                            <img src={producto.imagen} alt={producto.nombre} className="product-image-ck" />
                            <div className="product-details-ck">
                                <h3>{producto.nombre}</h3>
                                <p>ID: {producto.producto_id}</p>
                                <p>Precio: S/ {producto.precio}</p>
                                <div className="product-availability">
                                    <span>Disponible envío a domicilio</span>
                                    <span>Disponible retiro en tienda y lockers</span>
                                </div>
                            </div>
                            <div className="cart-item-quantity">
                                <button onClick={() => handleDecrement(producto.producto_id, cantidad)}>-</button>
                                <span>{cantidad}</span>
                                <button onClick={() => handleIncrement(producto.producto_id, cantidad)}>+</button>
                            </div>
                            <button className="remove-button" onClick={() => removeProduct(producto.producto_id)}>
                                <PiTrashSimple />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="order-summary">
                    <h3>Resumen de pedido</h3>
                    <p>Subtotal: S/ {getTotal()}</p>
                    <p>Total Pedido: S/ {getTotal()}</p>
                    <button className="checkout-button" onClick={onNextStep}>Siguiente</button>
                    <Link to="/catalogo" className="add-more-products"><BsCart3 /> Añadir más productos</Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
