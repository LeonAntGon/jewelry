export default function Header() {
    return(
        <nav className="h-14 w-full bg-neutral-950 
                        md:h-16 fixed z-50">
            <div className="inline-grid mx-5 pt-5 [&>span]:h-[3px] [&>span]:rounded-sm
                            md:hidden ">
                <span className="block w-6 bg-white mb-[6px]"></span>
                <span className="block w-4 bg-white mb-[6px]"></span>
                <span className="block w-5 bg-white"></span>
            </div>
            <div className="inline-block float-right p-4
                            md:float-none md:block">
            <h1 className="font-Lobster text-custom-100 text-2xl
                            md:text-center md:text-[30px]">Taller de Joyería Toledo</h1>
            </div>
        </nav>
    );
};