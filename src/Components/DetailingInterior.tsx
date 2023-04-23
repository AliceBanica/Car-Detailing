import React from 'react'
import bord from "../assets/Picture3.jpg";
import seats from "../assets/Picture5.jpg"
import Footer from './Footer';
import { ScrollContainer, ScrollPage, Animator, Sticky, Fade, MoveOut, batch, StickyIn, FadeIn, ZoomIn, ZoomOut, MoveIn } from 'react-scroll-motion';

const DetailingInterior = () => {

    return (

        <ScrollContainer className='bg-black text-white'>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                    <div className=' h-screen w-full bg-interior-img bg-no-repeat bg-cover z-[-1]'>
                        <div className='flex justify-center content-center h-full lg:pt-0'>
                            <div className='flex flex-col justify-evenly content-center md:grid md:grid-cols-2 md:gap-y-[2rem] md:gap-x-[7rem] md:place-content-center w-full h-full lg:w-[80%] xl:w-[60%] mx-auto  text-white'>
                                <div className='flex justify-center h-[5rem]' ><h1 className='title-page md:text-[1.7rem] lg:text-[2.3rem] xl:text-[3rem]' id="int-title">Detailing Interior</h1></div>
                                <div className='flex text-justify md:h-[80%] ml-[1rem] mr-[1rem] md:ml-0 md:mr-[5%] text-[0.7rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]' id='int-intro'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores velit. Quidem commodi necessitatibus atque ad dolorem nam soluta velit laudantium! Qui neque placeat vitaelorem nostrum ab voluptatem enim veritatis?</div>
                                <div id='int-intro-photo'><img className='w-[80%] sm:w-[60%] md:w-[80%] xl:w-[100%] h-[10rem] sm:h-[15rem] md:h-[20rem] xl:h-[22rem] sm:pt-[2rem] ml-[10%] sm:ml-[20%] md:ml-[10%] xl:ml-[0] rounded' src={bord} alt="" /></div>
                                <div id='int-intro-photo'><img className='w-[80%] sm:w-[60%] md:w-[80%] xl:w-[100%] h-[10rem] sm:h-[15rem] md:h-[20rem] xl:h-[22rem] sm:pt-[2rem] ml-[10%] sm:ml-[20%] md:ml-[10%] xl:ml-[0] rounded-[1rem]' src={seats} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>

            {/* <div className='w-full h-screen bg-red-100 '> */}
            <ScrollPage page={1}>
                <Animator animation={batch(FadeIn(), ZoomIn(1.5, 1), ZoomOut(1, 1.2), Fade())}>
                    <div className='bg-black  '>
                        <div className='flex flex-col  content-center h-full  lg:w-[80%] xl:w-[60%] mx-auto w-full  '>
                            <div className='relative flex flex-col-reverse  h-[60rem] md:h-[80rem] border-2 border-blue-600  '>
                                <div className='absolute w-full h-full -right-[0rem] top-[12rem]  md:top-[10%] md:w-[50%] md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-row ml-[10%] md:ml-[5%] md:mr-[5%] mt-[2rem] md:mt-0' >
                                        <div className='h-[10rem] md:h-[15rem] lg:h-[18rem] w-[45%] md:w-[100%] border-2 border-red-600'>BEFORE</div>
                                        <div className='h-[10rem] md:h-[15rem] lg:h-[18rem] w-[45%] md:w-[100%] border-2 border-red-600'>AFTER</div>
                                    </div>
                                </div>

                                <div className='absolute w-full h-full -left-[0rem] top-[4rem] md:top-[10%] md:w-[50%] md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-col justify-center mt-[2rem] ml-[5%] mr-[5%]'>
                                        <h1 className='text-[1.2rem] lg:text-[1.4rem] font-bold  mb-[1rem] sm:mb-[2rem]'>Cea mai buna parte?</h1>
                                        <p className='text-justify text-[0.7rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem]'>Este rapid si nu foarte costisitor. Te vom scapa de murdaria acumulata in timp cu usurinta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={batch(ZoomIn(1.5, 1), MoveIn())}>
                    <div className=' bg-gradient-to-r from-blue-500 to-transparent h-screen '>
                        <div className='flex flex-col  content-center h-full  lg:w-[80%] xl:w-[60%] mx-auto w-full  '>
                            <div className='relative flex flex-col md:flex-row h-[60rem] md:h-[80rem]  border-2 border-green-600 w-full'>
                                <div className='absolute w-full h-full -left-[0rem] top-[2rem] md:top-[10%] md:w-[50%] md:pt-[10rem]  md:right-0 '>
                                    <div className='flex flex-1 flex-col justify-center mt-[2rem] ml-[5%] mr-[5%]'>
                                        <h1 className='text-[1.2rem] lg:text-[1.4rem] xl:text-[1.7] font-bold mb-[1rem] sm:mb-[2rem]'>Bordul este prafuit si murdar?</h1>
                                        <p className='text-justify text-[0.7rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem]'>Ne ocupam noi. Oferim servicii de curatare detaliata care te scapa de murdaria nedorita.</p>
                                    </div>
                                </div>

                                <div className='absolute w-full h-full -right-[0rem]  top-[11rem]    md:top-[10%] md:w-[50%]  md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-row ml-[10%] md:ml-[5%] md:mr-[5%] mt-[2rem] md:mt-0'>
                                        <div className='h-[10rem] md:h-[15rem] lg:h-[18rem] w-[45%] md:w-[100%] border-2 border-red-600'>BEFORE</div>
                                        <div className='h-[10rem] md:h-[15rem] lg:h-[18rem] w-[45%] md:w-[100%] border-2 border-red-600'>AFTER</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* </div>
            </div > */}

            <Footer />
        </ScrollContainer >

    )
}

export default DetailingInterior