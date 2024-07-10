// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (name, path) => {
    setActive(name);
    setIsOpen(false);
    navigate(path);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Client', path: '/client' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Welcome', path: '/welcome' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-xl font-bold">Kerri</div>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`hover:text-gray-600 ${active === item.name ? 'text-blue-500' : 'text-gray-800'}`}
              onClick={() => handleClick(item.name, item.path)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${active === item.name ? 'text-blue-500' : 'text-gray-800'}`}
              onClick={() => handleClick(item.name, item.path)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
