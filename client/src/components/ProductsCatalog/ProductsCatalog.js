import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductsCatalog = ({ products }) => {
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product/${product.producto_id}`);
  };

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.producto_id} product={product} onClick={() => handleProductClick(product)}/>
      ))}
    </div>
  );
}

export default ProductsCatalog;
