import React from 'react'
import bord from "../assets/Picture3.jpg";
import seats from "../assets/Picture5.jpg"
const DetailingInterior = () => {
    return (
        <section className=''>
            <div className=' h-screen w-full bg-interior-img bg-no-repeat bg-cover z-[-1]'>
                <div className='flex justify-center content-center h-[80%] pt-[50%] sm:pt-[60%]'>
                    <div className='flex flex-col justify-center content-center md:grid grid-cols-2 gap-y-[3rem] gap-x-[2rem] place-content-center w-full lg:w-[80%] xl:w-[50%] mx-auto   text-white'>
                        <div className='relative flex justify-center'><h1 className=' title-page lg:text-[2.2rem]'>Detailing Interior</h1></div>
                        <div className='pt-[2rem] text-justify '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores velit. Quidem commodi necessitatibus atque ad dolorem nam soluta velit laudantium! Qui neque placeat vitaelorem nostrum ab voluptatem enim veritatis?</div>
                        <div ><img className='h-[80%] w-[80%] ml-[10%]  rounded' src={bord} alt="" /></div>
                        <div><img className='h-[80%] w-[80%] ml-[10%] rounded' src={seats} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen bg-red-100 '>
                <div className='flex flex-col justify-center content-center h-full lg:w-[50%] mx-auto'>
                    <div className='flex flex-col-reverse md:flex-row md:mb-[6rem]'>
                        <div className='flex flex-1 flex-row ml-[10%] md:ml-[5%] mt-[2rem] md:mt-0 '>
                            <div className='h-[10rem] w-[45%] md:w-[100%] border-2 border-red-600'>BEFORE</div>
                            <div className='h-[10rem] w-[45%] md:w-[100%] border-2 border-red-600'>AFTER</div>
                        </div>
                        <div className='flex flex-1 flex-col justify-center mt-[6rem] ml-[5%] mr-[5%] md:mt-0'>
                            <h1 className='text-[1.5rem] mb-[2rem]'>Cea mai buna parte?</h1>
                            <p className='text-justify'>Este rapid si nu foarte costisitor. Te vom scapa de murdaria acumulata in timp cu usurinta.</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row'>
                        <div className='flex flex-1 flex-col justify-center mt-[6rem] ml-[5%] mr-[5%]'>
                            <h1 className='text-[1.5rem] mb-[2rem]'>Bordul este prafuit si murdar?</h1>
                            <p className='text-justify'>Ne ocupam noi. Oferim servicii de curatare detaliata care te scapa de murdaria nedorita.</p>
                        </div>
                        <div className='flex flex-1 flex-row ml-[10%] md:ml-0 mt-[2rem] md:mt-[6rem] md:mr-[5%]'>
                            <div className='h-[10rem] w-[45%] md:w-[100%] border-2 border-red-600'>BEFORE</div>
                            <div className='h-[10rem] w-[45%] md:w-[100%] border-2 border-red-600'>AFTER</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailingInterior