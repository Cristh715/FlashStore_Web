import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('cart');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  const addProduct = (producto, cantidad) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(product => product.producto.producto_id === producto.producto_id);
      if (existingProduct) {
        return prevProducts.map(product =>
          product.producto.producto_id === producto.producto_id ? { ...product, cantidad: cantidad } : product
        );
      } else {
        return [...prevProducts, { producto, cantidad }];
      }
    });
  };

  const removeProduct = (producto_id) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.producto.producto_id !== producto_id));
  };

  const updateProductQuantity = (producto_id, cantidad) => {
    setProducts((prevProducts) => {
      return prevProducts.map(product =>
        product.producto.producto_id === producto_id ? { ...product, cantidad } : product
      );
    });
  };

  const getTotal = () => {
    return Number(products.reduce((total, product) => total + (product.producto.precio * product.cantidad), 0).toFixed(2));
  };

  const clearCart = () => {
    setProducts([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct, updateProductQuantity, getTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
