import RingGold1 from './assets/rings/anillo-oro-plata(1).jpg';
import RingGold2 from './assets/rings/anillo-oro-plata(2).jpg';
import Bracelet1 from './assets/rings/brazalete(1).jfif';
/*import RingTwo from './assets/rings/m-normal-in-gray(2).jpg';
import RingThree from './assets/rings/m-bg-gray(3).jpg';
import RingFour from './assets/rings/m-normal(4).jpg';
import RingFive from './assets/rings/anillo-oro-plata-1(5).jpg';*/
import RingArtes1 from './assets/rings/anillo-artesanal(1).jpg';
import RingArtes2 from './assets/rings/anillo-artesanal(2).jpg';
import RingArtes3 from './assets/rings/anillo-artesanal(3).jpg';
import RingNine from './assets/rings/anillo-grabado-espejo(1).jpg';
import RingTen from  './assets/rings/anillo-grabado-espejo(2).jpg';
import RingEleven from './assets/rings/anillo-grabado-espejo(3).jpg';


const images = [RingArtes1 ,RingArtes2, RingArtes3,RingNine,RingTen,RingEleven,
                RingGold1, RingGold2 , Bracelet1];

const name = ["ANILLOS ARTESANALES","ANILLOS ARTESANALES","ANILLOS ARTESANALES"," AN. GRABADO ESPEJO","AN. GRABADO ESPEJO","AN. GRABADO ESPEJO","ANILLO DE LETRA", " ANILLO DE LETRA" ,"BRAZALETES"]
/*Eliminar del 2-4 */

export default function News() {
    return(


        <section className="text-center item-center bg-neutral-900 pt-3 pb-[70px] mt-5">
            <h2 className='text-white mt-6 text-xl'>Novedades:</h2>
            <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-100 rounded-full"></div>


            <div className='pb-10'>
            <div className='inline-flex flex-wrap justify-center gap-8'>
                {images.map((img, index) => (
                    <figure className='inline-block min-w-13 min-h-13 max-w-[100px] max-h-[100px] mt-8' key={index}>
                        <img className="w-full h-full rounded-md" src={img} alt="" />
                        <figcaption className='inline text-gray-200 text-sm font-ibmplex'>{name[index]}</figcaption>
                    </figure>
                ))}
            </div>
            </div>
            
        </section>
    );
}
