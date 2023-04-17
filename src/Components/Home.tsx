import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="absolute top-0 h-screen w-full bg-home-img bg-no-repeat bg-cover z-[-1]">
            <div className='relative flex flex-col top-[30%] left-[20%] w-[60%] md:top-[30%] lg:w-[40%] lg:left-[50%] text-white'>
                <div className='absolute -left-[10rem] h-screen w-full' id="home">
                    <h1 className='text-[2.2rem] md:text-[3rem] mb-6'>Detailing Auto</h1>
                    <p className='text-justify text-[1.2rem] md:text-[1.7rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis vitae cupid itate a quis illo, sapiente quidem dolorem iste possimus iusto alias, perspiciatis consequuntur officiis quia id quo eaque ex?</p>
                    <div className=' flex place-content-evenly mt-[3.5rem]'>
                        <button
                            type="button"
                            className="inline-block rounded bg-black-700 px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white 
                        shadow-[0_4px_9px_-4px_#A30000] transition duration-150 ease-in-out hover:bg-black-600 
                        hover:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)] focus:bg-black-600 
                        focus:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)] focus:outline-none focus:ring-0 active:bg-black-700 
                        active:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)]">
                            <Link to="/detailing-interior" className='select-none'>Interior</Link>
                        </button>
                        <button
                            type="button"
                            className="inline-block rounded bg-black/70 px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white 
                        shadow-[0_4px_9px_-4px_#A30000] transition duration-150 ease-in-out hover:bg-black-600 
                        hover:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)] focus:bg-black-600 
                        focus:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)] focus:outline-none focus:ring-0 active:bg-black-700 
                        active:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)]">
                            <Link to="/detailing-exterior" className='select-none'>Exterior</Link>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
