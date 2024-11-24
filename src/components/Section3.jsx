import React from 'react'
import img1 from '../../public/imgs/highlightImg1.png'
import img2 from '../../public/imgs/highlightImg2.png'
import img3 from '../../public/imgs/highlightImg3.png'
import Image from 'next/image'

const Section3 = () => {
    return (
        <div className='mt-[20rem]'>
            <div className='leading-[2.5rem] px-[3rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>OUR RECENT CUSTOMER HIGHLIGHTS</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Breaking silos, optimize potential, and scale securely</h1>
            </div>
            <div className='grid grid-cols-2 px-[5rem] gap-[2rem] my-5'>
                <div className='bg-[#D9D9D9] px-[3rem] py-[1rem]'>
                    <h1 className='font-roboto-condensed text-[24px] font-bold tracking-[0.3rem]'>Data enablement</h1>
                    <Image className='my-[1rem]' src={img1} alt='img' width={500} height={500} />
                    <p className='font-roboto-condensed font-[300] text-[16px] tracking-[0.15rem] leading-[1.2rem] mt-[2rem]'>A true partnership experience focused on sharing risks and success on your transformative journey A true partnership experience focused on sharing risks</p>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <div className='bg-[#D9D9D9] px-[2rem] py-[1rem]'>
                        <h1 className='font-roboto-condensed text-[24px] font-bold tracking-[0.3rem]'>Hybrid DE Pods</h1>
                        <div className='flex mt-2'>
                            <Image src={img2} alt='img' width={200} height={200} />
                            <p className='font-roboto-condensed font-[300] px-[2rem] text-[16px] tracking-[0.15rem] leading-[1.2rem]'>A true partnership experience focused on sharing risks and success on your transformative journey A true partnership experience focused on sharing risks</p>
                        </div>
                    </div>
                    <div className='bg-[#D9D9D9] px-[2rem] py-[1rem]'>
                        <h1 className='font-roboto-condensed text-[24px] font-bold tracking-[0.3rem]'>Data+AI Change Management</h1>
                        <div className='flex mt-2'>
                            <Image src={img3} alt='img' width={200} height={200} />
                            <p className='font-roboto-condensed font-[300] px-[2rem] text-[16px] tracking-[0.15rem] leading-[1.2rem]'>A true partnership experience focused on sharing risks and success on your transformative journey A true partnership experience focused on sharing risks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3