import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="absolute top-0 h-screen w-full bg-home-img bg-no-repeat bg-cover z-[-1]">
            <div className='absolute flex flex-col top-[30%] left-[20%] w-[60%] md:top-[30%] lg:w-[40%] lg:left-[50%] text-white'>
                <h1 className='text-[2.2rem] md:text-[3rem] mb-6'>Detailing Auto</h1>
                <p className='text-justify text-[1.2rem] md:text-[1.7rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis vitae cupid itate a quis illo, sapiente quidem dolorem iste possimus iusto alias, perspiciatis consequuntur officiis quia id quo eaque ex?</p>
                <div className=' flex place-content-evenly mt-[3.5rem]'>
                    <button className="rounded-lg px-6 py-1 bg-[#140005]/70 border border-gray-300 text-[1rem] md:text-[1.7rem] text-gray-100 hover:bg-[#595E60]/40 duration-300">
                        <Link to="/detailing-interior" className='select-none'>Interior</Link>
                    </button>
                    <button className="rounded-lg px-6 py-1 bg-[#140005]/70 border border-gray-300 text-[1rem] md:text-[1.7rem] text-gray-100 hover:bg-[#595E60]/40 duration-300">
                        <Link to="/detailing-exterior" className='select-none'>Exterior</Link>
                    </button>

                </div>
            </div>

        </section>
    )
}

export default Home
