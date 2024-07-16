import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinLine } from "react-icons/ri";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const { colors, currentColorIndex } = useContext(ColorContext);
  const selectedColor = colors[currentColorIndex];

  return (
    <footer className="bg-gray-200 text-center p-10 w-[1348px] space-x-5 dark:bg-black">
      <div style={{ backgroundColor: selectedColor.bg }} className=" mt-12  inline-block p-2 rounded-full">
        <TiSocialFacebook className='hover:text-blue-800 text-white' size={30} />
      </div>
      <div style={{ backgroundColor: selectedColor.bg }} className="inline-block p-2 rounded-full">
        <RiLinkedinLine className='hover:text-blue-800 text-white' size={30 } />
      </div>
      <div style={{ backgroundColor: selectedColor.bg}} className="inline-block p-2 rounded-full">
        <TiSocialPinterest className='hover:text-blue-800 text-white'  size={30} />
      </div>
      <div style={{ backgroundColor: selectedColor.bg }} className="inline-block p-2 rounded-full">
        <TiSocialTwitter className='hover:text-blue-800 text-white' size={30} />
      </div>
      <p className='text-lg dark:text-white mb-12 mt-3'> 2024 © Kerri. Design by SRBThemes.</p>
    </footer>
  );
};

export default Footer;
