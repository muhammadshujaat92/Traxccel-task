import React from 'react'
import img1 from '../../public/imgs/partnerImg1.png'
import img2 from '../../public/imgs/partnerImg2.png'
import img3 from '../../public/imgs/partnerImg3.png'
import img4 from '../../public/imgs/partnerImg4.png'
import img5 from '../../public/imgs/partnerImg5.png'
import img6 from '../../public/imgs/partnerImg6.png'
import Image from 'next/image'

const Section5 = () => {
    return (
        <div className='py-[3rem] px-[5rem]'>
            <div className='leading-[2.5rem] mb-[2rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>OUR PARTNER ECOSYSTEM</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Data + AI services and solutions for real results</h1>
            </div>
            <div className='grid grid-cols-2 gap-[2rem]'>
                <div className='flex gap-[1rem] items-center justify-between'>
                    <div className='w-[20rem] max-w-[20rem]'>
                        <Image className='w-full' src={img1} alt='img' width={400} height={400} />
                    </div>
                    <p className='text-[16px] w-[32rem] font-[300] font-roboto-condensed tracking-[0.12rem] leading-[18px]'>A true partnership experience focused on sharing risks and success on your transformative journey</p>
                </div>
                <div className='flex gap-[1rem] items-center justify-evenly'>
                    <div className='w-[9rem] max-w-[9rem]'>
                        <Image className='w-full' src={img2} alt='img' width={400} height={400} />
                    </div>
                    <p className='text-[16px] w-[24rem] font-[300] font-roboto-condensed tracking-[0.12rem] leading-[18px]'>A true partnership experience focused on sharing risks and success on your transformative journey</p>
                </div>
                <div className='flex gap-[1rem] items-center justify-between'>
                    <div className='w-[25rem] max-w-[25rem]'>
                        <Image className='w-full' src={img3} alt='img' width={400} height={400} />
                    </div>
                    <p className='text-[16px] w-[41rem] font-[300] font-roboto-condensed tracking-[0.12rem] leading-[18px]'>A true partnership experience focused on sharing risks and success on your transformative journey</p>
                </div>
                <div className='flex gap-[1rem] items-center'>
                    <div className='w-[13.5rem] max-w-[13.5rem]'>
                        <Image className='w-full' src={img4} alt='img' width={400} height={400} />
                    </div>
                    <p className='text-[16px] w-[24rem] font-[300] font-roboto-condensed tracking-[0.12rem] leading-[18px]'>A true partnership experience focused on sharing risks and success on your transformative journey</p>
                </div>
                <div className='flex gap-[3rem] items-center justify-evenly'>
                    <div>
                        <Image className='w-full' src={img5} alt='img' width={400} height={400} />
                    </div>
                    <p className='text-[16px] w-[24rem] font-[300] font-roboto-condensed tracking-[0.12rem] leading-[18px]'>A true partnership experience focused on sharing risks and success on your transformative journey</p>
                </div>
                <div className='flex gap-[1rem] items-center'>
                    <div className='w-[13.5rem] max-w-[13.5rem]'>
                        <Image className='w-full' src={img6} alt='img' width={400} height={400} />
                    </div>
                    <p className='text-[16px] w-[24rem] font-[300] font-roboto-condensed tracking-[0.12rem] leading-[18px]'>A true partnership experience focused on sharing risks and success on your transformative journey</p>
                </div>
            </div>
        </div>
    )
}

export default Section5