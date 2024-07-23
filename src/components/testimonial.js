import React, { useState } from 'react';

const Testimonials = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setMessage('Email sent successfully!');
      setEmail(''); // Clear the input field
    } else {
      setMessage('Failed to send email.');
    }
  };

  return (
    // eslint-disable-next-line react/style-prop-object
    <section className="bg-color text-white relative ">
      {/* Happy Clients Section */}
      <div className="py-32 text-center relative z-20">
        <div className="container mx-auto px-4 -mt-16">
          <h2 className="text-xl md:text-3xl font-bold">Some of My Happy Clients</h2>
          <p className="text-gray-300 mt-4 px-4 md:px-32">I am proud to have worked with a diverse group of clients who trust me to deliver exceptional solutions.<br/> Here are some of the brands that have experienced I commitment <br/> to excellence and innovation.</p>
          <div className="flex flex-wrap justify-center mt-8 mb-16">
            <img className="h-14 w-20 mx-4 my-2" src="images/logo.jpg" alt="Client 1" />
            <img className="h-14 w-20 mx-4 my-2" src="images/download.jfif" alt="Client 6" />
          </div>
        </div>
      </div>

      {/* Work Together Section */}
      <section className="bg-colorSecondary text-white absolute bottom-0 left-0 right-0 mx-auto z-10 py-16 transform translate-y-1/2 max-w-6xl">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-lg md:text-3xl font-bold">Want to work together and create amazing products with me?</h2>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full max-w-md p-3 rounded-md text-gray-900 mb-4 sm:mb-0 sm:mr-4"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-500 font-bold py-3 px-6 rounded-md"
            >
              Get a Quote
            </button>
          </form>
          {message && <p className="mt-4">{message}</p>}
        </div>
      </section>
    </section>
  );
}

export default Testimonials;
