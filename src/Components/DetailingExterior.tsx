import React from 'react';
import headlights from "../assets/exterior/img1-ext.png";
import waxExt from "../assets/exterior/img2-ext.png";
import Footer from './Footer';
import { ScrollContainer, ScrollPage, Animator, Fade, MoveOut, batch, FadeIn, ZoomIn, ZoomOut, MoveIn } from 'react-scroll-motion';



const DetailingExterior = () => {
    return (

        <ScrollContainer className='bg-black text-white'>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                    <div className=' h-screen w-full bg-exterior-img bg-no-repeat bg-cover z-[-1]'>
                        <div className='flex justify-center content-center h-full lg:pt-0'>
                            <div className='flex flex-col justify-center md:justify-evenly content-center md:grid md:grid-cols-2 md:gap-y-[40rem] md:gap-x-[7rem] md:pb-[15rem] md:place-content-center w-full h-full lg:w-[80%] xl:w-[60%] mx-auto  text-white '>
                                <div className='flex justify-center h-[5rem]' ><h1 className='title-page md:text-[1.7rem] lg:text-[2.3rem] xl:text-[3rem]' id="int-title">Detailing Exterior</h1></div>
                                <div className='flex text-justify md:h-[80%] ml-[1rem] mr-[1rem] md:ml-0 md:mr-[5%] text-[0.7rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]' id='int-intro'> Expunerea pe perioade lungi la diferite conditii meteorologice fara ca exteriorul masinii sa fie protejat, duce la deterioarea vopselei acesteia. Noi ne asiguram ca masina dumneavoastra primeste ingrijirea de care are nevoie. </div>
                            </div>


                        </div>
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={batch(FadeIn(), ZoomIn(1.5, 1), ZoomOut(1, 1.2), Fade())}>
                    <div className='bg-black  '>
                        <div className='flex flex-col  content-center h-full  lg:w-[80%] xl:w-[60%] mx-auto w-full  '>
                            <div className='relative flex flex-col-reverse  h-[60rem] md:h-[80rem]  '>
                                <div className='absolute w-full h-full -right-[0rem] top-[14rem]  md:top-[10%] md:w-[50%] md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-row ml-[10%] md:ml-[5%] md:mr-[5%] mt-[2rem] md:mt-0' >
                                        <img src={headlights} className=' md:h-[15rem] lg:h-[16rem] w-[90%] md:w-[100%] rounded' />
                                    </div>
                                </div>

                                <div className='absolute w-full h-full -left-[0rem] top-[4rem] md:top-[10%] md:w-[50%] md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-col justify-center mt-[rem] ml-[5%] mr-[5%]'>
                                        <h1 className='text-[1.2rem] lg:text-[1.4rem] font-bold  mb-[1rem] sm:mb-[2rem]'>Redam stralucirea masinii tale</h1>
                                        <p className='text-justify text-[0.7rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem]'>Pentru protectia exteriorului masinii, oferim cea mai buna protectie a vopselei utilizand un strat de ceara, crescand durata de viata a acesteia si mentinand-o lucioasa.</p>
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
                            <div className='relative flex flex-col md:flex-row h-[60rem] md:h-[80rem]  w-full'>
                                <div className='absolute w-full h-full -left-[0rem] top-[2rem] md:top-[10%] md:w-[50%] md:pt-[10rem]  md:right-0 '>
                                    <div className='flex flex-1 flex-col justify-center mt-[rem] ml-[5%] mr-[5%]'>
                                        <h1 className='text-[1.2rem] lg:text-[1.4rem] xl:text-[1.7] font-bold mb-[1rem] sm:mb-[2rem]'>Polish faruri</h1>
                                        <p className='text-justify text-[0.7rem] sm:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem]'>Datorita uzurii acumulata treptat datorita expunerii la diferitele conditii climatice, farurile se matuiesc si reduc vizibilitatea in timp, mai ales pe timp de noapte. Utilizand solutii si echipamente profesionale, vom readuce farurile la starea lor initiala.</p>
                                    </div>
                                </div>

                                <div className='absolute w-full h-full -right-[0rem]  top-[14rem]    md:top-[10%] md:w-[50%]  md:pt-[10rem]'>
                                    <div className='flex flex-1 flex-row ml-[10%] md:ml-[20%] md:mr-[5%] mt-[2rem] md:mt-0'>
                                        <img src={waxExt} className='h-[20rem] md:h-[15rem] lg:h-[20rem] w-[90%] md:w-[80%] rounded' />
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

export default DetailingExterior