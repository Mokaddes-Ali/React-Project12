import React, { useState, useEffect, useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { ColorContext } from "./ColorContext";

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);
  const { colors, currentColorIndex } = useContext(ColorContext);
  const selectedColor = colors[currentColorIndex];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        style={{ backgroundColor: selectedColor.bg }}
        className="py-2 px-3 rounded  dark:hover:bg-blue-700 focus:outline-none focus:ring-0"
      >
        {darkMode ? (
          <IoIosSunny className="w-6 h-6 text-white"  />
        ) : (
          <FaMoon className="w-6 h-6 text-white "  />
        )}
      </button>
    </div>
  );
}
export default Darkmode;
