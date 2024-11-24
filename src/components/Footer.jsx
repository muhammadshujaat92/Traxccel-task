import React from 'react'
import logo from '../../public/imgs/logo.png'
import facebook from '../../public/imgs/Facebook.png'
import linkdein from '../../public/imgs/Linkedin.png'
import instagram from '../../public/imgs/Instagram.png'
import twitter from '../../public/imgs/Twitter.png'
import Image from 'next/image'
import MaxWidth from './MaxWidth'

const Footer = () => {
    return (
        <MaxWidth>
            <div className='flex justify-between px-[5rem] py-[2rem] border-t-[2px]'>
                <div>
                    <Image src={logo} alt='logo' width={150} height={150} />
                    <p>(832) 830-6312</p>
                    <p>Info@traxccel.com</p>
                    <p>1400 Broadfield Blvd, Ste. 650</p>
                    <p>Houston, TX 77084</p>
                </div>
                <div className='grid grid-cols-4'>
                    <div>
                        <button className='bg-[#3F005C] text-white rounded-md p-1'>Submit for RFP</button>
                        <ul>
                            <li>What we do?</li>
                            <li>How we do?</li>
                            <li>Impacts</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div>
                        <p>axIACADEMY</p>
                        <p>axINSIGHTS</p>
                        <p>axISTUDIO</p>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <input className='border-[2px] p-2' type="text" placeholder='Subscribe to our newsletter' />
                        </div>
                        <div className='mb-3'>
                            <input className='border-[2px] p-2' type="email" placeholder='Email' />
                        </div>
                        <button className='bg-[#3F005C] text-white p-1 rounded-md'>Submit</button>
                    </div>
                    <div className='flex flex-col items-end'>
                        <Image src={linkdein} alt='linkdein' width={50} height={50} />
                        <Image src={facebook} alt='facebook' width={50} height={50} />
                        <Image src={twitter} alt='twitter' width={50} height={50} />
                        <Image src={instagram} alt='instagram' width={50} height={50} />
                    </div>
                </div>
            </div>
        </MaxWidth>
    )
}

export default Footer