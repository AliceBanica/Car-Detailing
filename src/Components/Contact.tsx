import React from 'react'
import location from "../assets/location-ping.png";
import wapp from "../assets/wapp.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";


const Contact = () => {
    const contactInfo = [[wapp, "0775 267 631"], [email, "magic.detailing.auto@gmail.com"], [location, "Baicoi, Str. Dunarii, Nr.4"]]
    const media = [[facebook, "https://www.facebook.com/profile.php?id=100069723427756"],
    [instagram, "https://www.instagram.com/magicdetailing2021/"],
    [tiktok, "https://www.tiktok.com/@magic.detailing21?lang=en"],
    [youtube, "#"]];

    return (
        <section className='absolute top-0 h-screen w-full bg-contact-img bg-no-repeat bg-cover z-[-1]'>
            <div className='relative container h-screen mx-auto pt-6 pb-6 lg:w-[80%] '>
                <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[80%] lg:left-[70%] xl:left-[80%] lg:w-[30rem] text-white bg-[#140005]/70 rounded-2xl xl:bg-transparent'>
                    <h1 className='ext-[1rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] mb-6 ml-[5%] mt-[3%] xl:ml-0 xl:mt-0'>Magic Detailing</h1>
                    {contactInfo.map((info) => {
                        return <div className="flex items-center my-[2rem] ">
                            <img src={info[0]} alt="contact-img" className="h-[1.2rem] sm:h-[1.5rem] md:h-[1.8rem] lg:h-[2.3rem] ml-[1.8rem] md:ml-[3rem] mr-[1rem] xl:ml-[2rem]" />
                            <span className='text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]'>{info[1]}</span>
                        </div>
                    })}
                    <div className="flex justify-center mt-[2rem]">
                        {media.map((photo) => {
                            return <a href={photo[1]}><img src={photo[0]} alt="" className="h-[1.5rem] sm:h-[2.2rem] md:h-[2.5rem] lg:h-[3rem] xl:h-[3.5rem] mx-[1rem]" /></a>
                        })}
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.7600403097451!2d25.8702481950974!3d45.0346670010254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b252ecc379e0e7%3A0xe2d58e3fd5ee44ab!2zRnVuZMSDdHVyYSBEdW7Eg3JpaSA0LCBCxINpY29pIDEwNTIwMA!5e0!3m2!1sen!2sro!4v1679927170865!5m2!1sen!2sro"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            loading="lazy"
                            title="baicoi-map"
                            className='w-[90%] xl:w-full h-[10rem] md:h-[12rem] lg:h-[15rem] mt-[2rem] ml-[5%] mb-[4%] xl:mb-0 xl:ml-0 rounded-2xl'></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact