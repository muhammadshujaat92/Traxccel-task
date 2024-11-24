import React from 'react'

const Section6 = () => {
    return (
        <div className='py-[3rem] px-[5rem]'>
            <div className='leading-[2.5rem] mb-[2rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>FAQS</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Our answers to your questions</h1>
            </div>
            <div className='flex flex-col gap-[1.5rem] px-[2rem]'>
                <div className='bg-[#D9D9D9] w-full h-[3rem] flex justify-end items-center pe-[2rem]'>
                    <div className="faqShape w-[2rem] h-[2rem]"></div>
                </div>
                <div className='bg-[#D9D9D9] w-full h-[3rem] flex justify-end items-center pe-[2rem]'>
                    <div className="faqShape w-[2rem] h-[2rem]"></div>
                </div>
                <div className='bg-[#D9D9D9] w-full h-[3rem] flex justify-end items-center pe-[2rem]'>
                    <div className="faqShape w-[2rem] h-[2rem]"></div>
                </div>
                <div className='bg-[#D9D9D9] w-full h-[3rem] flex justify-end items-center pe-[2rem]'>
                    <div className="faqShape w-[2rem] h-[2rem]"></div>
                </div>
            </div>
            <div className='leading-[2.5rem] my-[2rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>WAY FORWARD</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Have we impressed you so far?</h1>
            </div>
            <div className='flex justify-center items-center gap-[2rem]'>
                <button className='bg-[#3F005C] text-white w-[18rem] py-[1rem] rounded-md'>Book consultation with us</button>
                <button className='bg-[#3F005C] text-white w-[18rem] py-[1rem] rounded-md'>Book our product demo</button>
            </div>
        </div>
    )
}

export default Section6