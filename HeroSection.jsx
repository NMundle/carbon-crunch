/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      
      {/* Text Content - Moved to Upper Side */}
      <div className="absolute top-10 text-center w-full px-6">
        <h1 className="text-4xl font-bold text-black">
          Optimize your eco reporting with
          <span className="text-orange-500"> CARBON CRUNCH</span>
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          95% Accurate Carbon Calculations Trusted by Industry Leaders
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Free Calculator
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Book Demo
          </button>
        </div>
      </div>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-24 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Horizontal Image Slider (Single Slide Visible) */}
      <div className="relative w-full max-w-4xl flex items-center justify-center mt-20">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-white bg-black bg-opacity-50 p-3 rounded-full z-10 hover:bg-opacity-70 transition-opacity"
        >
          <FaArrowLeft size={30} />
        </button>

        {/* Slide Container */}
        <div className="w-full h-[400px] flex items-center justify-center overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: "100%" }} // Ensure each slide takes full width
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 text-white bg-black bg-opacity-50 p-3 rounded-full z-10 hover:bg-opacity-70 transition-opacity"
        >
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;