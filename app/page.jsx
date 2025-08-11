'use client'; // Needed in Next.js to use useState/useEffect

import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
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

      <div className=" min-h-[75vh] bg-[#F5F5F5]  ">


        <div className=" grid grid-cols-2">


          <div className="flex items-center justify-center">

            <h2 className="text-6xl font-bold text-[#073f3f] px-6 text-left ">It is always a match made in heaven with Waju Heavens</h2>
          </div>

          <img
            src={images[index]}
            alt={"Wedding Photos"}
            width={1000}
            height={1000}
            className="w-full  inset-0 h-[75vh] "

          />



        </div>


        <div className="flex gap-4 absolute bottom-10 right-10" >
          <button className=" w-8 h-8 flex justify-center items-center bg-[#073f3f] text-white rounded-full" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className=" w-8 h-8 flex justify-center items-center bg-[#073f3f] text-white rounded-full">
            <FaChevronRight />
          </button>
        </div>




      </div>



      <section className="flex flex-col items-center px-40 gap-10 py-15"  >

        <h1 className="text-5xl text-[#073f3f] ">OUR SERVICES</h1>

        <div className="flex flex-col gap-10 items-center">
          <p>
            Waju Heavens offers complete wedding planning and coordination services — from the first “yes” to the final dance. Whether it’s your bachelor's, your makeup, your venue, or your reception, we handle every detail with elegance and care.
          </p>

          <Link className="bg-[#073f3f]  text-white py-3 px-8 rounded-full " href={"/services"} >View All Services
          </Link>


        </div>

      </section>
    </main>
  );
}
