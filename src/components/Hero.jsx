import React from 'react'
import heroImg from '../../public/imgs/heroImg.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='h-[55rem] relative mb-[4rem]'>
            <div className='h-[85vh] 2xl:h-[38rem] flex justify-center' style={{ background: 'linear-gradient(0deg, #403557 0%, #8B74BD 100%)' }}>
                <div className='w-full max-w-[1500px] flex justify-between pt-[3.5rem] ps-[4rem] pe-[5rem]'>
                    <div className='text-white flex flex-col gap-[3rem]'>
                        <h1 className='text-[70px] w-[50rem] font-roboto-condensed font-semibold leading-[82.03px]'>Dive into the Age of With with data+AI for accelerated insights</h1>
                        <div className='flex items-center gap-4'>
                            <button className='bg-[#3F005C] text-white rounded-md border-[1px] hover:bg-[#EC221F] border-white py-4 w-[180px]'>Learn more</button>
                            <button className='bg-[#3F005C] text-white rounded-md border-[1px] hover:bg-[#EC221F] border-white py-4 w-[180px]'>Book a Consultation</button>
                        </div>
                    </div>
                    <div>
                        <Image className='w-auto h-auto' src={heroImg} width={400} height={400} alt='img' />
                    </div>
                </div>
            </div>
            <div className="flex justify-center absolute top-[30rem] w-full">
                <div className="bg-[#7953A9] w-[60rem] text-white border-[1px] border-white py-[3rem] px-[4rem]">
                    <div className='font-roboto-condensed leading-[55px] w-[35rem] font-medium mb-[2rem]'>
                        <h1 className='text-white text-[40px] tracking-[0.5rem]'>DATA+AI</h1>
                        <h1 className='text-[60px] tracking-[0.5rem] font-[900] bg-gradient-to-tl from-white via-white to-[#999999] bg-clip-text text-transparent'>PARTNER IN YOUR JOURNEY </h1>
                    </div>
                    <p className='font-roboto-condensed text-[23px] leading-[2rem]'>We envision and deliver data+AI solutions and products for energy & industrials companies to help them drive revenue growth, cost reduction, etc. We envision and deliver data+AI solutions and products for energy & industrials companies to help them drive revenue growth, cost reduction, etc.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero