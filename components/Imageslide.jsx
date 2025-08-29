"use client"
import React, {useEffect, useState} from 'react'

const Imageslide = () => {

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
    <div>
       <img
              src={images[index]}
              alt={"Wedding Photos"}
              width={1000}
              height={1000}
              className="w-full relative  h-[75vh]  "

            />
      
    </div>
  )
}

export default Imageslide
