import React from 'react'

const Section4 = () => {
    const data1 = [
        {
            heading: "Supply Chain",
            paragraph: "A rapid assessment of your current data+AI landscape to identify opportunities across the value chain"
        },
        {
            heading: "Sales",
            paragraph: "Data+AI solutions with adaptable frameworks, designed to evolve with your dynamic business needs"
        },
        {
            heading: "Asset Management",
            paragraph: "Product-enabled delivery model expedites your project life-cycle with a core focus on efficiency and quality"
        },
    ]

    const data2 = [
        {
            heading: "Operations",
            paragraph: "Minimize disruption and seamless transition strategy ensures your transformation journey remains smooth"
        },
        {
            heading: "Engineering",
            paragraph: "A true partnership experience focused on sharing risks and success on your transformative journey"
        },
        {
            heading: "Finance",
            paragraph: "Deep industry insights fortified by extensive domain knowledge ensure alignment with your needs and intricacies"
        },
        {
            heading: "Trading",
            paragraph: "Deep industry insights fortified by extensive domain knowledge ensure alignment with your needs and intricacies"
        },
        {
            heading: "Capital Projects",
            paragraph: "Deep industry insights fortified by extensive domain knowledge ensure alignment with your needs and intricacies"
        },
    ]

    return (
        <div className='py-[3rem] px-[3rem]'>
            <div className='leading-[2.5rem]'>
                <h1 className='font-roboto-condensed text-[32px] font-[900] tracking-[0.4rem]'>OUR DEPTH</h1>
                <h1 className='text-[#35A8E1] font-roboto-condensed text-[40px] font-[600] tracking-[0.4rem]'>Data + AI services and solutions for real results</h1>
            </div>
            <div className='flex justify-between pt-[3rem]'>
                <div className='w-[15rem] flex items-center'>
                    <h1 className='font-roboto-condensed font-semibold text-[24px] leading-[1.5rem] tracking-[0.3rem]'>PRIMARY FUNCTIONS</h1>
                    <span className='font-bold text-[20px]'>{'>>>'}</span>
                </div>
                <div className="flex justify-between gap-[2rem]">
                    {
                        data1.map((items, index) => (
                            <div key={index} className='bg-[#D9D9D9] rounded-2xl py-[1.5rem] px-[2rem] w-[16rem] h-[13rem]'>
                                <h1 className='font-roboto-condensed font-semibold text-[24px] leading-[1.5rem] tracking-[0.3rem] mb-5'>{items.heading}</h1>
                                <p className='font-roboto-condensed tracking-[0.15rem] leading-[1rem] text-[16px] font-[300]'>{items.paragraph}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='grid grid-cols-6 pt-[3rem] gap-[15rem]'>
                <div className='w-[15rem] flex items-center'>
                    <h1 className='font-roboto-condensed font-semibold text-[24px] leading-[1.5rem] tracking-[0.3rem]'>SECONDARY FUNCTIONS</h1>
                    <span className='font-bold text-[20px]'>{'>>>'}</span>
                </div>
                <div className="col-span-5 grid grid-cols-5 gap-[1.5rem]">
                    {
                        data2.map((items, index) => (
                            <div key={index} className='bg-[#D9D9D9] rounded-2xl py-[1.5rem] px-[1rem] h-[15rem]'>
                                <h1 className='font-roboto-condensed font-semibold text-[24px] leading-[1.5rem] tracking-[0.3rem] mb-5'>{items.heading}</h1>
                                <p className='font-roboto-condensed tracking-[0.15rem] leading-[1rem] text-[16px] font-[300]'>{items.paragraph}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section4