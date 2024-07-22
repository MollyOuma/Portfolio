import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      company,
      email,
      phone,
      message
    };

    try {
      const response = await fetch('http://localhost:3001/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const errorData = await response.json();
        alert('Failed to send message. Please try again later. Error: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto mt-12">
        <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 text-center">Contact Me</h2>
        <h2 className="text-xl md:text-4xl font-bold text-center text-gray-900">Have A Project in Mind?</h2>
        <p className="text-sm text-center text-gray-500 mt-4">
          Let's discuss how we can bring your ideas to life. Fill out the form below and I'll get back to you soon.
        </p>
        <form onSubmit={handleSubmit} className="mt-2 max-w-4xl mx-auto bg-white rounded-md p-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company (Optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              placeholder="Tell me about your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-500 text-white py-4 px-10 rounded-full mt-8"
            >
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
