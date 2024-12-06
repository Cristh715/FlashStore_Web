import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './PurchaseHistory.css';
import { AuthContext } from '../../contexts/AuthContext';

const PurchaseHistory = () => {
    const [orders, setOrders] = useState([]);
    const { usuario_id} = useContext(AuthContext);
    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/pedidos/historialCompras', {
                    params: { usuario_id: usuario_id }  // Ajusta esto para obtener dinámicamente el ID del usuario
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching order history', error);
            }
        };

        fetchOrderHistory();
    }, [usuario_id]);

    return (
        <div className="responsive-table">
            <h2>Historial de Compras</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre Producto</th>
                        <th>Nombre Categoría</th>
                        <th>Fecha Pedido</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.fecha_pedido + order.nombre_producto}>
                            <td data-label="Imagen"><img class = "ImagenChica" src={order.imagen} alt={order.nombre_producto} /></td>
                            <td data-label="Nombre Producto">{order.nombre_producto}</td>
                            <td data-label="Nombre Categoría">{order.nombre_categoria}</td>
                            <td data-label="Fecha Pedido">{new Date(order.fecha_pedido).toLocaleString()}</td>
                            <td data-label="Cantidad">{order.cantidad}</td>
                            <td data-label="Precio Unitario">${order.precio_unitario}</td>
                            <td data-label="Total Producto">${order.total_producto}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseHistory;
