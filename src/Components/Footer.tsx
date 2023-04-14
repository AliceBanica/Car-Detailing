import React from 'react'
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import address from "../assets/location-ping.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
const Footer = () => {
    return (
        <section className='bg-[#202024] '>
            <div className='flex flex-col lg:flex-row justify-around xl:h-[14rem] w-full lg:w-[80%] xl:w-[60%] mx-auto  text-white py-[3rem] '>
                <div className='flex flex-col md:flex-row md:justify-around md:w-full'>
                    <div className='flex justify-center items-center flex-col w-full mb-[2rem] xl:mb-0'>
                        <img src={address} className="select-none w-[2.5rem] mb-[1rem]" alt="" />
                        <span className='select-none mb-[0.6rem] xl:mb-[1rem] xl:text-[1.5rem]'>Adresa</span>
                        <span className='text-[0.7rem] xl:text-[1rem]'>Baicoi, Str. Dunarii, Nr.4</span>
                    </div>
                    <div className='flex justify-center items-center flex-col w-full mb-[2rem] xl:mb-0'>
                        <img src={phone} className="select-none w-[2.5rem] mb-[1rem]" alt="" />
                        <span className='select-none  mb-[0.6rem] xl:mb-[1rem] xl:text-[1.5rem]'>Telefon</span>
                        <span className='text-[0.7rem] xl:text-[1rem]'>0775 267 631</span>
                    </div>
                    <div className='flex justify-center items-center flex-col w-full mb-[2rem] xl:mb-0' >
                        <img src={email} className="select-none w-[2.5rem] mb-[1rem]" alt="" />
                        <span className='select-none  mb-[0.6rem] xl:mb-[1rem] xl:text-[1.5rem]'>Email</span>
                        <span className='text-[0.7rem] xl:text-[1rem]'>magic.detailing.auto@gmail.com</span>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span className='select-none mb-[1rem] xl:text-[1.5rem]'>Media</span>
                    <div className='flex w-full justify-evenly sm:justify-center'>
                        <a href="https://www.facebook.com/profile.php?id=100069723427756">
                            <img src={facebook} className="w-[4.5rem] xl:w-[4rem] p-[0.5rem] m-0 cursor-pointer " alt="" />
                        </a>
                        <a href="https://www.tiktok.com/@florinvlad214">
                            <img src={tiktok} className="w-[4.5rem] xl:w-[4rem] p-[0.5rem] m-0 cursor-pointer " alt="" />
                        </a>
                        <a href="#">
                            <img src={youtube} className="w-[4.5rem] xl:w-[4rem] p-[0.5rem] m-0 cursor-pointer" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
