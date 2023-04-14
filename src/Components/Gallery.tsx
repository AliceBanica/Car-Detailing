import React from 'react';
import img1 from "../assets/bg-board.png";
import img2 from "../assets/Picture5.jpg";
import Footer from './Footer';

const Gallery = () => {
    const sectionInfo = [["0", "Interior", img1, img2, 'interior -large img', "interior-vider"],
    ["1", "Exterior", img1, img2, 'ext -large img', "ext-vider"],
    ["2", "Canapele", img1, img2, 'canapea -large img', "canapea-vider"]];


    const colors = ['#0B0909', '#202024', '#0B0909'];


    return (
        <section className=' relative text-white '>
            <div className='w-full h-full '>
                <div className='flex justify-center items-center h-[10rem] text-[2.2rem] bg-[#0B0909]'>Galerie</div>
                <div className='flex flex-col justify-center items-center '>
                    {sectionInfo.map((info, index) => {
                        return <div style={{ backgroundColor: `${colors[index]}` }} className='-top-[10rem] relative w-[100%] h-screen border-b-2 border-red-500 -z-10'>
                            <div className='relative flex flex-col justify-center h-full lg:w-[80%] xl:w-[60%] mx-auto'>
                                <div className='relative'>
                                    <h1 className='text-[1.7rem] border-b-[0.2rem]'>{info[1]}</h1>
                                    <div className='g-decoration'></div>
                                </div>
                                <div className='flex items-center justify-around mt-[2rem]'>
                                    <div className='flex w-[50%]'>
                                        <img src={info[2]} className='w-[15rem]' alt='' />
                                        <img src={info[3]} className='w-[15rem]' alt='' />
                                    </div>
                                    <div className='w-[45%] h-[15rem] mt-[2rem] border-4 border-red-700'>{info[4]}</div>
                                </div>
                                <div className='flex justify-center items-center w-[60%] h-[15rem] border-4 border-red-700 mx-auto mt-[3rem]'>{info[5]}</div>
                                <button
                                    type="button"
                                    className="absolute bottom-[7rem] right-[0rem]  inline-block rounded bg-black/70 px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white 
                        shadow-[0_4px_9px_-4px_#A30000] transition duration-150 ease-in-out hover:bg-black-600 
                        hover:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)] focus:bg-black-600 
                        focus:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)] focus:outline-none focus:ring-0 active:bg-black-700 
                        active:shadow-[0_9px_10px_-2px_rgba(163,0,0,0.3),0_4px_18px_0_rgba(163,0,0,0.2)]">
                                    Mai multe {'>'}{'>'}
                                </button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className='-mt-[10rem]'>
                <Footer />
            </div>
        </section>
    )
}

export default Gallery
