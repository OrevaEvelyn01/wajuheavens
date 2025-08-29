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
              className="w-full relative  h-[75vh]  "

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



      <section className="flex flex-col items-center px-40 gap-10 py-15 mt-28"  >

        <h1 className="text-5xl text-[#073f3f] max-lg:text-3xl">OUR SERVICES</h1>

        <div className="flex flex-col gap-10 items-center">
          <p className="max-lg:text-sm">
            Waju Heavens offers complete wedding planning and coordination services — from the first “yes” to the final dance. Whether it’s your bachelor's, your makeup, your venue, or your reception, we handle every detail with elegance and care.
          </p>

          <Link className="bg-[#073f3f]  text-white py-3 px-8 rounded-full " href={"/services"} >View All Services
          </Link>


        </div>

      </section>
      <section className="flex flex-col items-center px-40 gap-10 pb-15 mt-28"  >

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
