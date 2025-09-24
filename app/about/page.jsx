import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main>
            <div className='relative'>
                <div className=' lg:bg-[#fffff0]  grid lg:grid-cols-2 '>
                    <div>

                        <img src="https://i.pinimg.com/736x/a8/0a/92/a80a921e06e3eeb7bd6f8389e5af1f4a.jpg" alt=" wedding image" className=' lg:h-[90vh] max-lg:h-[70vh] w-full'
                        />
                    </div>
                    
                    <div className='z-40  p-13 max-lg:absolute  max-lg:top-18 lg:place-content-center max-lg:text-[#fffff4a3] '>
                        <h1 className='text-7xl  max-md:text-3xl font-semibold text-center   lg:text-left '>About Us</h1>

                        <h2 className='text-5xl max-md:text-xl font-semibold mt-[120px] mb-[70px] lg:mt-[70px] max-md:mt-[30px] max-md:mb-[30px] text-center lg:text-left'>Who We Are</h2>

                        <p className='text-[17px] max-md:text-sm text- text-center lg:text-left ' >Waju Heavens is more than a wedding planner - we are storytellers of love. With a deep passion for creating sacred unions , we blend Christian values , creativity, and professionalism to design unforgettable weddings that reflect both your faith  and youur unique style.</p>
                    </div>
                </div>

            </div>


            <div className='bg-[#073f3f] pb-50 '>


                <h2 className='text-4xl font-semibold my-[90px] text-center pt-40 text-[#fffff0a3]'>Why Choose WajuHeavens</h2>

                <div className='flex justify-center px-15 ' >
                    <div className='grid gap-10 lg:grid-cols-4 text-center'>
                        <div className='bg-[#fffff0a3] space-y-4  py-4 rounded-sm  ' >
                            <h2 className=' text-2xl font-bold'>1</h2>

                            <h3 className=' text-xl font-semibold'>Faith-Centered</h3>

                            <p className='px-8 leading-8'>Every detail is crafted to honor Christian values while celebrating love</p>
                        </div>

                        <div className='bg-[#fffff0a3] space-y-4  py-4  rounded-sm' >
                            <h2 className=' text-2xl font-bold'>2</h2>

                            <h3 className=' text-xl font-semibold'>Personalized Touch</h3>

                            <p className='px-8 leading-8'>From the first consultation to your big day, we tailor every element to your story</p>
                        </div>

                        <div className='bg-[#fffff0a3] space-y-4   py-4 rounded-sm' >
                            <h2 className=' text-2xl font-bold'>3</h2>

                            <h3 className=' text-xl font-semibold'>Full-Service Planning</h3>

                            <p className='px-8 leading-8'>Venue, decor, makeup, bridal shower, catering, music, and more ,all handled seemlessly</p>
                        </div>

                        <div className='bg-[#fffff0a3] space-y-4  py-4 rounded-sm ' >
                            <h2 className=' text-2xl font-bold'>4</h2>

                            <h3 className=' text-xl font-semibold'>Experience You Can Trust</h3>

                            <p className='px-8 leading-8'>Years of planning, countless happy couples, and a commitment to excellence</p>
                        </div>

                    </div>
                </div>


            </div>

            <div className='flex flex-col items-center mb-[40px]'>

                <h2 className='text-4xl font-bold my-[40px] text-center pt-10 text-black'>Our Vision </h2>

                <p className='w-[80%] '> Our vision is to become Nigeria's most trusted Christian wedding planning company and a global name in faith-inspired events. We encision  a future wher every couple can say their wedding reflected both their love story and their values . By blending tradition with modern elegance, and faith with creativity, we aim to set a new standard in weddings that inspire communities , strengthen marriages , and glorify God in every detail. Ultimately, our vision is to transform wedding celebrations into testimonies of love, grace , and faith for generations to come</p>
            </div>


            <div className='flex flex-col items-center mb-[40px]'>

                <h2 className='text-4xl font-bold my-[40px] text-center pt-10 text-black'>Our Mission </h2>

                <p className='w-[80%] '> At Waju Heavens, our mission is to craft weddings that honor God, celebrate love, and strengthen families. We believe marriage is more than a ceremony. it is a covenant before God. With this conviction, we strive to design unforgettable experiences that reflect each couple’s faith, personality, and culture. From planning and coordination to décor, music, and hospitality, our mission is to take away the stress of logistics so our couples can focus on the joy of beginning their forever journey. We exist to create moments that not only look beautiful but carry deep meaning, lasting memories, and divine inspiration.</p>
            </div>

            <div className='flex flex-col items-center bg-black  py-30 lg:px-70 text-center space-y-10'>
                <p className='text-[#fffff0] lg:text-lg '>Your dream wedding begins with a single step. Let Waju Heavens guide you to a celebration that feels heavenly.</p>

                <Link href={"/contact"} className='bg-[#073f3f] text-[#fffff0] px-5 py-3 rounded-md hover:text-[#073f3f] hover:bg-[#fffff0] transition-colors duration-300 '>Contact Us  </Link>
            </div>
        </main>
    )
}

export default page
