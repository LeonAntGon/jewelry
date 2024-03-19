import ig from './assets/ig.png';
import facebook from './assets/facebook.png';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Header() {

    const [isDivVisible, setDivVisibility] = useState(false);

    const toggleDivVisibility = () => {
        setDivVisibility(!isDivVisible);   
      };


    return(
        <nav className="h-14 w-full bg-neutral-950 flex justify-between
                        md:h-16 md:block fixed z-20">

            {/*Hamburguer*/ }
            <div className="mx-5 pt-5 [&>span]:h-[3px] [&>span]:rounded-sm
                            md:hidden cursor-pointer" onClick={toggleDivVisibility} >
                <span className="block w-6 bg-white mb-[6px]"></span>
                <span className="block w-4 bg-white mb-[6px]"></span>
                <span className="block w-5 bg-white"></span>
            </div>

            {/*Menu Lateral*/}
            <div className="bg-neutral-950 fixed h-screen w-[250px]" style={{ display: isDivVisible ? 'block' : 'none' }}>
            
            
            <button type="button" onClick={toggleDivVisibility} 
                     className=" rounded-md p-2 inline-flex items-center justify-center text-gray-100  focus:outline-none
                    focus:ring-2 focus:ring-inset float-right pt-3"> 
              <svg class="h-[40px] w-[80px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>


                    <div className="grid grid-rows-2 gap-4 pt-[68px] pl-6">
                        <div className=''>
                            <Link to="/"><p className='text-white text-xl'>INICIO</p></Link>

                        </div>
                        <hr className='w-[70%]'></hr>
                        <div className='pb-2'>
                            <Link to="/nosotros"><p className='text-white text-xl'>SOBRE NOSOTROS</p></Link>
                        </div>
                        <hr className='w-[70%]'></hr>
                    </div>
            </div>

            {/*Header >= 768 con Titulo*/}
            <div className="inline-block float-right p-4
                            md:float-none md:text-center md:flex md:justify-around ">

                <div className='hidden
                               md:flex'>
                    
                    <div>
                        <Link to="/"><p className='text-white text-lg pr-2 lg:pr-5'>INICIO</p> </Link>
                    </div>
                    <div>
                        <Link to="/nosotros"><p className='text-white text-lg'>SOBRE NOSOTROS</p></Link>
                    </div>
                

                </div>
                <h1 className="font-Lobster text-custom-100 text-2xl
                            md:text-center md:text-[30px]">Taller de Joyería Toledo</h1>

                <div className="z-30 hidden
                            md:flex md:item-center md:items-end
                            ">
                    <div>
                        <a href="">
                            <img  className="h-[25px] pr-2 lg:pr-5" src={ig} alt="Instagram link"/>
                        </a>
                    </div>
                <div>
                    <div>
                        <a href="">
                            <img  className="h-[26px] "src={facebook} alt="Facebook link"/>
                        </a>
                </div>

                </div>
            </div>
            </div>

            {/*Social Media*/ }
            
        </nav>
    );
};