import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './../contexts/ProductContext';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import LoaderPage from '../components/LoaderPage/LoaderPage';

const ProductPage = () => {
  const { productId } = useParams();
  const { selectedProduct, getProduct, error, updateQuantity } = useContext(ProductContext);

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(productId);
    };
    updateQuantity();
    fetchProduct();
  }, [productId, getProduct]);

  if (!selectedProduct || selectedProduct.producto_id != productId) {
    return <LoaderPage />;
  }else{
    document.title=`${selectedProduct.nombre}`;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className='main'>
      <ProductDescription />
    </main>
  );
};

export default ProductPage;
