import React, { useState } from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "SaaS landing page",
      category: "All",
      image: "portfolio1.png",
      Description: "hjadkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkkkkkkkkkkkkk.mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
    },
    {
      title: "SaaS landing page",
      category: "Web Design",
      image: "portfolio2.png",
      Description: "hjadkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    },
    {
      title: "Job portal landing page",
      category: "Graphic Design",
      image: "portfolio3.png",
      Description: "hjadkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    },
    {
      title: "Startup landing page",
      category: "UI/UX",
      image: "portfolio4.png",
      Description: "hjadkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-20">
        <h2 className="text-4xl font-bold text-blue-500 text-center">Portfolio</h2>
        <div className="flex justify-center mt-8">
          <button onClick={() => handleCategoryClick("All")} className={`mx-2 px-6 py-2 rounded-full ${selectedCategory === "All" ? "bg-blue-500 text-white" : "bg-white text-gray-400"}`}>All</button>
          <button onClick={() => handleCategoryClick("Web Design")} className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "Web Design" ? "bg-blue-500 text-white" : "bg-white text-gray-400"}`}>Web Design</button>
          <button onClick={() => handleCategoryClick("Graphic Design")} className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "Graphic Design" ? "bg-blue-500 text-white" : "bg-white  text-gray-400"}`}>Graphic Design</button>
          <button onClick={() => handleCategoryClick("UI/UX")} className={`mx-2 px-4 py-2 rounded-full ${selectedCategory === "UI/UX" ? "bg-blue-500 text-white" : "bg-white text-gray-400"}`}>UI/UX</button>
        </div>
      </div>
      <div className="container mx-auto px-20">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
          {filteredProjects.map((project, index) => (
            <div key={index} className="rounded-lg p-6 flex flex-col justify-between">
              <div className="mb-4">
                <img src={`../images/${project.image}`} alt={project.title} className="w-full h-auto" />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                <p className="text-gray-600 mt-4 break-words">{project.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
