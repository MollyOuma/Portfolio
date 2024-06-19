import React from 'react';
import html2pdf from 'html2pdf.js';
import '../index.css'; // Import your CSS file for custom styles

const Introduction = () => {
  const generateResume = () => {
    // Create HTML content for the resume
    const resumeHTML = `
      <div>
        <h1>Resume</h1>
        <p>Name: Wilkerson Hardin</p>
        <p>Skills: React, JavaScript, HTML, CSS</p>
        <p>Experience: 5 years</p>
        <p>Education: Computer Science Degree</p>
        <!-- Add more resume details as needed -->
      </div>
    `;

    // Create options for html2pdf
    const options = {
      margin: 10,
      filename: 'Wilkerson_Hardin_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().from(resumeHTML).set(options).save();
  };

  const scrollToContact = () => {
    // Find the contact section element
    const contactSection = document.getElementById('contact');
    // Scroll to the contact section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="introduction" className="relative py-32 bg-white text-black text-center overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center z-10 relative">
        <div className="md:w-1/2 md:pr-12 text-left mt-12">
          <h1 className="text-lg font-bold mb-4 text-blue-500">Hey There<span role="img" aria-label="wave">👋</span> I am</h1>
          <h2 className="text-5xl font-bold mb-4"><span className="text-gray-900">Sylvester Ouma</span></h2>
          <h3 className="text-2xl font-semibold text-gray-400 mb-4">Professional <span className= "text-gray-700">Full-Stack Engineer</span></h3>
          <p className="mt-4 text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.</p>
          <button onClick={scrollToContact} className="mt-8 mr-4 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full font-bold transition duration-300">Contact Me</button>
          <button onClick={generateResume} className="mt-8 px-6 py-3 bg-gray-200 hover:bg-gray-100 text-blue-500 rounded-full font-bold transition duration-300">Download Resume</button>
        </div>
        <div className="md:w-1/2 relative mb-8 md:mb-0 flex justify-center">
          <div className="relative">
            <img src="syl.png" alt="syl" className="w-48 h-48  z-10" />
            <div className="quarter-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
