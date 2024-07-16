import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation';
import { PiMouseScrollThin } from "react-icons/pi";
import { ColorContext } from './ColorContext';

const HeroSection = () => {
  const { colors, currentColorIndex } = useContext(ColorContext);
  const selectedColor = colors[currentColorIndex];
  return (
    <div className="h-[650px]">
    <div className="">
      <img className='absolute inset-0 h-full w-full object-cover'
      src ='https://kerrivpreview.netlify.app/html/assets/images/header-bg.jpg'
      alt='image'/>
    <div class="absolute inset-0 bg-gradient-to-tr from-[#000000B0] to-[#000000B0] opacity-100">
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-[30px] text-white font-medium mb-4 mt-32">
        Welcome
      </h1>
      <p><HeroAnimation /> </p>
      <p className="max-w-md mx-auto mt-3 mb-6 text-white text-lg">
        It is a long established fact that a reader will be of a page when looking at its layout.
      </p>
      <div
        className="px-8 py-3 mt-8 border font-medium text-[17px] border-white text-white rounded-2xl hover:bg-slate-50 hover:text-black mb-4"
      >
        Download CV
      </div>
      <motion.div
        className="mt-8"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className='mb-16'><PiMouseScrollThin className='text-white' style={{ color: selectedColor.text }} size={60} />
        </div>
      </motion.div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default HeroSection;
