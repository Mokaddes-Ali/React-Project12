import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ChangeDirectionButton = () => {
  const [isLeft, setIsLeft] = useState(true);

  const toggleDirection = () => {
    setIsLeft(!isLeft);
    document.documentElement.dir = isLeft ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        onClick={toggleDirection}
      >
        {isLeft ? <FaArrowRight className="mr-2" /> : <FaArrowLeft className="mr-2" />}
        {isLeft ? 'Right-to-Left' : 'Left-to-Right'}
      </button>
    </div>
  );
};

export default ChangeDirectionButton;
 
