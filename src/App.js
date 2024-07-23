import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Introduction from './components/introduction';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Resume from './components/Resume';
import Testimonials from './components/testimonial';
import Contact from './components/contact';
import Services from './components/Services';
import Footer from './components/Footer';




function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <Navbar />
      <Introduction />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
