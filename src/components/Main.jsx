import News from './News';
import WeOffer from './WeOffer';
import Slider from './Slider';
import Slider1 from './Slider1'
import '../slider.css';
import WspLogo from './assets/whatsapp.png';


export default function Main() {

  return (
    <main className='pt-[60px] [&>section>h2]:pt-4 [&>section>h2]:text-center max-w-screen-md mx-auto bg-white'>
    <WeOffer />
        <section className='text-center mb-4'>
            <h2 className='text-xl'>Fabricamos:</h2>
            <div class="inline-block relative top-[-14px] w-3 h-1 bg-neutral-900 rounded-full"></div>

           {/*1st Animated Slider  */}

            <Slider />
          
        </section>
        <section className='text-center mb-4'>
            <h2 className='text-xl'>Grabamos:</h2>
              <div class="inline-block relative top-[-14px] w-3 h-1 bg-neutral-900 rounded-full "></div>
            
           
              <Slider1 />
        </section>
        <News />
        
    </main>
  );
};
