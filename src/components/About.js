import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-around">
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <h2 className="text-sm font-bold text-blue-500 uppercase">About Me</h2>
          <h3 className="md:text-4xl text-xl font-bold text-gray-900 mt-2">Innovative Solutions, Effective Problem-Solving</h3>
          <p className="mt-4 md:text-lg text-sm text-gray-500">a passionate and motivated software engineer with a BSc in Computer Science from Moi University. My career has been built on a foundation of curiosity and dedication, leading me to excel in both backend and frontend development. I have a proven track record of delivering impactful solutions using technologies.</p>
        </div>
        <div className="md:w-1/2 md:pl-24">
          <h3 className="md:text-3xl text-xl font-bold text-gray-900 -mt-6">Connect With Me</h3>
          <p className="mt-4 text-sm md:text-lg text-gray-500">I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out. Let's build something great together.</p>
          <div className="mt-12 flex space-x-4">
            <a href="https://www.facebook.com/sylvester.ouma.ouma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com/SylvesterOumaO2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://wa.me/254748281259?text=Hello%20Sylvester!" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaWhatsapp size={24} />
            </a>
            <a href="http://linkedin.com/in/sylvester-ouma-ouma-0882ba231/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com/OumaSylvester" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaGithub size={24} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
