
"use client"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const page = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_olqljsh', 'template_hus61wl', form.current, {
        publicKey: 'Axxex7S3SP2H1IVfj',
      })
      .then(
        (result) => {
          e.target.reset()
        },
        (error) => {
        },
      );
  };

  return (
    <div className=' bg-linear-to-bl from-[#073f3f] to-[#fffff0] min-h-dvh flex flex-col  items-center justify-center gap-10 py-15'>

      <div className='flex flex-col  gap-7 items-center p-10'>
        <h1 className='text-5xl font-semibold'>Get in Touch </h1>
        <p>We will turn your fantasies into a reality.
          With  Wajuheavens you can experience what a wedding in heaven feels like.
        </p>
      </div>



      <div className='shadow-lg rounded-lg w-[80%]  max-[970px]:w-[98%] flex items-center md:justify-center bg-[#fffff0]'>
        <div className=' flex flex-col md:grid md:grid-cols-3  rounded-lg text-[#Fffff0] text-sm  max-md:w-[100vw] justify-center'>

          <div className='flex  flex-col gap-7 bg-[#073f3f] m-2 rounded-lg p-7 '>

            <div className='flex flex-col gap-4'>

              <h2 className='text-2xl font-semibold pt-5'>Contact Information</h2>

              <p>We are here to give our clients top tier events</p>
            </div>

            <div className=' flex  gap-4 items-center'>

              <FaPhoneAlt className='text-[#Fffff0]' />

              <div className='flex flex-col'>
                <span> +2349044639999</span>
                <span> +2349902746849</span>
              </div>
            </div>


            <div className=' flex  gap-4 items-center'>

              <IoMdMail className='text-[#Fffff0] ' />

              <span> Wajuheavens@gmail.com</span>
            </div>

            <div className=' flex  gap-4 items-center'>
              <IoLocationSharp />
              <span>Kubwa, Abuja</span>
            </div>
          </div>



          <div className='md:col-span-2 text-black'>

            <form ref={form} onSubmit={sendEmail} className='w-[95%] flex flex-col justify-center py-10 px-14 gap-10'>

              <div className='grid md:grid-cols-2 gap-10 '>

                <div className='flex flex-col gap-1'>
                  <label htmlFor="names" > Your Name</label>
                  <input type="text" id="names" placeholder='Your name' className=' outline-none border-0 border-b-1 w-full placeholder:text-base ' name="user_name" />
                </div>

                <div className='flex flex-col gap-1'>
                  <label htmlFor="emails" > Your Email</label>
                  <input type="email" id="emails" placeholder='email@example.com' className=' outline-none border-0 border-b-1 w-full placeholder:text-base ' name="user_email"/>
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="subect" >Subject</label>
                <input type="text" id="subject" className=' outline-none border-0 border-b-1 w-full placeholder:text-base ' name="user_phone" /> 
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="message" > Message</label>
                <textarea name="message" id="message" placeholder='Write your message' className=' outline-none border-0 border-b-2 border-b-[#073f3f] w-full placeholder:text-base ' ></textarea>
              </div>


              <button type="submit" className='px-6 py-3 text-[#fffff0] rounded-md bg-[#073f3f]'> Send Message</button>


            </form>

          </div>

        </div>
      </div>




    </div>
  )
}

export default page
