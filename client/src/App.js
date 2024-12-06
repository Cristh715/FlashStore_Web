import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Catalogo from './pages/Catalogo.js';
import Detalle from './pages/Detalle.js';
import NotFound from './pages/Page404.js';
import Stores from './pages/Stores.js';
import Layout from './components/Layout/Layout.jsx'
import FavoritesPage from './pages/Favorites.js';
import Checkout from './pages/Checkout.js';
import Historial from './pages/HistoryPurchase.js';
import Categories from './pages/Categories.js';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home title='FlashStore'/>} />
        <Route path="/home" element={<Home />} title='FlashStore'/>
        <Route path="/product/:productId" element={<Detalle />} />
        <Route path="/local" element={<Stores />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/catalogo">
          <Route index element={<Catalogo />} />
          <Route path="smartphones" element={<Catalogo category={1} title='Smartphones' />} />
          <Route path="smartwatches" element={<Catalogo category={2} title='Smartwatches' />} />
          <Route path="tablets" element={<Catalogo category={3} title='Tablets' />} />
          <Route path="accesorios" element={<Catalogo category={4} title='Accesorios' />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
