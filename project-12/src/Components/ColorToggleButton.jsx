import React, { useState } from 'react';
import { useColor } from './ColorContext';

const ColorToggleButton = () => {
  const { colors, changeColor } = useColor();
  const [selectedColor, setSelectedColor] = useState(null);
  const [showSelectedColor, setShowSelectedColor] = useState(false); // State to toggle selected color display

  const selectColor = (color) => {
    changeColor(color);
    setSelectedColor(color);
    setShowSelectedColor(true); // Show selected color when a color is selected
  };

  const toggleSelectedColor = () => {
    setShowSelectedColor(!showSelectedColor); // Toggle selected color display
  };

  const handleButtonClick = (color) => {
    selectColor(color); // Select the color when button is clicked
    toggleSelectedColor(); // Toggle selected color card display
  };

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Select a Color:</h2>
        <div className="flex flex-wrap">
          {colors.map((colorClass, index) => (
            <div
              key={index}
              className={`w-12 h-12 ${colorClass} m-1 flex justify-center items-center cursor-pointer border border-gray-300`}
              onClick={() => handleButtonClick(colorClass)}
            >
              <span className="sr-only">{colorClass}</span>
            </div>
          ))}
        </div>
      </div>
      {showSelectedColor && selectedColor && (
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <div className="bg-white p-2 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Selected Color:</h2>
            <div
              className={`w-12 h-12 ${selectedColor} flex justify-center items-center cursor-pointer border border-gray-300`}
              onClick={toggleSelectedColor}
            >
              <span className="sr-only">{selectedColor}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorToggleButton;
