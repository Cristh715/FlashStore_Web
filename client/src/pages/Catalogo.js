import React, { useEffect, useContext } from 'react';
import SectionLanding from '../components/SectionLanding/SectionLanding';
import Filter from '../components/Filter-products/Filter';
import ProductsCatalog from '../components/ProductsCatalog/ProductsCatalog';
import '../components/ProductsCatalog/ProductsCatalog.css';
import LoaderPage from '../components/LoaderPage/LoaderPage';
import { ProductContext } from '../contexts/ProductContext';


const Catalogo = ({ category, title = 'Todos los productos' }) => {
  const { filteredProducts, handleFilterChange, updateCategory, resetFiltersAndCategory, loading, error } = useContext(ProductContext);

  useEffect(() => {
    document.title = title;

    if (category === 'all') {
      resetFiltersAndCategory();
    } else {
      updateCategory(category); 
    }
  }, [category, title, updateCategory, resetFiltersAndCategory]);

  if (error) {
    return <div className="main error-message"><img src='/img/error.png' alt="Error" />{error}</div>;
  }

  if (loading) {
    return <LoaderPage />;
  }

  return (
    <main className='main-products'>
      <Filter onFilterChange={handleFilterChange} />
      <div className="container">
        <header>
          <SectionLanding title={filteredProducts.length} importantText="productos" />
        </header>
        <ProductsCatalog products={filteredProducts} />
      </div>
    </main>
  );
}

export default Catalogo;