"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Image sets for different screen sizes
const images = {
  sm: { files: ["/sm-1.png", "/sm-2.png", "/sm-3.png"], width: 768, height: 300 },
  md: { files: ["/md-1.png", "/md-2.png", "/md-3.png"], width: 1280, height: 400 },
  lg: { files: ["/lg-1.png", "/lg-2.png", "/lg-3.png"], width: 1920, height: 500 },
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState(images.lg.files);
  const [imageDimensions, setImageDimensions] = useState({ width: images.lg.width, height: images.lg.height });

  // Function to update images based on screen width
  const updateImages = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      setCarouselImages(images.sm.files);
      setImageDimensions({ width: images.sm.width, height: images.sm.height });
    } else if (width < 1536) {
      setCarouselImages(images.md.files);
      setImageDimensions({ width: images.md.width, height: images.md.height });
    } else {
      setCarouselImages(images.lg.files);
      setImageDimensions({ width: images.lg.width, height: images.lg.height });
    }
  };

  // Detect window resize and update images
  useEffect(() => {
    updateImages(); // Initial check
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

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
  }, [carouselImages]);

  return (
    <div className="relative w-full overflow-hidden flex items-center">
      {/* Image Container */}
      <div
        className="w-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
              width={imageDimensions.width}
              height={imageDimensions.height}
              priority
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 transition flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
          <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 transition flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
