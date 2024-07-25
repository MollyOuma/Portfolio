import React, { useState } from 'react';
import { motion } from 'framer-motion';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className={`fixed w-full z-40 top-0 border bg-white overflow-hidden`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-6 md:px-16">
        <div className="flex items-center">
          <img src="../logo2.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className={`text-2xl font-bold text-blue-500`}>
            Sylvester
          </div>
        </div>
        <div className="hidden md:flex space-x-10">
          <button onClick={() => scrollToSection('introduction')} className="text-lg text-gray-900 hover:text-blue-500">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-lg text-gray-900 hover:text-blue-500">About</button>
          <button onClick={() => scrollToSection('services')} className="text-lg text-gray-900 hover:text-blue-500">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-lg text-gray-900 hover:text-blue-500">Portfolio</button>
          <button onClick={() => scrollToSection('resume')} className="text-lg text-gray-900 hover:text-blue-500">Resume</button>
          <button onClick={() => scrollToSection('contact')} className="text-lg text-gray-900 hover:text-blue-500">Contact</button>
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
          className="md:hidden bg-color"
        >
          <button onClick={() => handleLinkClick('introduction')} className="block py-2 px-4 text-white hover:text-gray-300">Home</button>
          <button onClick={() => handleLinkClick('about')} className="block py-2 px-4 text-white hover:text-gray-300">About</button>
          <button onClick={() => handleLinkClick('services')} className="block py-2 px-4 text-white hover:text-gray-300">Services</button>
          <button onClick={() => handleLinkClick('portfolio')} className="block py-2 px-4 text-white hover:text-gray-300">Portfolio</button>
          <button onClick={() => handleLinkClick('resume')} className="block py-2 px-4 text-white hover:text-gray-300">Resume</button>
          <button onClick={() => handleLinkClick('contact')} className="block py-2 px-4 text-white hover:text-gray-300">Contact</button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
