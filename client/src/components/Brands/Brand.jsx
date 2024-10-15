import React from 'react';
import './Brands.css';

const Brand = ({ name, imageSrc, altText }) => {
  return (
    <article className={`brand ${name.toLowerCase()}`}>
      <div className="brand-logo">
        <img src={imageSrc} alt={altText} />
      </div>
      {name}
    </article>
  );
};

export default Brand;
