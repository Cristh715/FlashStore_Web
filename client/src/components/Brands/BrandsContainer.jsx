import React from 'react';
import Brand from './Brand';
import './Brands.css';

const brands = [
  { name: 'Samsung', imageSrc: './img/Samsung.png', altText: 'Samsung' },
  { name: 'Xiaomi', imageSrc: './img/Xiaomi.png', altText: 'Xiaomi' },
  { name: 'Apple', imageSrc: './img/apple.png', altText: 'Apple' },
  { name: 'Huawei', imageSrc: './img/Huawei.png', altText: 'Huawei' },
  { name: 'Oppo', imageSrc: './img/Oppo.png', altText: 'Oppo' },
  { name: 'Motorola', imageSrc: './img/Motorola.png', altText: 'Motorola' }
];

const BrandsContainer = () => {
  return (
    <section className="brands-container">
      {brands.map((brand, index) => (
        <Brand 
          key={index}
          name={brand.name}
          imageSrc={brand.imageSrc}
          altText={brand.altText}
        />
      ))}
    </section>
  );
};

export default BrandsContainer;
