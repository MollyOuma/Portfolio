import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-around">
        <div className="md:w-1/3 mb-8 md:mb-0 ">
          <h2 className="text-sm font-bold text-blue-500 uppercase">About Me</h2>
          <h3 className="text-4xl font-bold text-gray-900 mt-2">Better design, better experience</h3>
          <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.</p>
        </div>
        <div className="md:w-1/3 md:pl-12">
          <h3 className="text-2xl font-bold text-gray-900">Connect With Me</h3>
          <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.</p>
          <div className="mt-12 flex space-x-4">
            <a href="https://www.facebook.com/molly.adhiambo.princess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.facebook.com/molly.adhiambo.princess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/molly.adhiambo.princess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.facebook.com/molly.adhiambo.princess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.facebook.com/molly.adhiambo.princess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
