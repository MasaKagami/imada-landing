"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/carousel1.webp",
  "/carousel2.webp",
  "/ad3.png"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full sm:h-[500px] overflow-hidden flex items-center">
        {/* Images */}
        <div 
            className="h-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {carouselImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
                    <Image 
                    src={image} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-full object-contain sm:object-cover"
                    width={1920}  // Full screen width
                    height={500}   // Set height explicitly
                    />
                </div>
            ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 transition flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>        
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 transition flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
    </div>
  );
};

export default Carousel;
