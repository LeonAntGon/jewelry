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
                <span className="block w-6 bg-black mb-[6px]"></span>
                <span className="block w-4 bg-black mb-[6px]"></span>
                <span className="block w-5 bg-black"></span>
            </div>

            {/*Menu Lateral*/}

            <div className={`bg-neutral-950 fixed h-screen w-[200px] transition-all duration-500 ${isDivVisible ? 'translate-x-0' : 'translate-x-[-200px]'}`}>
            
            
                <button type="button" onClick={toggleDivVisibility} 
                     className=" rounded-md p-2 inline-flex items-center justify-center text-gray-100  focus:outline-none
                    focus:ring-2 focus:ring-inset float-right pt-3"> 
                <svg className="h-[40px] w-[70px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>


                <div className="grid grid-rows-2 gap-4 pt-[68px] pl-6">
                    <div className=''>
                        <Link to="/"><p onClick={toggleDivVisibility} className='text-white text-xs font-stylish'>INICIO</p></Link>

                    </div>
                        <hr className='w-[70%]'></hr>
                        <div className='pb-2'>
                            <Link to="/nosotros"><p onClick={toggleDivVisibility} className='text-white text-xs font-stylish'>SOBRE NOSOTROS</p></Link>
                        </div>
                        <hr className='w-[70%]'></hr>
                    </div>

                    <div className='flex mx-auto flex-wrap justify-center h-full items-center'>
                      
                            <img  className="h-[25px] pr-2 lg:pr-5" src={ig} alt="Instagram link"/>
                            <img  className="h-[26px] "src={facebook} alt="Facebook link"/>
                        
                    </div>
            </div>

            {/*Header >= 768 con Titulo*/}
            <div className="inline-block float-right p-4
                            md:float-none md:text-center md:flex md:justify-around ">

                <div className='hidden
                               md:flex'>
                    
                    <div>
                        <Link to="/"><p className='text-white  pr-2 lg:pr-5 text-base font-stylish '>INICIO</p> </Link>
                    </div>
                    <div>
                        <Link to="/nosotros"><p className='text-white text-base font-stylish'>SOBRE NOSOTROS</p></Link>
                    </div>
                

                </div>
                <h1 className="font-Lobster text-custom-100 text-2xl
                            md:text-center md:text-[30px]">Taller de Joyería Toledo</h1>

                <div className="z-30 hidden
                            md:flex md:item-center md:items-end
                            ">
                    <div>
                        <a href="">
                            <img  className="h-[19px] pr-2 lg:pr-5" src={ig} alt="Instagram link"/>
                        </a>
                    </div>
                <div>
                    <div>
                        <a href="">
                            <img  className="h-[20px] "src={facebook} alt="Facebook link"/>
                        </a>
                </div>

                </div>
            </div>
            </div>

            {/*Social Media*/ }
            
        </nav>
    );
};