import React from 'react'

const Prices = () => {
    let interior = [["Tapiterie", "100 lei"], ["Bord", "50 lei"], ["Usi", "30 lei"]];
    let exterior = [["Polish faruri", "250 lei"], ["Polish exterior", "120 lei"], ["Ceara", "100 lei"]];
    let jante = [["Curatat", "50 lei"], ["Vopsit", "200 lei"]];

    return (
        <section className='absolute top-0 h-full w-full bg-prices-img bg-no-repeat bg-cover bg-fixed z-[-1]'>
            <div className='relative container h-screen mx-auto pt-6 pb-2 lg:w-[50%] '>
                <div className='absolute flex flex-col top-1/2 -translate-y-1/2 w-full lg:w-full md:mt-[10%] lg:mt-[10%] xl:mt-[5%] text-white bg-[#B0B7C0]/10 rounded-2xl'>

                    <div className='flex justify-center mt-4 mb-2 text-[1.2rem] ext-[1rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem]' id="prices-title">Preturi</div>
                    <div className='flex justify-center w-[90%] ml-[5%] lg:w-[80%] lg:ml-[10%] mb-[2%]' id="prices-container">
                        <div className='w-full'>
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.5rem]'>Interior</h1>
                            {interior.map((service, index) => {
                                return <div className='t-prices mt-[0rem] text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]' key={index}>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.5rem]'>Exterior</h1>
                            {exterior.map((service, index) => {
                                return <div className='t-prices mt-0 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]' key={index}>
                                    <span className='t-service'>{service[0]}</span>
                                    <span className='t-dots'></span>
                                    <span className='t-price'>{service[1]}</span>
                                </div>
                            })}
                            <h1 className='mt-1 mb-2 text-[1rem] ext-[1rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.5rem]'>Jante</h1>
                            {jante.map((service, index) => {
                                return <div className='t-prices mt-0 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]' key={index}>
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
