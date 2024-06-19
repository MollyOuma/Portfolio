import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = 'New Contact Form Submission';
    const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">Have an Project in Mind?</h2>
        <p className="text-center text-gray-500 mt-4">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-4xl mx-auto bg-white rounded-md p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray" 
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
          <div className="col-span-2">
            <textarea 
              placeholder="Tell me about your project" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-4 border border-gray-300 focus:outline-blue-500 rounded-md bg-gray" 
              rows="4">
            </textarea>
          </div>
          <div className="col-span-2 text-center">
            <button 
              type="submit" 
              className="w-full md:w-auto bg-blue-500 text-white py-4 px-10 rounded-full mt-8">
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
