"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Imada Seasons Safe Oil", image: "/imada-1.webp", url: "/product/1" },
  { id: 2, name: "Imada Seasons Safe Oil", image: "/imada-2.webp", url: "/product/2" },
  { id: 3, name: "Imada Red Flower Oil", image: "/imada-3.webp", url: "/product/3" },
  { id: 4, name: "Imada Hotdrug Oil", image: "/imada-4.webp", url: "/product/4" },
  { id: 5, name: "Imada Sze Chi Healing Oil", image: "/imada-5.webp", url: "/product/5" },
  { id: 6, name: "Imada Gold Dragon Oil", image: "/imada-6.webp", url: "/product/6" },
  { id: 7, name: "Snake Porous Capsicum Plaster", image: "/imada-7.webp", url: "/product/7" },
];

export default function Carousel({ currentProductId }: { currentProductId: number }) {
  const filteredProducts = products.filter((p) => p.id !== currentProductId);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <div className="flex w-full flex-col pt-6">
      <h1 className="text-2xl font-bold mb-4">Other Products</h1>
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 transition flex justify-center items-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>        
        </button>

        {/* Products Container web*/}
        <div className="w-full sm:flex hidden transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 25}%)` }}>
          {filteredProducts.concat(filteredProducts).map((product, index) => (
            <div key={index} className="w-1/4 flex-shrink-0 p-4">
              <div className="border border-gray-300 p-4 flex flex-col items-center">
                <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-lg" />
                <p className="font-medium mt-2 text-center">{product.name}</p>
                <Link href={product.url}>
                  <button className="bg-red-600 text-white text-center rounded-lg py-2 px-4 font-medium hover:bg-red-700 transition duration-100 mt-2">
                    Check Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Products Container mobile*/}
        <div className="w-full flex sm:hidden transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 50}%)` }}>
          {filteredProducts.concat(filteredProducts).map((product, index) => (
            <div key={index} className="w-1/2 flex-shrink-0 p-2">
              <div className="border border-gray-300 p-4 flex flex-col items-center">
                <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-lg" />
                <p className="font-medium mt-1 text-sm text-center">{product.name}</p>
                <Link href={product.url}>
                  <button className="text-sm bg-red-600 text-white text-center rounded-lg py-2 px-4 font-medium hover:bg-red-700 transition duration-100 mt-2">
                    Check Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 transition flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
      </div>
    </div>
  );
}
