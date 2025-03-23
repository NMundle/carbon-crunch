import React from "react";
import ParallaxSlider from "./ParallaxSlider";
import HeroSection from "/src/HeroSection";

const App = () => {
  return (
    <><div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-6">Parallax Slider</h1>
      <ParallaxSlider />
    </div><div>
        <HeroSection />
      </div></>
  );
};




export default App;
