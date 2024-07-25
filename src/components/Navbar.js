import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-40 top-0 bg-white border overflow-hidden">
      <div className="container mx-auto px-4 flex justify-between items-center py-6 md:px-16">
        <div className="flex items-center">
          <img src="../logo2.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-2xl font-bol text-blue-500">
            Sylvester
          </div>
        </div>
        <div className="hidden md:flex space-x-10 ">
          <a href="#introduction" className="text-lg text-gray-900 hover:text-blue-500">Home</a>
          <a href="#about" className="text-lg text-gray-900 hover:text-blue-500">About</a>
          <a href="#services" className="text-lg text-gray-900 hover:text-blue-500">Services</a>
          <a href="#portfolio" className="text-lg text-gray-900 hover:text-blue-500">Portfolio</a>
          <a href="#resume" className="text-lg text-gray-900 hover:text-blue-500">Resume</a>
          <a href="#contact" className="text-lg text-gray-900 hover:text-blue-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden"
        >
          <a href="#introduction" className="block py-2 px-4 text-gray-700  hover:text-gray-700">Home</a>
          <a href="#about" className="block py-2 px-4 text-gray-700 hover:text-gray-700">About</a>
          <a href="#services" className="block py-2 px-4 text-gray-700 hover:text-gray-700">Services</a>
          <a href="#portfolio" className="block py-2 px-4 text-gray-700 hover:text-gray-700">Portfolio</a>
          <a href="#resume" className="block py-2 px-4 text-gray-700 hover:text-gray-700">Resume</a>
          <a href="#contact" className="block py-2 px-4 text-gray-700 hover:text-gray-700">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
