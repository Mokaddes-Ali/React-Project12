
 
import React, { useState , useContext } from 'react';
import { ColorContext } from './ColorContext';

const ChangeDirectionButton = () => {
  const [isLeft, setIsLeft] = useState(true);
  const { colors, currentColorIndex } = useContext(ColorContext);
  const selectedColor = colors[currentColorIndex];

  const toggleDirection = () => {
    setIsLeft(!isLeft);
    document.documentElement.dir = isLeft ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <button
         style={{ backgroundColor: selectedColor.bg }}
        className=" text-white font-bold py-2 px-3 rounded flex items-center focus:outline-none focus:ring-0"
        onClick={toggleDirection}
      >
        {isLeft ? 'RTL' : 'LTR'}
      </button>
    </div>
  );
};

export default ChangeDirectionButton;
