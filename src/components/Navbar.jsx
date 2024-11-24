import React from 'react'
import logo from '../../public/imgs/logo.png'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <nav className='w-full max-w-[1500px] flex items-center justify-between px-[3rem] py-[1rem]'>
                <Image src={logo} width={160} height={160} alt='logo' />
                <div className='flex items-center w-[65%]'>
                    <ul className='flex items-center w-full justify-evenly'>
                        <li className='text-[#EC221F] cursor-pointer'>What we do?</li>
                        <li className='active:text-[#EC221F] cursor-pointer'>How we do?</li>
                        <li className='active:text-[#EC221F] cursor-pointer'>Impacts</li>
                        <li className='active:text-[#EC221F] cursor-pointer'>axlACADEMY</li>
                        <li className='active:text-[#EC221F] cursor-pointer'>axlINSIGHTS</li>
                        <li className='active:text-[#EC221F] cursor-pointer'>About us</li>
                    </ul>
                    <button className='ms-[5rem] bg-[#3F005C] text-white p-2 px-[1.5rem] rounded-md hover:bg-[#EC221F]'>Contact</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar