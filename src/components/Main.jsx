import News from './News';
import WeOffer from './WeOffer';
import Slider from './Slider';
import Slider1 from './Slider1'
import '../slider.css';
import VisitUs from './VisitUs'



export default function Main() {

  return (
    <main className='pt-[60px] [&>section>h2]:pt-4 [&>section>h2]:text-center w-full mx-auto bg-white'>
    <WeOffer />
        <section className='text-center my-[25px]'>
            <h2 className='text-xl font-semibold'>Fabricamos</h2>
            <div class="inline-block relative top-[-14px] w-3 h-1 bg-neutral-900 rounded-full"></div>

           {/*1st Animated Slider  */}

            <Slider />
          
        </section>
        <section className='text-center my-[25px]'>
            <h2 className='text-xl font-semibold'>Grabamos</h2>
              <div class="inline-block relative top-[-14px] w-3 h-1 bg-neutral-900 rounded-full "></div>
            
           
              <Slider1 />
        </section>
        <News />
        <VisitUs />
        
    </main>
  );
};
