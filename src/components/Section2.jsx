import React from 'react'
import AnimatedSection from './AnimatedSection'

const Section2 = () => {
    return (
        <div className='px-[5rem]'>
            <div className='leading-[2.5rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>OUR SERVICES</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Data + AI services and solutions for real results</h1>
            </div>
            <div className='my-[5rem] flex justify-center'>
                <AnimatedSection />
            </div>
        </div>
    )
}

export default Section2