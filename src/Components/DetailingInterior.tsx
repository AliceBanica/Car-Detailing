import React from 'react'
import bordBforeAfter from "../assets/interior/img-1.png";
import canapeaBeforeAfter from "../assets/interior/img-2.png";
import Footer from './Footer';
import { ScrollContainer, ScrollPage, Animator, Fade, MoveOut, batch, FadeIn, ZoomIn, ZoomOut, MoveIn } from 'react-scroll-motion';

const DetailingInterior = () => {

    return (

        <ScrollContainer className='bg-black text-white'>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                    <div className=' h-screen w-full bg-interior-img bg-no-repeat bg-cover z-[-1]'>
                        <div className='flex justify-center content-center h-full lg:pt-0'>
                            <div className='flex flex-col justify-center md:justify-evenly content-center md:grid md:grid-cols-2 md:gap-y-[40rem] md:gap-x-[7rem] md:pb-[15rem] md:place-content-center w-full h-full lg:w-[80%] xl:w-[60%] mx-auto  text-white '>
                                <div className='flex justify-center h-[5rem]' ><h1 className='title-page md:text-[1.7rem] lg:text-[2.3rem] xl:text-[3rem]' id="int-title">Detailing Interior</h1></div>
                                <div className='flex text-justify md:h-[80%] ml-[1rem] mr-[1rem] md:ml-0 md:mr-[5%] text-[0.7rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]' id='int-intro'> Masina este cartea de vizita a soferului. Toate serviciile oferite sunt realizate manual. Ne asiguram ca aceasta isi va recapata stralucirea, cu ajutorul produselor de inalta calitate folosite. </div>
                            </div>


                        </div>
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={batch(FadeIn(), ZoomIn(1.5, 1), ZoomOut(1, 1.2), Fade())}>
                    <div className='bg-black  '>
                        <div className='flex flex-col  content-center h-full  lg:w-[80%] xl:w-[60%] mx-auto w-full  '>
                            <div className='relative flex flex-col-reverse  h-[60rem] md:h-[80rem]   '>
                                <div className='absolute w-full h-full -right-[0rem] top-[14rem]  md:top-[10%] md:w-[50%] md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-row ml-[10%] md:ml-[5%] md:mr-[5%] mt-[2rem] md:mt-0' >
                                        <img src={bordBforeAfter} className=' md:h-[15rem] lg:h-[18rem] w-[90%] md:w-[100%] rounded' />
                                    </div>
                                </div>
                                <div className='absolute w-full h-full -left-[0rem] top-[2rem] md:top-[5rem] md:w-[50%] md:pt-[10rem]  md:right-0 '>
                                    <div className='flex flex-1 flex-col justify-center mt-[4rem] ml-[5%] mr-[5%]'>
                                        <h1 className='text-[1.2rem] lg:text-[1.4rem] font-bold  mb-[1rem] sm:mb-[2rem]'>Bord prafuit?</h1>
                                        <p className='text-justify text-[0.7rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem]'>Necesitand o atentie mai mare la detalii, ne asiguram ca praful este aspirat atat de pe bord cat si din locurile greu accesibile, iar butoanele vor fi curatate cu produse speciale.</p>
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
                            <div className='relative flex flex-col md:flex-row h-[60rem] md:h-[80rem]   w-full'>
                                <div className='absolute w-full h-full -left-[0rem] top-[2rem] md:top-[5rem] md:w-[50%] md:pt-[10rem]  md:right-0 '>
                                    <div className='flex flex-1 flex-col justify-center mt-[4rem] ml-[5%] mr-[5%]'>
                                        <h1 className='text-[1.2rem] lg:text-[1.4rem] font-bold  mb-[1rem] sm:mb-[2rem]'>Curatarea canapelelor?</h1>
                                        <p className='text-justify text-[0.7rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem]'>Este rapid si nu foarte costisitor. Fie ca sunt pete acumulate odata cu trecerea timpului sau provenite de la copii, te vom scapa de murdarie cu usurinta.</p>
                                    </div>
                                </div>

                                <div className='absolute w-full h-full -right-[0rem]  top-[14rem]    md:top-[10%] md:w-[50%]  md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-row ml-[10%] md:ml-[5%] md:mr-[5%] mt-[2rem] md:mt-0'>
                                        <img src={canapeaBeforeAfter} className=' md:h-[15rem] lg:h-[18rem] w-[90%] md:w-[100%] rounded' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>

            <Footer />
        </ScrollContainer >

    )
}

export default DetailingInterior