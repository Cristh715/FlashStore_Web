import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/productos/productos');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('No se han encontrado productos. Por favor, intente más tarde.');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.categoria_id === parseInt(category, 10));
    }

    Object.entries(activeFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        if (key === 'precio') {
          filtered = filtered.filter(product => values.some(range => {
            let [min, max] = range.split(' - ');
            min = parseFloat(min.split('S/ ')[1]);
            max = parseFloat(max.split('S/ ')[1]);
            return product.precio >= min && (!max || product.precio <= max);
          }));
        } else {
          filtered = filtered.filter(product => values.includes(product[key]));
        }
      }
    });

    setFilteredProducts(filtered);
  }, [products, activeFilters, category]);

  const handleFilterChange = useCallback((filters) => {
    setActiveFilters(filters);
  }, []);

  const updateCategory = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  const resetFiltersAndCategory = useCallback(() => {
    setCategory(null);
    setActiveFilters({});
  }, []);

  const getProduct = useCallback(async (productId) => {
    try {
      const response = await axios.get(`/api/productos/producto/${productId}`);
      setSelectedProduct(response.data[0]);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }, []);

  const incrementQuantity = useCallback(() => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 10));
  }, []);

  const decrementQuantity = useCallback(() => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  }, []);

  const updateQuantity = useCallback(() => {
    setQuantity(1);
  }, []);

  return (
    <ProductContext.Provider value={{
      products,
      filteredProducts,
      activeFilters,
      handleFilterChange,
      updateCategory,
      resetFiltersAndCategory,
      getProduct,
      loading,
      error,
      selectedProduct,
      quantity,
      incrementQuantity,
      decrementQuantity,
      updateQuantity
    }}>
      {children}
    </ProductContext.Provider>
  );
};
