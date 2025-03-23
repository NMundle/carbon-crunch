/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import "/src/ParallaxSlider.css"; // Ensure this file exists

const images = [
  // "/images/slide1.jpg",
  // "/images/slide2.jpg",
  // "/images/slide3.jpg",
];

const ParallaxSlider = () => {
  const sliderRef = useRef(null);
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const offset = sliderRef.current.scrollLeft;
        set({ scroll: offset });
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [set]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
      >
        {images.map((src, index) => (
          <animated.div
            key={index}
            className="min-w-full h-[400px] flex-shrink-0 snap-center"
            style={{ transform: scroll.to((s) => `translateX(-${s}px)`) }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxSlider;
