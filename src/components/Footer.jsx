import React from 'react';
import gpsImg from './assets/gps-img.png';
import '../components/assets/waveFooter/footerCss.css';


const Footer = () => {
  return (
    <footer className="bg-neutral-950  max-w-screen-md mx-auto min-h-20 justify-center pb-10">
    
      <div className='text-center item-center pb-4'>
        <h2 className='text-white pt-6 text-xl'>Contactanos</h2>
        <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-100 rounded-full"></div>
      </div>
    

      <div className='grid grid-cols-2'>
        <div className='col-span-1 pt-1'>
        <h3 className='text-gray-200 text-center text-[18px] font-semibold'>Horario de atención</h3>
        <div className='pl-6 pt-3'>
          <p className='text-gray-200 text-base font-semibold'>Lunes a sábado:</p>
          <p className='text-gray-200 text-base font-semibold'>De 10:30 hrs a 21:00 hrs</p>
        </div>
          
        </div>

        <div className='col-span-1 '>
        <img src={gpsImg} alt="Imagen gps" className='h-8 mx-auto'/>
        <p className='text-gray-200 text-center pt-2 text-base font-semibold'>Maipu 167 - Local 6</p>
        <p className='text-gray-200 text-center pt-2 text-base font-semibold'>San Miguel de Tucumán</p>
        </div>
      </div>
        
      <div>
        <p className='copywrite text-center pt-10'>&copy;2024 | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;