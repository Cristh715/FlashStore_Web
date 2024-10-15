import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GalleryPresentation = ({ ads }) => {
  return (
    <div className="gallery-presentation">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
        {ads.map((ad, index) => (
          <div key={index}>
            <img src={ad.image} alt={ad.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GalleryPresentation;
