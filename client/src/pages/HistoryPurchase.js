import React, { useEffect } from 'react';
import PurchaseHistory from '../components/PurchaseHistory/PurchaseHistory';

const Historial = () => {

  useEffect(()=>{
    document.title=`Historial de compras`;
  });
  
  return (
    <main >
      <PurchaseHistory/>
    </main>
  );
};

export default Historial;
