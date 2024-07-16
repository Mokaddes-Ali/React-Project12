import React, { useContext, useState } from 'react';
import { MdOutlinePalette } from "react-icons/md";
import { ColorContext } from './ColorContext';

const ColorChanger = () => {
  const { colors, selectColor, currentColorIndex } = useContext(ColorContext);
  const [showColorOptions, setShowColorOptions] = useState(false);

  const toggleColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  const selectedColor = colors[currentColorIndex];

  return (
    <div
      className="relative flex flex-row items-center space-y-4  shadow-md"
    >
      <div className={`absolute left-0 top-0  transition-all duration-300 -ml-10 ${
          showColorOptions ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{width:'80px'}}
      >
      {/* Button with sliding animation */}
      <button
        onClick={toggleColorOptions}  style={{ backgroundColor: selectedColor.bg, color: selectedColor.text }}
        className={`absolute left-0 top-0 w-16 mt-1 h-10  transition-all duration-100 focus:outline-none focus:ring-0 ml-[140px] ${
          showColorOptions ? 'translate-x-11' : '-translate-x-full'
        }`}
        >
        {showColorOptions ? <MdOutlinePalette className='text-white pb-1' size={26} /> : <MdOutlinePalette className='text-white pb-1' size={25} />}
      </button>
      {/* Color options container with sliding animation */}
      {showColorOptions && (
        <div className='h-40 p-3 mt-1 w-48 bg-black' >
          <h1 className='text-lg ml-4'>Choose Color</h1>
          {/* First row */}
          <div className="flex items-center">
            {colors.slice(0, 3).map((color, index) => (
              <div
                key={color.name}
                onClick={() => selectColor(index)}
                className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer shadow-md m-1"
                style={{ backgroundColor: color.bg }}
              >
                <div
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: color.text }}
                />
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="flex -mt-6  h-32 w-52 items-center">
            {colors.slice(3, 6).map((color, index) => (
              <div
                key={color.name}
                onClick={() => selectColor(index + 3)}
                className="flex items-center justify-center w-11 h-11 rounded-full  cursor-pointer shadow-md m-1"
                style={{ backgroundColor: color.bg }}
              >
               
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
      </div>

  );
};

export default ColorChanger;
