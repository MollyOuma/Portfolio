
import React from 'react';

const Resume = () => {
  const education = [
    {
      title: "Full-Stack Software Developer",
      institution: "Fremont Associates",
      location: "Nairobi, Kenya",
      period: "Present",
      description: "Specialized in Full-stack development, and  user-centered design. I am Contributing to a scorecard management system that should improve company performance by ensuring all tasks are completed."
    }
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Webacha Company Limited",
      location: "Webuye, Kenya",
      period: "2023 - 2024",
      description: "Developed and maintained an E-commerce System. I designed and implemented both backend and frontend of the application, focusing on user experience and performance."
    },
    {
      title: "Software Developer Attache",
      company: "Coretec Solutions Africa",
      location: "Nairobi, Kenya",
      period: "2022 - 2023",
      description: "I collaborated with a team in customizing products using Microsoft Dynamics.I also  developed a service that automatically corrects errors on the code with 80% precision"
    },
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Moi University",
      location: "Eldoret, Kenya",
      period: "2018-2023",
      description: "Focusing on software development, Data structures and algorithms design and development, and UI/UX design."
    },
  ];

  return (
    <section id="resume" className=" mt-12 md:mt-0 py-8 md:py-36 bg-white flex justify-around overflow-hidden">
      <div className="container mx-auto md:mx-20 relative">
        <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 text-center">Education & Experience</h2>
        <h2 className="text-xl md:text-5xl font-bold text-gray-900 text-center">My Resume</h2>
        <p className="px-4 text-sm md:text-lg text-gray-600 mt-4 text-center md:px-32">
          Showcasing my journey in Software Engineering and Software Development, this resume highlights my professional experiences, educational background, and key skills. Explore the roles I've undertaken, the projects I've<br/> contributed to, and the continuous learning path that fuels my passion <br/>for creating exceptional digital experiences.
        </p>
        <div className="mt-8 relative overflow-hidden">
          <div className="border-l-2 border-gray-200 absolute h-full md:left-1/2 transform -translate-x-1/2 "></div>
          {education.concat(experience).map((item, index) => (
            <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:text-right'} flex-row text-left`}>
              <div className="w-full md:w-6/12">
                <div className={`bg-white rounded-lg p-4 ${index % 2 === 1 ? 'md:ml-4' : 'md:mr-4'}`}>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-400">{item.institution || item.company} | {item.location}</p>
                  <p className={`text-blue-500 mt-2`}>{item.period}</p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              <div className=" w-0 md:w-0/12  md:flex justify-center relative">
                <div className={`h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-white absolute md:left-1/2 transform md:-translate-x-1/2`}>
                  <span className="text-sm">•</span>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
