
import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState([
    { name: 'Red', bg: '#e65f78', text: '#e65f78', iconColor: '#e65f78' },
    { name: 'Sky', bg: '#37b8df', text: '#37b8df', iconColor: '#37b8df' },
    { name: 'Green', bg: '#31b164', text: '#31b164', iconColor: '#31b164' },
    { name: 'Blue', bg: '#5d69f6', text: '#5d69f6', iconColor: '#5d69f6' },
    { name: 'Skyblue', bg: '#87ceeb', text: '#87ceeb', iconColor: '#87ceeb' },
    { name: 'Yellow', bg: '#f2b31a', text: '#f2b31a', iconColor: '#f2b31a' },
  ]);

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const selectColor = (index) => {
    setCurrentColorIndex(index);
  };

  return (
    <ColorContext.Provider value={{ colors, selectColor, currentColorIndex }}>
      {children}
    </ColorContext.Provider>
  );
};


// import React, { createContext, useState } from 'react';

// export const ColorContext = createContext();

// export const ColorProvider = ({ children }) => {
//   const [colors, setColors] = useState([
//     { name: 'Red', bg: 'red', text: 'red', iconColor: 'red' },
//     { name: 'Green', bg: 'green', text: 'green', iconColor: 'green' },
//     { name: 'Blue', bg: 'blue', text: 'blue', iconColor: 'blue' },
//     { name: 'Yellow', bg: 'yellow', text: 'yellow', iconColor: 'yellow' },
//     { name: 'Purple', bg: 'purple', text: 'purple', iconColor: 'purple' },
//     { name: 'Orange', bg: 'orange', text: 'orange', iconColor: 'orange' },
//   ]);

//   const [currentColorIndex, setCurrentColorIndex] = useState(0);

//   const selectColor = (index) => {
//     setCurrentColorIndex(index);
//   };

//   return (
//     <ColorContext.Provider value={{ colors, selectColor, currentColorIndex }}>
//       {children}
//     </ColorContext.Provider>
//   );
// };

// import React, { createContext, useState } from 'react';

// export const ColorContext = createContext();

// export const ColorProvider = ({ children }) => {
//   const [colors, setColors] = useState([
//     { name: 'Red', bg: 'red', text: 'red', iconColor: 'orange' },
//     { name: 'Green', bg: 'green', text: 'green', iconColor: 'green' },
//     { name: 'Blue', bg: 'blue', text: 'blue', iconColor: 'blue' },
//     { name: 'Yellow', bg: 'yellow', text: 'yellow', iconColor: 'yellow' },
//     { name: 'Purple', bg: 'purple', text: 'purple', iconColor: 'purple' },
//     { name: 'Orange', bg: 'orange', text: 'orange', iconColor: 'orange' },
//   ]);

//   const [currentColorIndex, setCurrentColorIndex] = useState(0);

//   const selectColor = (index) => {
//     setCurrentColorIndex(index);
//   };

//   return (
//     <ColorContext.Provider value={{ colors, selectColor, currentColorIndex }}>
//       {children}
//     </ColorContext.Provider>
//   );
// };
