import React,{ useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import GalleryPresentation from '../components/Banner/Banner';
import SectionLanding from "../components/SectionLanding/SectionLanding";
import LoaderCard from '../components/LoaderCard/LoaderCard';
import BrandsContainer from '../components/Brands/BrandsContainer';
import { ProductContext } from '../contexts/ProductContext';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";

const ads = [
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery2.png", alt: 'Xiaomi' },
    { image: "/panel-gallery3.png", alt: 'Samsung' }
];

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1919, min: 1500 },
      items: 4
    },
    desktopmini:{
        breakpoint: { max: 1499, min: 1025 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
            <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            ssr={true}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            >
                {
                    loading
                        ? Array.from({ length: 8 }).map((_, index) => <LoaderCard key={index} />)
                        : products.filter(product => product.categoria_id === 1).slice(0, 8).map(product => (
                            <ProductCard key={product.producto_id} product={product} onClick={() => handleProductClick(product)} />
                        ))
                }
            </Carousel>
            <SectionLanding title="Encuentra las mejores" importantText="Marcas" />
            <BrandsContainer />
            <SectionLanding title="Ofertas" importantText="exclusivas"></SectionLanding>
            <div className='offers-images'>
                <img src='./offer/offer1.png' alt='oferta1'></img>
                <img src='./offer/offer2.png' alt='oferta2'></img>
                <img src='./offer/offer3.png' alt='oferta3'></img>
            </div>
        </main>
    );
}

export default Home;