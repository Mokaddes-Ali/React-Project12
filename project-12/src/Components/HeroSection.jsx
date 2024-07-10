// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaMousePointer } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl text-gray-700 mb-4">Welcome</h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            I am a developer
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-gray-600 mb-8"
        >
          It is a long established fact that a reader will be of a page when established fact looking at its layout
        </motion.p>
        <motion.a
          href="/path/to/your/cv.pdf"
          download
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Download CV
        </motion.a>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-8"
        >
          <FaMousePointer size={32} className="text-gray-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
