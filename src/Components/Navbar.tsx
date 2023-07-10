import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    const handleClickNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }



    return (
        <nav className='w-full bg-black sticky top-0 z-10'>
            <div className='relative container mx-auto pt-6 pb-6 lg:w-[80%] '>
                <div className='flex items-center justify-between '>
                    <div className='flex-1'>
                        <Link to="/">
                            <img src={logo} className='w-[10rem]' alt="logo" />
                        </Link>
                    </div>
                    <div className='hidden  md:flex flex-1 justify-between space-x-10 '>
                        <Link to="/" className=' text-xl text-white select-none group transition duration-300'>Acasa
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span></Link>
                        <div className='relative'>
                            <span className='peer text-xl text-white cursor-pointer select-none'>Servicii</span>

                            <div className="absolute hidden peer-hover:flex hover:flex w-[200px] flex-col pt-10 drop-shadow-lg z-50" >
                                <div className='mt-0 bg-neutral-700/80 text-white absolute -left-3 pl-3 pb-6 pt-3 rounded '>
                                    <div className='absolute -top-[1.2rem] left-6 w-0 h-0 border-l-[1.2rem] border-l-transparent border-b-[1.2rem] border-b-neutral-700/80 border-r-[1.2rem] border-r-transparent'></div>
                                    <Link to="/detailing-interior" className='inline-block mb-[1rem] mt-[0.5rem] text-xl select-none group transition duration-300'>Detailing Interior
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span></Link>
                                    <Link to="/detailing-exterior" className='inline-block mb-[0rem] mt-[0.5rem] text-xl select-none group transition duration-300'>Detailing Exterior
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span></Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/galerie" className='text-xl group transition duration-300 text-white select-none'>Galerie
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span></Link>
                        <Link to="/preturi" className='text-xl group transition duration-300 text-white select-none'>Preturi
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span></Link>
                        <Link to="/contact" className='text-xl group transition duration-300 text-white select-none'>Contact
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span></Link>
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className={`${isNavbarOpen && "open"} block hamburger md:hidden focus:outline-none`} onClick={handleClickNavbar}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>

                {/* Mobile Menu */}

                <div className="md:hidden">
                    <div
                        className={`${isNavbarOpen ? "flex" : "hidden"} absolute flex-col items-center self-end py-8 mt-0 space-y-6 font-bold text-sm bg-white rounded sm:w-auto sm:self-center left-[12rem] right-1 drop-shadow-md z-10`}
                    >
                        <Link to="/detailing-interior" className='select-none' onClick={handleClickNavbar}>Detailing Interior</Link>
                        <Link to="/detailing-exterior" className='select-none' onClick={handleClickNavbar}>Detailing Exterior</Link>
                        <Link to="/galerie" className='select-none' onClick={handleClickNavbar}>Galerie</Link>
                        <Link to="/preturi" className='select-none' onClick={handleClickNavbar}>Preturi</Link>
                        <Link to="/contact" className='select-none' onClick={handleClickNavbar}>Contact</Link>
                    </div>
                </div>

            </div>
        </nav >
    )
}

export default Navbar
