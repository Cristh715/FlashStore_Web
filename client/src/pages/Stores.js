import React from 'react';
import StoreCard from '../components/StoreCard/StoreCard';

const Catalogo = () => {
  const stores = [
    
    {
        name: 'COMPUPALACE - MIRAFLORES',
        address: 'v. Petit Thouars N°. 5358 Tienda 1013 Miraflores.',
        phone: '(01) 510 1903',
        mobile: '946 317 588',
        email: 'pamelastagnaro@infotec.com.pe',
        imageUrl: 'https://www.infotec.com.pe/img/cms/Tiendas/tda-1013.jpg',
        hours: 'Lunes a Sábados 9:00 am a 8:00 pm'
      },
      {
        name: 'COMPUPLAZA LIMA',
        address: 'Av. Garcilaso de la Vega N°. 1251 Tienda 159 Lima - Perú',
        phone: '(01) 510 1903',
        mobile: '998 184 096',
        email: 'robinanydelvalle@infotec.com.pe',
        imageUrl: 'https://www.infotec.com.pe/img/cms/Tiendas/tda-1013.jpg',
        hours: 'Lunes a Sábados 9:00 am a 7:00 pm'
      },
      {
        name: 'OFICINA CENTRAL COMPU-WILSON LIMA',
        address: 'Av. Garcilaso de la Vega Nº 1250 Oficina 610 Lima - Perú',
        phone: '(01) 510 1903',
        mobile: '948 365 036',
        email: 'robinanydelvalle@infotec.com.pe',
        imageUrl: 'https://www.infotec.com.pe/img/cms/Tiendas/tda10971.jpg',
        hours: 'Lunes a Sábados 9:00 am a 7:00 pm'
      },
      {
        name: 'COMPUPLAZA LIMA',
        address: 'Av. Garcilaso de la Vega N°. 1251 Tienda 159 Lima - Perú',
        phone: '(01) 510 1903',
        mobile: '998 184 096',
        email: 'pamelastagnaro@infotec.com.pe',
        imageUrl: 'https://www.infotec.com.pe/img/cms/Tiendas/tda-1013.jpg',
        hours: 'Lunes a Sábados 9:00 am a 7:00 pm'
      },
    // Agrega más tiendas aquí
  ];

  return (
    <div>
      {stores.map((store, index) => (
        <StoreCard key={index} store={store} />
      ))}
    </div>
  );
};

export default Catalogo;
