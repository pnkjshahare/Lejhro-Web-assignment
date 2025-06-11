
import React from 'react';
import Navbar from '../compoents/Navbar';
import bussiness from '../../public/bussiness.png';
import Footer from '../compoents/Footer';

import Bussiness1 from '../../public/Bussiness1.png'
import dataanalyst from '../../public/dataanalyst.png'
import applicationModern from '../../public/applicationModern.png'
import applicationDevelop from '../../public/applicationDevelop.png'
import cyber from '../../public/cyber.png'
import quality from '../../public/quality.png'
const BussinessService = () => {
  return (
    <>
      <div className='bg-white'>
        <Navbar color="#d6932c" img={bussiness} />
        
        <div className='mt-14'>
            <img src={Bussiness1} alt="" />
        </div>
        <div className=''>
            <img src={dataanalyst} alt="" />
        </div>
        <div className=''>
            <img src={applicationModern} alt="" />
        </div>
          <div className=''>
            <img src={applicationDevelop} alt="" />
        </div>
          <div className=''>
            <img src={cyber} alt="" />
        </div>
         <div className='mb-[-50px]'>
            <img src={quality} alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BussinessService;