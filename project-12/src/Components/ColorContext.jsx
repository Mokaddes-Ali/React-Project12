import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const colors = ['bg-black', 'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <ColorContext.Provider value={{ color: currentColor, changeColor, colors }}>
      {children}
    </ColorContext.Provider>
  );
};
