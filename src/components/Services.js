import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.',
      icon: 'frontend.png' // Replace with actual path or icon component
    },
    {
      title: 'Microservice  Development using C & C++',
      description: 'Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.',
      icon: 'backend.png' // Replace with actual path or icon component
    },
    {
      title: 'Game Development',
      description: 'Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.',
      icon: 'ux.png' // Replace with actual path or icon component
    },
    {
      title: 'Software Modeling, Design & Architecture',
      description: 'Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.',
      icon: 'game.png' // Replace with actual path or icon component
    },
    {
      title: 'Database Design & Development',
      description: 'Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.',
      icon: 'game.png' // Replace with actual path or icon component
    },
    {
      title: 'UI/ UX Design',
      description: 'Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.',
      icon: 'game.png' // Replace with actual path or icon component
    },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Project Complete' },
    { value: '5+', label: 'Happy Clients' },
    { value: '1', label: 'Awards Won' },
  ];

  const scrollToContact = () => {
    // Find the contact section element
    const contactSection = document.getElementById('contact');
    // Scroll to the contact section smoothly
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto">
        <div className="md:flex md:justify-around items-start mb-16 mx-8">
          {/* Service Introduction */}
          <div className="md:w-1/2 lg:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-blue-500">Services</span></h2>
            <p className="text-lg mb-8 text-gray-500">
              Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer dedicated to crafting immersive digital experiences. Welcome to my online abode.
            </p>
            <button  onClick={scrollToContact} className="bg-blue-500 text-white py-2 px-6 rounded-full font-bold transition duration-300">Hire Me</button>
          </div>
          
          {/* Service Cards */}
          <div className="md:w-1/2 lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-2">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-200 rounded shadow-lg p-4 text-gray mt-3">
                <div className="mb-4">
                  <img src={service.icon} alt={`${service.title} icon`} className="mx-auto"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-around bg-gray-200 mx-16 py-10">
          {stats.map((stat, index) => (
            <div key={index} className="m-4 text-center">
              <h3 className="text-4xl font-bold text-blue-500">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
