import React from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-color text-gray-300 py-20 md:px-36 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 ml-12 ">
        <div className="">
          <h2 className="text-lg md:text-2xl font-bold mb-4">Let's Talk!</h2>
          <p className="mb-2">sylvesteroumaouma@email.com</p>
          <p>+254748281259</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">What I Do</h2>
          <ul>
            <li className="mb-2"><a href="#about" className="hover:text-teal-300">About Me</a></li>
            <li className="mb-2"><a href="#services" className="hover:text-teal-300">Services</a></li>
            <li className="mb-2"><a href="#contact" className="hover:text-teal-300">Contact Me</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Check</h2>
          <ul>
            <li className="mb-2"><a href="#resume" className="hover:text-teal-300">My Resume</a></li>
            <li className="mb-2"><a href="#portfolio" className="hover:text-teal-300">My Portfolio</a></li>
          </ul>
        </div>
        {/* <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Style</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Health</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Relationship</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Legal & Privacy</a></li>
          </ul>
        </div> */}
      </div>
      <div className="container mx-auto text-center mt-10 px-6">
        <hr className="border-gray-700 mb-12" />
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://www.facebook.com/sylvester.ouma.ouma" className="text-white hover:text-blue-500"><FaFacebookF /></a>
          <a href="https://github.com/OumaSylvester" className="text-white hover:text-blue-500"><FaGithub /></a>
          <a href="https://x.com/SylvesterOumaO2" className="text-white hover:text-blue-500"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/sylvester-ouma-ouma-0882ba231/" className="text-white hover:text-blue-500"><FaLinkedinIn /></a>
        </div>
        <p className="text-sm">&copy; Sylvester Ouma {currentYear}. All rights reserved.</p>
      </div>
     
    </footer>
  );
}

export default Footer;
