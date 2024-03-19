import React from 'react';
import RingOne from './assets/rings/anillo-oro-plata(1).jpg';
import RingTwo from './assets/rings/m-normal-in-gray(2).jpg';
import RingThree from './assets/rings/m-bg-gray(3).jpg';
import RingFour from './assets/rings/m-normal(4).jpg';
import RingFive from './assets/rings/anillo-oro-plata-1(5).jpg';
import RingSix from './assets/rings/snake (6).jpg';
import RingSeven from './assets/rings/black (7).jpg';
import RingEight from './assets/rings/black (8).jpg';
import RingNine from './assets/rings/gold (9).jpg';
import RingTen from  './assets/rings/gold (10).jpg';
import RingEleven from './assets/rings/gold (11).jpg';


const images = [RingOne, RingTwo, RingThree, RingFour, RingFive,
                RingSix ,RingSeven,RingEight,RingNine,RingTen,RingEleven,];

const name = ["1", "2", "3", "4", "5","6","7","8","9","10","11",]

export default function News() {
    return(


        <section className="text-center item-center bg-neutral-900 pt-3 pb-[70px] mt-5">
            <h2 className='text-white mt-6 text-xl'>Novedades:</h2>
            <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-100 rounded-full"></div>


            <div className='pb-10'>
            <div className='inline-flex flex-wrap justify-center gap-8'>
                {images.map((img, index) => (
                    <figure className='inline-block min-w-13 min-h-13 max-w-[100px] max-h-[100px]' key={index}>
                        <img className="w-full h-full rounded-md" src={img} alt="" />
                        <figcaption className='inline text-white'>{name[index]}</figcaption>
                    </figure>
                ))}
            </div>
            </div>
            
        </section>
    );
}
