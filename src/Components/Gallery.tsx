import Footer from './Footer';
import img1 from "../assets/bg-board.png";
import img2 from "../assets/Picture5.jpg";

import { ScrollContainer, ScrollPage, Animator, Sticky, Fade, MoveOut, batch, StickyIn, FadeIn, ZoomIn, ZoomOut, MoveIn } from 'react-scroll-motion';





const Gallery = () => {
    const sectionInfo = [["0", "Interior", img1, img2, 'interior -large img', "interior-vider"],
    ["1", "Exterior", img1, img2, 'ext -large img', "ext-vider"],
    ["2", "Canapele", img1, img2, 'canapea -large img', "canapea-vider"]];


    const colors = ['#0B0909', '#202024', '#0B0909'];


    return (
        <ScrollContainer className='bg-black relative text-white'>



            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), MoveOut(0, -200))} >
                    <div className='h-screen' >
                        <div className='flex justify-center items-center h-[7rem] md:h-[10rem] text-[2.2rem]'>Galerie</div>
                        <div className='flex flex-col justify-center items-center '>
                            <div className='-top-[4rem] sm:-top-[1rem] md:-top-[10rem] lg:-top-[8rem] relative w-[100%] h-screen border-b-2 border-red-500 -z-10' key={0} id="gallery-first-page">
                                <div className='relative flex flex-col justify-center h-full lg:w-[80%] xl:w-[60%] mx-auto'>
                                    <div className='relative mx-[1rem] '>
                                        <h1 className='text-[1.3rem] md:text-[1.7rem] border-b-[0.2rem]'>{sectionInfo[0][1]}</h1>
                                        <div className='g-decoration'></div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row items-center justify-around mt-[2rem]'>
                                        <div className='flex justify-center items-center flex-row w-[90%] mx-auto md:w-[50%]'>
                                            <img src={sectionInfo[0][2]} className='w-[10rem] sm:w-[15rem]' alt='' />
                                            <img src={sectionInfo[0][3]} className='w-[10rem] sm:w-[15rem]' alt='' />
                                        </div>
                                        <div className='w-[90%] mx-auto md:w-[45%] h-[8rem] md:h-[15rem] mt-[2rem] border-4 border-red-700'>{sectionInfo[0][4]}</div>
                                    </div>
                                    <div className='flex justify-center items-center w-[60%] h-[8rem] sm:h-[15rem] border-4 border-red-700 mx-auto mt-[1rem] sm:mt-[3rem]'>{sectionInfo[0][5]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>



            <ScrollPage page={1}>
                <Animator animation={batch(FadeIn(), ZoomIn(1.5, 1), ZoomOut(1, 1.2), Fade())}>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='relative w-[100%] h-screen border-b-2 border-red-500 -z-10' key={0}>
                            <div className='relative flex flex-col justify-center h-full lg:w-[80%] xl:w-[60%] mx-auto  '>
                                <div className='relative top-[4rem] sm:-top-[4rem] w-[90%] mx-[1rem] lg:w-[100%] lg:mx-auto lg:top-[2rem]'>
                                    <h1 className='text-[1.3rem] md:text-[1.7rem] border-b-[0.2rem]'>{sectionInfo[1][1]}</h1>
                                    <div className='g-decoration'></div>
                                </div>
                                <div className='flex flex-col lg:flex-row items-center justify-around mt-[6rem] sm:mt-[2rem]'>
                                    <Animator animation={batch(FadeIn(), MoveIn(-1000, 0))}>
                                        <div className='flex w-[50%]'>
                                            <img src={sectionInfo[0][2]} className='w-[10rem] sm:w-[15rem]' alt='' />
                                            <img src={sectionInfo[0][3]} className='w-[10rem] sm:w-[15rem]' alt='' />
                                        </div>
                                    </Animator>
                                    <Animator animation={batch(FadeIn(), MoveIn(1000, 0))} className='w-[90%] mx-auto md:w-[45%] h-[8rem] md:h-[15rem] mt-[2rem] border-4 border-red-700'>
                                        <div>{sectionInfo[1][4]}</div>
                                    </Animator>
                                </div>
                                <div className='flex justify-center items-center w-[60%] h-[8rem] sm:h-[15rem] border-4 border-red-700 mx-auto mt-[1rem] sm:mt-[3rem]'>{sectionInfo[1][5]}</div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>




            <ScrollPage page={2}>
                <Animator animation={batch(ZoomIn(1.5, 1), MoveIn())}>

                    <div className='flex flex-col justify-center items-center'>
                        <div className=' relative w-[100%] h-screen border-b-2 border-red-500' key={0}>
                            <div className='relative flex flex-col justify-center h-full lg:w-[80%] xl:w-[60%] mx-auto '>
                                <div className='relative top-[4rem] sm:-top-[4rem] w-[90%] mx-[1rem] lg:w-[100%] lg:mx-auto lg:top-[2rem]'>
                                    <h1 className='text-[1.3rem] md:text-[1.7rem] border-b-[0.2rem]'>{sectionInfo[2][1]}</h1>
                                    <div className='g-decoration'></div>
                                </div>
                                <div className='flex flex-col lg:flex-row items-center justify-around mt-[6rem] sm:mt-[2rem]'>
                                    <Animator animation={batch(FadeIn(), MoveIn(-1000, 0))}>
                                        <div className='flex w-[50%]'>
                                            <img src={sectionInfo[0][2]} className='w-[10rem] sm:w-[15rem]' alt='' />
                                            <img src={sectionInfo[0][3]} className='w-[10rem] sm:w-[15rem]' alt='' />
                                        </div>
                                    </Animator>
                                    <Animator animation={batch(FadeIn(), MoveIn(1000, 0))} className='w-[90%] mx-auto md:w-[45%] h-[8rem] md:h-[15rem] mt-[2rem] border-4 border-red-700'>
                                        <div>{sectionInfo[2][4]}</div>
                                    </Animator>
                                </div>
                                <div className='flex justify-center items-center w-[60%] h-[8rem] sm:h-[15rem] border-4 border-red-700 mx-auto mt-[1rem] sm:mt-[1rem]'>{sectionInfo[2][5]}</div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* {sectionInfo.map((info, index) => {
                        return <div style={{ backgroundColor: `${colors[index]}` }} className='-top-[10rem] relative w-[100%] h-screen border-b-2 border-red-500 -z-10' key={index}>
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


                            </div>
                        </div>
                    })} */}


            <Footer />
        </ScrollContainer >
    )
}

export default Gallery
