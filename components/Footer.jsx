import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <main className='bg-[#073f3f] p-10  flex flex-col gap-20  justify-between text-white'>

            <Link href={"/"} className='flex gap-5 items-center' >

              <Image src={"/waju2.png"} alt="logo" width={1000} height={1000} className="w-8 h-8" />

                <p className='text-4xl  font-semibold max-lg:text-2xl'> WajuHeavens</p>
            </Link >

            <div className='flex flex-col md:flex-row md:items-center justify-between gap-5 '>
                <p> &copy; WajuHeavens. All rights reserved.</p>

                <div className='grid grid-cols-4 gap-x-3 items-start '>
                    <Link href={"#"} className='text-sm  hover:underline hover:text-[#c8ad82] transition-all duration-100'>About Us</Link>
                    <Link href={"#"} className='text-sm  hover:underline hover:text-[#c8ad82] transition-all duration-100'>Chat with Us</Link>
                    <Link href={"#"} className='text-sm  hover:underline hover:text-[#c8ad82] transition-all duration-100'>Privacy Policy</Link>
                    <Link href={"#"} className='text-sm  hover:underline hover:text-[#c8ad82] transition-all duration-100'>Terms of Service</Link>

                </div>
            </div>
        </main>
    )
}

export default Footer
