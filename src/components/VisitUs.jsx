export default function VisitUs() {
    return (
        <section className="border-b border-black  text-center item-center bg-coolwhite-100 pt-[40px]  pb-[100px]">
            <h3 className='font-semibold text-xl'>Visitanos</h3>
            <div className="inline-block relative top-[-14px] w-3 h-1 bg-gray-900 rounded-full"></div>

            <div className=" flex flex-wrap justify-center items-center mt-[30px] md:pr-8 md:flex-nowrap">
                <div className="w-full h-[340px] md:h-[240px] md:w-[50%]">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.76473043593074!2d-65.20720366902029!3d-26.828331911349586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d0036c5e5e1%3A0x5458e40a77e70536!2sTaller%20De%20Joyer%C3%ADa%20Toledo!5e0!3m2!1sen!2sar!4v1713724136393!5m2!1ses!2sar"
                title="Mapa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                ></iframe>
                </div>
                <div className="pl-8 pt-[40px] md:pt-0">
                    <h4 className="font-stylish font-semibold text-base">Dirección</h4>
                    <p className=' text-center pt-[4px] text-sm font-stylish'>Maipu 167 - Local 6</p>
                    <p className=' text-center pt-[4px] text-sm font-stylish'>San Miguel de Tucumán</p>

                    <h4 className="font-stylish font-semibold pt-[24px]">Horario de atención</h4>
                    <p className='text-sm font-stylish'>Lunes a sábado:</p>
                    <p className='text-sm font-stylish'>De 10:30 hrs a 21:00 hrs</p>
                </div>
            </div>
        </section>
    )
}