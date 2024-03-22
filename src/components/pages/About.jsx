import Carrousel from './Carrousel'



export default function About() {
    return (
        <main className='max-w-screen-md  bg-white pt-[50px] mx-auto'>
            <article>
                <section className="">
                    <h2 className="text-black text-center text-xl py-5">Sobre Nosotros</h2>
                    <p className="text-base px-5 py-5">Somos un negocio familiar con más de 40 años de experiencia en el fascinante mundo de la 
                    orfebrería y los grabados. Nuestra dedicación se refleja en el excelente servicio que brindamos a nuestros clientes, 
                    confían en nuestra artesanía y atención personalizada. Descubre la calidad y el cuidado en cada detalle de nuestros servicios. 
                    ¡Te invitamos a vivir la experiencia única que solo nosotros podemos ofrecerte!</p>
                </section>
                <section >

                <Carrousel />

                </section>
            </article>
        </main>
    )
};