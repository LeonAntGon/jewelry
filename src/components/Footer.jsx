import React from 'react';
import phone from './assets/phone.jpg';


const Footer = () => {
  return (
    <footer className="bg-black   mx-auto min-h-20 justify-center pb-10 w-full">
    
      <div className='text-center item-center pb-4'>
        <h2 className='text-white pt-6 text-xl'>Contacto</h2>
        <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-100 rounded-full"></div>
      </div>
    
    <div className="py-10 flex px-[30px] md:px-[45px]">
        <div>
          <img className="w-[25px]" src={phone} alt="Celular"/>
        </div>
        <div className='pl-4'>
        <a className='text-coolwhite-100 underline' href="tel:+5493816090708">+54 9 381 609-0708</a>

        </div>

    </div>
   
        
      <div>
        <p className='copywrite text-center pt-10 text-coolwhite-100'>&copy;2024 | Copywrite</p>
      </div>
    </footer>
  );
};

export default Footer;