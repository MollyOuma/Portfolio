import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Let's Talk!</h2>
          <p className="mb-2">closerpage@email.com</p>
          <p className="mb-2">12 Hilton St, Manchester M1 1JF</p>
          <p>+44 012 34 5678</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">What I Do?</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">The Studio</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Sponsoring</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Newsletter</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">News</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Hot Stuff</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Perfect Place</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Vintage</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Products</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Style</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Health</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Relationship</a></li>
            <li className="mb-2"><a href="#" className="hover:text-teal-300">Legal & Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-10 px-6">
        <hr className="border-gray-700 mb-12" />
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-teal-400 hover:text-teal-300"><FaFacebookF /></a>
          <a href="#" className="text-teal-400 hover:text-teal-300"><FaInstagram /></a>
          <a href="#" className="text-teal-400 hover:text-teal-300"><FaTwitter /></a>
          <a href="#" className="text-teal-400 hover:text-teal-300"><FaLinkedinIn /></a>
        </div>
        <p className="text-sm">&copy; Portfolio creative 2024. All rights reserved.</p>
      </div>
     
    </footer>
  );
}

export default Footer;
