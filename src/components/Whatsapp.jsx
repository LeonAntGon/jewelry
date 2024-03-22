import WspLogo from './assets/whatsapp.png';

export default function Whatsapp() {
    return( 
        <div className='fixed grid place-items-end z-20 bottom-0 right-0 place-content-end rounded-full text-center'>
            <a className=" align-right  mb-5 mr-5 px-1 py-1"
                 href="https://api.whatsapp.com/send?phone=5493816090708">
                <img src={WspLogo} alt='Whats app link' 
                    className='w-14 hover:w-[64px] transition duration-2000 ease-in-out'
                />
            </a>   
        </div>
    );
};
