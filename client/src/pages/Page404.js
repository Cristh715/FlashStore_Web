import React, { useEffect } from 'react';
import NotFound from '../components/NotFound/NotFound';

const Page404 = () => {

  useEffect(()=>{
    document.title=`Página no encontrada`;
  });
  
  return (
    <div className='error-404-container'>
      <NotFound />
    </div>
  );
};

export default Page404;
