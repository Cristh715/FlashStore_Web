import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import './ProductDescription.css';
import { FaCartShopping, FaAngleLeft, FaCamera, FaBatteryHalf, FaMicrochip, FaCircleCheck, FaTruck, FaStore } from "react-icons/fa6";
import { MdOutlineScreenshot } from "react-icons/md";

const ProductDescription = () => {
    const { selectedProduct, quantity, incrementQuantity, decrementQuantity } = useContext(ProductContext);
    const [showNotification, setShowNotification] = useState(false);
    const { products, addProduct } = useCartContext();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addProduct(selectedProduct, quantity);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 300000);
    };

    useEffect(() => {
        console.log('Productos en el carrito:', products);
    }, [products]);


    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='product-details'>
            <div className='section-back-h2'>
                <button className='back-button' onClick={handleBackClick} >
                    <FaAngleLeft /> <span>Volver</span>
                </button>
                <h2>Información del producto</h2>
            </div>
            <div key={selectedProduct.producto_id} className="product-item">
                <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="product-image" />
                <section className='information-product'>
                    <h4>{selectedProduct.marca}</h4>
                    <h3>{selectedProduct.nombre}</h3>
                    <p>S/ {selectedProduct.precio}</p>
                    <section className='quantity-add-car'>
                        <div className="quantity-selector">
                            <button className="quantity-button decrease" onClick={decrementQuantity}>-</button>
                            <input type="number" className="quantity-input" value={quantity} readOnly />
                            <button className="quantity-button increase" onClick={incrementQuantity}>+</button>
                        </div>
                        <button className='add-to-car' onClick={handleAddToCart}> <FaCartShopping />Agregar al carrito</button>
                    </section>
                    <section className='shipping-options'>
                        <div className='option-item'>
                            <FaTruck className='option-icon' />
                            <span>Disponible envio a domicilio</span>
                        </div>
                        <div className='option-item'>
                            <FaStore className='option-icon' />
                            <span>Disponible retiro en tienda y lockers</span>
                        </div>
                    </section>
                </section>
            </div>
            <div className='additional-details'>
                <div className='detail-item'>
                    <MdOutlineScreenshot className='detail-icon' />
                    <span className='detail-name'>Pantalla</span>
                    <span className='detail-value'>{selectedProduct.pantalla}</span>
                </div>
                <div className='detail-item'>
                    <FaCamera className='detail-icon' />
                    <span className='detail-name'>Cámara trasera</span>
                    <span className='detail-value'>{selectedProduct.camara_trasera}</span>
                </div>
                <div className='detail-item'>
                    <FaCamera className='detail-icon' />
                    <span className='detail-name'>Cámara frontal</span>
                    <span className='detail-value'>{selectedProduct.camara_frontal}</span>
                </div>
                <div className='detail-item'>
                    <FaBatteryHalf className='detail-icon' />
                    <span className='detail-name'>Batería</span>
                    <span className='detail-value'>{selectedProduct.bateria}</span>
                </div>
                <div className='detail-item'>
                    <FaMicrochip className='detail-icon' />
                    <span className='detail-name'>Procesador</span>
                    <span className='detail-value'>{selectedProduct.procesador}</span>
                </div>
            </div>
            <h2>Especificaciones</h2>
            <table className="product-table">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{selectedProduct.nombre}</td>
                    </tr>
                    <tr>
                        <th>Descripción</th>
                        <td>{selectedProduct.descripcion}</td>
                    </tr>
                    <tr>
                        <th>Precio</th>
                        <td>{selectedProduct.precio}</td>
                    </tr>
                    <tr>
                        <th>Dimensiones</th>
                        <td>{selectedProduct.dimensiones}</td>
                    </tr>
                    <tr>
                        <th>Peso</th>
                        <td>{selectedProduct.peso}</td>
                    </tr>
                    <tr>
                        <th>Pantalla</th>
                        <td>{selectedProduct.pantalla}</td>
                    </tr>
                    <tr>
                        <th>Procesador</th>
                        <td>{selectedProduct.procesador}</td>
                    </tr>
                    <tr>
                        <th>Memoria</th>
                        <td>{selectedProduct.memoria}</td>
                    </tr>
                    <tr>
                        <th>Cámara trasera</th>
                        <td>{selectedProduct.camara_trasera}</td>
                    </tr>
                    <tr>
                        <th>Cámara frontal</th>
                        <td>{selectedProduct.camara_frontal}</td>
                    </tr>
                    <tr>
                        <th>Batería</th>
                        <td>{selectedProduct.bateria}</td>
                    </tr>
                    <tr>
                        <th>Sistema operativo</th>
                        <td>{selectedProduct.sistema_operativo}</td>
                    </tr>
                    <tr>
                        <th>Conectividad</th>
                        <td>{selectedProduct.conectividad}</td>
                    </tr>
                </tbody>
            </table>
            {showNotification && (
                <div className='notification-cart'>
                    <FaCircleCheck />
                    <p>Producto añadido al carrito</p>
                </div>
            )}
        </div>
    );
}

export default ProductDescription;
