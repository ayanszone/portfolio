
// export default Hero
import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 py-12 px-6 lg:px-12 h-[calc(100vh-60px)] items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/Banner2.jpeg"
            alt="Abdul Hadi"
            className="w-full max-w-md rounded-full shadow-lg border-4 border-amber-400 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Hero Text Section */}
        <div className="text-white text-center lg:text-left space-y-4">
          <h1 className="text-[50px] sm:text-[70px] lg:text-[90px] font-extrabold leading-tight tracking-tight">
            <span className="block transform transition-transform duration-500 hover:scale-110">I'm</span>
            <span className="block text-amber-400 transform transition-transform duration-500 hover:scale-110">Abdul</span>
            <span className="block transform transition-transform duration-500 hover:scale-110">Hadi</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-gray-300">
            Full Stack Developer | Passionate Coder | Creative Problem Solver
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
