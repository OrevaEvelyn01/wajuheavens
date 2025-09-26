'use client'; // Needed in Next.js to use useState/useEffect

import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase.config";

export default function Page() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {

    let reviewArray = []
    const querySnapshot = await getDocs(collection(db, "events"));

    querySnapshot.forEach((doc) => {
      const reviewObject = {
        id: doc.id,
        ...doc.data()
      }
      reviewArray.push(reviewObject)
    });

    reviewArray = reviewArray.sort(() => 0.5 - Math.random()).slice(0, 4);

    setEvents(reviewArray)

  }


  useEffect(() => {

    fetchEvents();



  }, []);



  const images = [
    "white2.jpg",
    "traditional.jpg",
    "slider3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Manual navigation
  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <main >

      <div className=" min-h-[75vh] bg-[#F5F5F5] max-lg:bg-white  ">


        <div className=" grid lg:grid-cols-2">


          <div className="flex items-center justify-center">

            <h2 className="text-6xl font-bold text-[#073f3f] px-6 text-left max-lg:text-4xl max-lg:text-center max-lg:leading-20">It is always a match made in heaven with <span className="underline"> Waju Heavens</span></h2>
          </div>


          <div className=" relative max-lg:row-start-1">
            <img
              src={images[index]}
              alt={"Wedding Photos"}
              width={1000}
              height={1000}
              className="w-full relative max-[450px]:h-[50vh] h-[65vh] lg:h-[75vh]  "

            />
            <div className="flex gap-4 absolute bottom-5 right-10" >
              <button className=" w-10 h-10 flex justify-center items-center bg-[#073f3f] text-white rounded-full" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              <button onClick={nextSlide} className=" w-10 h-10 flex justify-center items-center bg-[#073f3f] text-white rounded-full">
                <FaChevronRight />
              </button>
            </div>

          </div>

        </div>






      </div>


      <div className=' pb-2 text-[#073f3f] '>


        <h2 className='text-5xl font-semibold my-[90px] text-center pt-10 '>Our Services</h2>

        <div className='flex justify-center px-15 ' >
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center'>
            <div className='bg-[rgba(255,255,240,0.64)] shadow-xl space-y-4  py-4 rounded-sm  flex flex-col items-center  ' >
              <img src="eye-shadow.gif" alt="" className="w-16  " />


              <h3 className=' text-xl font-semibold'>Makeup & Styling</h3>

              <p className='px-8 leading-8'>Flawless bridal makeup and styling that highlight natural beauty for the bride and bridal party.</p>
            </div>

            <div className='bg-[rgba(255,255,240,0.64)] shadow-xl space-y-4  py-4 rounded-sm  flex flex-col items-center  ' >
              <img src="tuxedo.gif" alt="" className="w-16  " />


              <h3 className=' text-xl font-semibold'>Groom's Preparation</h3>

              <p className='px-8 leading-8'>Tailored support to ensure the groom and his men are well dressed, confident, and ready.</p>
            </div>

            <div className='bg-[rgba(255,255,240,0.64)] shadow-xl space-y-4  py-4 rounded-sm  flex flex-col items-center  ' >
              <img src="wedding.gif" alt="" className="w-16  " />


              <h3 className=' text-xl font-semibold'>Wedding Ceremonies</h3>

              <p className='px-8 leading-8'>From scared church vows to rich traditional ceremonies, we blend faith, culture, and elegance to make your union unforgettable.</p>
            </div>

            <div className='bg-[rgba(255,255,240,0.64)] shadow-xl space-y-4  py-4 rounded-sm  flex flex-col items-center  ' >
              <img src="wine.gif" alt="" className="w-16  " />


              <h3 className=' text-xl font-semibold'>Reception Planning</h3>

              <p className='px-8 leading-8'>Seamless event flow, decor, music, and entertainment for a joyful and memorable.</p>
            </div>



          </div>

        </div>


        <div className="flex justify-center pt-20">
          <Link className="bg-[#073f3f]  text-white py-3 px-8 rounded-full " href={"/services"} >Learn More
          </Link>
        </div>



      </div>


      <section>

        <div className=' pb-8 text-[#073f3f] '>


          <h2 className='text-5xl font-semibold my-[90px] text-center pt-10 '>What Our Clients Say</h2>

          <div className='flex justify-center px-15 ' >
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center'> {events.map((rev, i) =>(


              <div key={i}
               className='bg-[rgba(255,255,240,0.64)] shadow-xl space-y-4  py-4 rounded-sm  flex flex-col items-center  ' >
                {/* <img src={rev.img} alt="U" className="w-16  " /> */}


               

                <p className='px-8 leading-8'>{rev.testimonial}</p>

                <span className=" text-gray-500 text-sm font italic ">{rev.title}</span>
              </div>

             ))}
            </div>

          </div>


         


        </div>
      </section>

      <section className="flex flex-col items-center px-20 md:px-40 gap-10 pb-15 mt-28"  >

        <h1 className="text-5xl text-[#073f3f] max-lg:text-3xl">About Us</h1>

        <div className="flex flex-col gap-10 items-center">
          <p className="max-lg:text-sm">
            Waju Heavens is more than a wedding planner — we are partners in creating sacred unions that honor tradition and celebrate love. With a passion for excellence and Christian values, we make your big day stress-free and unforgettable.
          </p>

          <Link className="bg-[#073f3f]  text-white py-3 px-8 rounded-full " href={"/services"} >Learn More
          </Link>


        </div>

      </section>

    </main>
  );
}
