import React from 'react';
import { useColorContext, useDarkModeContext } from './ColorContext';
import DarkModeToggle from './Darkmode'; // Import the new component

const ExampleComponent = () => {
  const { colors, currentColorIndex, selectColor } = useColorContext();

  const handleColorChange = (index) => {
    selectColor(index);
  };

  return (
    <div>
      <h1>Current Color: {colors[currentColorIndex].name}</h1>
      <button onClick={() => handleColorChange(1)}>Change Color</button>
      <DarkModeToggle /> {/* Render the DarkModeToggle component */}
    </div>
  );
};

export default ExampleComponent;
