import React from 'react'

const Prices = () => {
    let interior = [["scaun fd", "10 lei"], ["bord", "100 lei"], ["presuri", "20 lei"]];
    let exterior = [["ceara", "10 lei"], ["polish", "100 lei"], ["usi", "20 lei"]];
    let canapele = [["2 locuri", "10 lei"], ["3 locuri", "100 lei"], ["coltar", "20 lei"]];

    return (
        <section className='absolute top-0 h-screen w-full bg-prices-img bg-no-repeat bg-cover  z-[-1]'>
            <div className='relative container h-screen mx-auto pt-6 pb-2 lg:w-[50%] '>
                <div className='absolute flex flex-col top-1/2 -translate-y-1/2 w-full lg:w-full md:mt-[10%]  lg:mt-[10%] text-white bg-[#B0B7C0]/10 rounded-2xl'>
                    <div className='flex justify-center mt-4 mb-2 text-[1.2rem] ext-[1rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem]'>Preturi</div>
                    {/* <div className='flex w-full lg:flex-row'> */}
                    <div className='flex justify-center w-[90%] ml-[5%] lg:w-[80%] lg:ml-[10%] mb-[2%]'>
                        <div className='w-full'>
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[2rem]'>Interior</h1>
                            {interior.map((service) => {
                                return <div className='t-prices mt-1 text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]'>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[2rem]'>Exterior</h1>
                            {exterior.map((service) => {
                                return <div className='t-prices mt-1 text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]'>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[2rem]'>Canapele</h1>
                            {canapele.map((service) => {
                                return <div className='t-prices mt-1 text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]'>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}

                        </div>
                        {/* </div> */}

                        {/* <div className='relative flex flex-col w-[90%] ml-[5%] lg:w-[80%] mb-6 py-6 rounded bg-[#B0B7C0]/30'>
                            <p className='flex justify-center'>Tapiterie + Interior Complet </p>
                            <span className='flex justify-center'>sau</span>
                            <p className='flex justify-center'>Interior Complet + Polish Faruri</p>
                            <p className='absolute -bottom-4 right-10 px-4 py-1 rounded italic tracking-wide font-bold bg-[#171710]/70'>470 lei</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices
