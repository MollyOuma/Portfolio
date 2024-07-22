import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Providing comprehensive development services from backend to frontend for seamless integration and performance',
      icon: 'frontend.png'  // Replace with actual path or icon component
    },
    {
      title: 'Microservice Development',
      description: 'Specialized development of microservices using C and C++ for optimized performance and scalability. I use C & C++ for this.',
      icon: 'backend.png' // Replace with actual path or icon component
    },
    {
      title: 'Game Development',
      description: 'Design and development of engaging and interactive games for various platforms and audiences.',
      icon: 'ux.png' // Replace with actual path or icon component
    },
    {
      title: 'Software Modeling, Design & Architecture',
      description: 'Creating robust software models, designing architectures, and implementing scalable solutions.',
      icon: 'game.png' // Replace with actual path or icon component
    },
    {
      title: 'Database Design & Development',
      description: 'Expertise in designing and developing efficient database solutions tailored to specific needs.',
      icon: 'database.png' // Replace with actual path or icon component
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive user interfaces and engaging user experiences to enhance digital products.',
      icon: 'uiux.png' // Replace with actual path or icon component
    },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Happy Clients' },
    { value: '1', label: 'Awards Won' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto">
        {/* What You Get */}
        <div className="text-center mb-12 md:px-20 px-4">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">What You Get</h2>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">My Services</h2>
          <p className="text-sm md:text-lg mb-8 text-gray-500 md:px-32">
            Greetings, fellow digital explorers! I am Sylvester, a passionate and innovative Full-Stack developer dedicated to crafting immersive digital experiences. Welcome to my online abode.
          </p>
          <button onClick={scrollToContact} className="bg-blue-500 text-white py-2 px-8 rounded-full font-bold transition duration-300">Hire Me</button>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:px-20 px-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-200 rounded shadow-lg p-4 text-gray mt-3">
              <div className="mb-4">
                <img src={service.icon} alt={`${service.title} icon`} className="mx-auto"/>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className='text-gray-600 text-sm'>{service.description}</p>
            </div>
          ))}
        </div>

       {/* Statistics Section */}
       <div className="px-24 flex flex-wrap justify-around bg-gradient-to-r from-gray-200 via-gray-200 to-color py-8 mt-12 ">
          {stats.map((stat, index) => (
            <div key={index} className="m-4 text-center">
              <h3 className="text-xl md:text-4xl font-bold text-blue-500">{stat.value}</h3>
              <p className="text-sm md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
