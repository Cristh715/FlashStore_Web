import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <FavoritesProvider>
              <ScrollToTop />
              <App />
            </FavoritesProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);