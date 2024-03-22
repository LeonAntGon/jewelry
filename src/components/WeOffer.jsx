import Diamond from './assets/diamond.png';
import Box from './assets/box.png';


export default function WeOffer() {
    return (
        <section className='grid place-items-center mx-3 my-5' style={{gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
            <figure className='flex items-center relative z-1'>
                <img className='w-12' src={Diamond} alt='Box' />
                <figcaption className='text-sm font-semibold'> Trabajo personalizado</figcaption>
            </figure>
            <figure className='flex items-center relative z-1'>
                <img className='w-12' src={Box} alt='Diamond'/>
                <figcaption className='text-sm font-semibold'>Retiro gratis en el local</figcaption>
            </figure>
        </section>
    )
}