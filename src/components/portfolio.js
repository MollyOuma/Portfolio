import React, { useState } from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Data Compression",
      category: "All",
      image: "portfolio1.png",
      Description: "I implemented Huffman and Arithmetic coding algorithms in C/C++ to optimize media file compression, improving storage and data transfer speeds",
      link:'https://github.com/OumaSylvester/arithmeticCoding'
    },

    {
      title: "CheckMech - Roadside Assistance Platform",
      category: "Web Design",
      image: "portfolio2.png",
      Description: " web application that connects drivers with mechanics, reducing response times by 40% and improving customer satisfaction.",
      link:'https://github.com/sylvesterouma'

    },
    {
      title: "Employee Management System",
      category: "Graphic Design",
      image: "portfolio3.png",
      Description: "Designed and implemented a system that automates task assignments and performance tracking, resulting in a 15% productivity boost.",
      link:'https://github.com/OumaSylvester/FinTech'

    },
    {
      title: "Flight Management System",
      category: "UI/UX",
      image: "portfolio4.png",
      Description: "Developed using Django, this system features real-time flight tracking and management, enhancing operational efficiency.",
      link:'https://github.com/OumaSylvester/kenyaAirways'

    },
    {
      title: "Video Game Design and Development",
      category: "All",
      image: "games.jpg",
      Description: "Created engaging games like tic-tac-toe, showcasing creativity and proficiency in game development.",
      link:'https://github.com/OumaSylvester/squirrel-eat-squirrel'

    },
    // {
    //   title: "AI Search Algorithms Implementation",
    //   category: "All",
    //   image: "algorithms.jpg",
    //   Description: "Enhanced user experience with AI search algorithms, leading to a 25% increase in search accuracy and engagement.",
    //   link:'https://github.com/sylvesterouma'

    // },
    {
      title: "E-commerce System & Webacha website",
      category: "All",
      image: "algorithms.jpg",
      Description: "I developed an e-commerce system for webacha and Their website too which is user-friendly and intuitive. webacha.com",
      link:'https://github.com/OumaSylvester/Webacha'
      

    }

  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto md:px-20 px-4">
        <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 text-center">Portfolio</h2>
        <h3 className='text-2xl md:text-4xl font-bold text-gray-900 mt-2 text-center'>Recent Works</h3>
        <p className = "mt-4 text-sm md:text-lg text-gray-500 text-center md:px-32">Here are some of the projects I've worked on, showcasing my skills in both backend and frontend development. Each project reflects my commitment to quality and innovation.</p>
        <div className="flex justify-center mt-8 overflow-hidden">
          <button onClick={() => handleCategoryClick("All")} className={`mx-2 p-4 rounded-full ${selectedCategory === "All" ? "bg-blue-500 text-white" : "bg-white text-gray-400"}`}>All</button>
          <button onClick={() => handleCategoryClick("Web Design")} className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "Web Design" ? "bg-blue-500 text-white" : "bg-white text-gray-400"}`}>Web Design</button>
          <button onClick={() => handleCategoryClick("Graphic Design")} className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "Graphic Design" ? "bg-blue-500 text-white" : "bg-white  text-gray-400"}`}>Graphic Design</button>
          <button onClick={() => handleCategoryClick("UI/UX")} className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "UI/UX" ? "bg-blue-500 text-white" : "bg-white text-gray-400"}`}>UI/UX</button>
        </div>
      </div>
      <div className="container mx-auto md:px-20">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
          {filteredProjects.map((project, index) => (
            <div key={index} className="rounded-lg p-6 flex flex-col justify-between">
              <div className="mb-4">
                <img src={`../images/${project.image}`} alt={project.title} className="w-full h-auto" />
              </div>
              <div className="text-left">
  <h4 className="text-lg md:text-xl font-bold text-gray-900">{project.title}</h4>
  <p className="text-sm md:text-lg text-gray-600 mt-4 break-words">{project.Description}</p>
  <button
  className="bg-blue-500 text-white text-sm md:text-lg font-semibold py-2 px-4 mt-4 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
  onClick={() => window.open(project.link, '_blank')}
>
  Check this Project
</button>

</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
