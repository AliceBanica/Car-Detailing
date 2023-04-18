import React from 'react'

const Prices = () => {
    let interior = [["scaun fd", "10 lei"], ["bord", "100 lei"], ["presuri", "20 lei"]];
    let exterior = [["ceara", "10 lei"], ["polish", "100 lei"], ["usi", "20 lei"]];
    let canapele = [["2 locuri", "10 lei"], ["3 locuri", "100 lei"], ["coltar", "20 lei"]];

    return (
        <section className='absolute top-0 h-full w-full bg-prices-img bg-no-repeat bg-cover bg-fixed z-[-1]'>
            <div className='relative container h-screen mx-auto pt-6 pb-2 lg:w-[50%] '>
                <div className='absolute flex flex-col top-1/2 -translate-y-1/2 w-full lg:w-full md:mt-[10%] lg:mt-[10%] xl:mt-[5%] text-white bg-[#B0B7C0]/10 rounded-2xl'>

                    <div className='flex justify-center mt-4 mb-2 text-[1.2rem] ext-[1rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem]' id="prices-title">Preturi</div>
                    <div className='flex justify-center w-[90%] ml-[5%] lg:w-[80%] lg:ml-[10%] mb-[2%]' id="prices-container">
                        <div className='w-full'>
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[2rem]'>Interior</h1>
                            {interior.map((service, index) => {
                                return <div className='t-prices mt-1 text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]' key={index}>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[2rem]'>Exterior</h1>
                            {exterior.map((service, index) => {
                                return <div className='t-prices mt-1 text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]' key={index}>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.4rem] md:text-[1.4rem] lg:text-[2rem]'>Canapele</h1>
                            {canapele.map((service, index) => {
                                return <div className='t-prices mt-1 text-[0.8rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.7rem]' key={index}>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Prices
