import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
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
        <div className="cart-container">
            <span className="cart-count"><b>Total: </b>S/ {getTotal()}</span>
            {(products.length !== 0) &&(
                <Link className='btn-go-cart' to={"/checkout"}>Ir al carrito</Link>
            )
            }
            {products.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                products.map((product) => ( 
                    <div key={product.producto.producto_id} className="cart-item">
                        <img src={product.producto.imagen} alt={product.producto.nombre} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{product.producto.nombre}</h3>
                            <h4>S/ {product.producto.precio}</h4>
                            <div className="cart-item-quantity">
                                <button onClick={() => handleDecrement(product.producto.producto_id, product.cantidad)}>-</button>
                                <span>{product.cantidad}</span>
                                <button onClick={() => handleIncrement(product.producto.producto_id, product.cantidad)}>+</button>
                            </div>
                            <button className="cart-item-remove" onClick={() => removeProduct(product.producto.producto_id)}>×</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
