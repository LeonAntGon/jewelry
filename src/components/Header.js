import ig from './assets/ig.png';
import facebook from './assets/facebook.png';
import React, { useState } from 'react';

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
                            md:hidden cursor-pointer z-30" onClick={toggleDivVisibility} >
                <span className="block w-6 bg-white mb-[6px]"></span>
                <span className="block w-4 bg-white mb-[6px]"></span>
                <span className="block w-5 bg-white"></span>
            </div>
            <div className="bg-neutral-950 fixed h-screen w-[250px]" style={{ display: isDivVisible ? 'block' : 'none' }}>
                    
                    <div className="grid grid-rows-2 gap-4 pt-[60px] pl-6">
                        <div className=''>
                            <p className='text-white text-xl'>CASA</p>
                        </div>
                        <hr className='w-[70%]'></hr>
                        <div className='pb-3'>
                            <p className='text-white text-xl'>SOBRE NOSOTROS</p>
                        </div>
                        <hr className='w-[70%]'></hr>
                    </div>
            </div>

            {/*Title*/ }
            <div className="inline-block float-right p-4
                            md:float-none md:text-center md:flex md:justify-around ">

                <div className='hidden
                               md:flex'>
                    
                    <div>
                        <p className='text-white text-xl pr-2 lg:pr-5'>CASA</p>
                        
                    </div>
                    <div>
                        <p className='text-white text-xl'>SOBRE NOSOTROS</p>
                    </div>
                

                </div>
                <h1 className="font-Lobster text-custom-100 text-2xl
                            md:text-center md:text-[30px]">Taller de Joyería Toledo</h1>

                <div className="z-30 hidden
                            md:flex md:item-center md:items-end
                            ">
                    <div>
                        <a href="">
                            <img  className="h-[30px] pr-2 lg:pr-5" src={ig} alt="Instagram link"/>
                        </a>
                    </div>
                <div>
                    <div>
                        <a href="">
                            <img  className="h-[32px] "src={facebook} alt="Facebook link"/>
                        </a>
                </div>

                </div>
            </div>
            </div>

            {/*Social Media*/ }
            
        </nav>
    );
};