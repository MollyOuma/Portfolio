import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 top-0 bg-white border">
      <div className="container mx-auto px-4 flex justify-around items-center py-6">
        <div className="flex items-center">
          <img src="../logo2.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-2xl font-bold text-blue-500">
            Sylvester
          </div>
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="#introduction" className=" text-lg text-gray-900 hover:text-blue-500">Home</a>
          <a href="#about" className=" text-lg text-gray-900 hover:text-blue-500">About</a>
          <a href="#services" className="text-lg text-gray-900 hover:text-blue-500">Services</a>
          <a href="#portfolio" className="text-lg text-gray-900 hover:text-blue-500">Portfolio</a>
          <a href="#resume" className="text-lg text-gray-900 hover:text-blue-500">Resume</a>
          <a href="#contact" className="text-lg text-gray-900 hover:text-blue-500">Contact</a>
        </div>
        
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#introduction" className="block py-2 px-4 text-gray-700 hover:bg-teal-400 hover:text-white">Home</a>
          <a href="#about" className="block py-2 px-4 text-gray-700 hover:bg-teal-400 hover:text-white">About</a>
          <a href="#portfolio" className="block py-2 px-4 text-gray-700 hover:bg-teal-400 hover:text-white">Portfolio</a>
          <a href="#services" className="block py-2 px-4 text-gray-700 hover:bg-teal-400 hover:text-white">Services</a>
          <a href="#Resume" className="block py-2 px-4 text-gray-700 hover:bg-teal-400 hover:text-white">Resume</a>
          <a href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-teal-400 hover:text-white">Contact</a>
        </div>
        
      )}
    </nav>
  );
}

export default Navbar;
