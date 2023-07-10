
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Footer from './Footer';

import intImg1 from "../assets/galerie/int1.png";
import intImg2 from "../assets/galerie/int2.png";
import intImg3 from "../assets/galerie/int3.png";
import intImg4 from "../assets/galerie/int4.png";
import intImg5 from "../assets/galerie/int5.png";
import intImg6 from "../assets/galerie/int6.png";
import intImg7 from "../assets/galerie/int7.png";
import intImg8 from "../assets/galerie/int8.png";
import intImg9 from "../assets/galerie/int9.png";
import intImg10 from "../assets/galerie/int10.png";

import extImg1 from "../assets/galerie/polish1.png";
import extImg2 from "../assets/galerie/polish2.png";
import extImg3 from "../assets/galerie/polish3.png";
import extImg4 from "../assets/galerie/polish4.png";
import extImg5 from "../assets/galerie/polish5.png";
import extImg from "../assets/galerie/polish-ext.png";

import janteBefore from "../assets/galerie/jante-before.png";
import janteAfter from "../assets/galerie/jante-after.png";


interface SwiperProps {
    images: string[];
}

const Swiper: React.FC<SwiperProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        prevArrow: <button className="swiper-button swiper-button-prev">{'<'}</button>,
        nextArrow: <button className="swiper-button swiper-button-next">{'>'}</button>,
        beforeChange: (prev: number, next: number) => setCurrentSlide(next),
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => {
                const isPrevImage = index === currentSlide - 1 || (currentSlide === 0 && index === images.length - 1);
                const isNextImage = index === currentSlide + 1 || (currentSlide === images.length - 1 && index === 0);
                const classNames = `swiper-image ${isPrevImage ? 'prev-image' : isNextImage ? 'next-image' : ''}`;

                return <div key={index}>
                    <img
                        src={image}
                        alt={`Image ${index}`}
                        className={classNames}
                    />
                </div>
            })}
        </Slider>
    );
};

const Gallery = () => {
    const interiorImgs = [intImg1, intImg2, intImg3, intImg4, intImg5, intImg6, intImg7, intImg8, intImg9, intImg10];
    const exteriorImgs = [extImg1, extImg2, extImg3, extImg4, extImg5, extImg];
    const janteImgs = [janteBefore, janteAfter];

    return (
        <>
            <section className='bg-[#000] relative text-white gallery-container'>
                <div className='flex justify-center items-center h-[7rem] md:h-[10rem] text-[2.2rem]'>Galerie</div>
                <div className='relative'>
                    <div className='relative flex flex-col justify-center h-full lg:w-[80%] xl:w-[60%] mx-auto'>
                        <div className='relative mx-[1rem] '>
                            <h1 className='text-[1.3rem] md:text-[1.7rem] border-b-[0.2rem]'>Interior</h1>
                            <div className='g-decoration'></div>
                        </div>
                        <div className='swiper-container mx-auto mt-[3rem]'>
                            <div className='swiper-div relative mx-auto my-[2rem]'>
                                <Swiper images={interiorImgs} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='relative flex flex-col justify-center h-full lg:w-[80%] xl:w-[60%] mx-auto'>
                        <div className='relative mx-[1rem] '>
                            <h1 className='text-[1.3rem] md:text-[1.7rem] mt-[4rem] border-b-[0.2rem]'>Exterior</h1>
                            <div className='g-decoration mt-[4rem]'></div>
                        </div>
                        <div className='swiper-container mx-auto mt-[3rem]'  >
                            <div className='swiper-div relative mx-auto my-[2rem]'>
                                <Swiper images={exteriorImgs} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='relative flex flex-col justify-center h-full lg:w-[80%] mb-[5rem] xl:w-[60%] mx-auto'>
                        <div className='relative mx-[1rem] '>
                            <h1 className='text-[1.3rem] md:text-[1.7rem]  mt-[4rem] border-b-[0.2rem]'>Vopsit Jante</h1>
                            <div className='g-decoration  mt-[4rem]'></div>
                        </div>
                        <div className='flex flex-col flex-wrap md:flex-row items-center justify-evenly mt-[3rem] swiper-container mx-auto'>
                            {janteImgs.map((img: any, index: number) => {
                                return <div key={index} >
                                    <img src={img} className='w-[23rem] h-[14rem] md:w-[20rem] my-[2rem] px-[0.5rem] rounded-[0.3rem]' key={index} alt="" />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>

    )
}

export default Gallery
