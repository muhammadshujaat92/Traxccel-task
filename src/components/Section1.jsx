import Image from 'next/image'
import React from 'react'
import img1 from '../../public/imgs/clientImg1.png'
import img2 from '../../public/imgs/clientImg2.png'
import img3 from '../../public/imgs/clientImg3.png'
import img4 from '../../public/imgs/clientImg4.png'
import img5 from '../../public/imgs/clientImg5.png'
import img6 from '../../public/imgs/clientImg6.png'

const Section1 = () => {
    const sectionData = [
        {
            heading: "ZERO-COST ASSESSMENT",
            paragraph: "A rapid assessment of your current data+AI landscape to identify opportunities across the value chain",
            image: img1
        },
        {
            heading: "MODERN, FLEXIBLE SOLUTIONS",
            paragraph: "Data+AI solutions with adaptable frameworks, designed to evolve with your dynamic business needs",
            image: img2
        },
        {
            heading: "ACCELERATED DELIVERY",
            paragraph: "Product-enabled delivery model expedites your project life-cycle with a core focus on efficiency and quality",
            image: img3
        },
        {
            heading: "MINIMIZE CHANGE IMPACTS",
            paragraph: "Minimize disruption and seamless transition strategy ensures your transformation journey remains smooth",
            image: img4
        },
        {
            heading: "SHARED RISKS & SUCCESSES",
            paragraph: "A true partnership experience focused on sharing risks and success on your transformative journey",
            image: img5
        },
        {
            heading: "DEEP DOMAIN EXPERTISE",
            paragraph: "Deep industry insights fortified by extensive domain knowledge ensure alignment with your needs and intricacies",
            image: img6
        },
    ]
    return (
        <div className='px-[5rem]'>
            <div className='leading-[2.5rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>HOW WE GENERATE VALUE FOR OUR CLIENTS</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Breaking silos, optimize potential, and scale securely</h1>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-y-[4rem] gap-x-[2rem] my-[5rem]'>
                {
                    sectionData.map((items, index) => (
                        <div key={index} className='flex gap-[1rem]'>
                            <div className='w-[8rem] h-[8rem]'>
                                <Image className='w-full h-full' src={items.image} alt='img' width={100} height={100} />
                            </div>
                            <div className='w-[15rem]'>
                                <h1 className='font-semibold text-[24px] tracking-[0.2rem] font-roboto-condensed leading-[1.5rem]'>{items.heading}</h1>
                                <p className='font-[300] text-[17px] font-roboto-condensed leading-[1.3rem] tracking-[0.15rem]'>{items.paragraph}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section1