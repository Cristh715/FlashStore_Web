import React,{ useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import GalleryPresentation from '../components/Banner/Banner';
import SectionLanding from "../components/SectionLanding/SectionLanding";
import LoaderCard from '../components/LoaderCard/LoaderCard';
import BrandsContainer from '../components/Brands/BrandsContainer';
import { ProductContext } from '../contexts/ProductContext';

const ads = [
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery2.png", alt: 'Xiaomi' },
    { image: "/panel-gallery3.png", alt: 'Samsung' }
];

const Home = () => {
    const { products, loading } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/product/${product.producto_id}`);
    };

    useEffect(() =>{
        document.title='FlashStore'
      }, []); 

    return (
        <main>
            <GalleryPresentation ads={ads} />
            <SectionLanding title="Lo mejor en" importantText="Smartphones" isVisible={true} link="/Catalogo" />
            <div className="products-container">
                {
                    loading
                        ? Array.from({ length: 4 }).map((_, index) => <LoaderCard key={index} />)
                        : products.filter(product => product.categoria_id === 1).slice(4, 8).map(product => (
                            <ProductCard key={product.producto_id} product={product} onClick={() => handleProductClick(product)} />
                        ))
                }
            </div>
            <SectionLanding title="Encuentra las mejores" importantText="Marcas" />
            <BrandsContainer />
            <SectionLanding title="Ofertas" importantText="exclusivas"></SectionLanding>
            <div className='offers-images'>
                <img src='./offer/offer1.png'></img>
                <img src='./offer/offer2.png'></img>
                <img src='./offer/offer3.png'></img>
            </div>
        </main>
    );
}

export default Home;