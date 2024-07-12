import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-3 w-screen rounded-full">
      <ul className="flex justify-around">
        <li className="flex">
          <NavLink 
            exact 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
         <li className="flex">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            About
          </NavLink>
        </li>
        
        <li className="flex">
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            Services
          </NavLink>
        </li>
        
        <li className="flex">
          <NavLink 
            to="/client" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            Client
          </NavLink>
        </li>
        <li className="flex">
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex">
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="flex">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-600 text-white px-3 py-2 rounded-full" 
                : "text-gray-400 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
