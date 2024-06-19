import React from 'react';

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of ABC",
      location: "New York",
      period: "2015 - 2019",
      description: "Graduated with honors, focusing on software development and UI/UX design."
    },
    {
      title: "Master of Science in Human-Computer Interaction",
      institution: "University of XYZ",
      location: "New York",
      period: "2020 - 2022",
      description: "Specialized in user-centered design and front-end development."
    }
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      location: "San Francisco",
      period: "2019 - Present",
      description: "Developed and maintained the front-end of various web applications, focusing on user experience and performance."
    },
    {
      title: "UI Designer",
      company: "Design Studio",
      location: "Los Angeles",
      period: "2018 - 2019",
      description: "Created intuitive and visually appealing user interfaces for web and mobile applications."
    }
  ];

  return (
    <section id="resume" className="py-32 bg-white flex justify-around ">
      <div className="container mx-20 relative">
        <h2 className="text-4xl font-bold text-gray-900 text-center">My <span className="text-blue-500">Resume</span></h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.mndbdh
        </p>
        <div className="mt-8">
          <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {education.concat(experience).map((item, index) => (
            <div key={index} className={` flex justify-around items-center w-full ${index % 2 === 1 ? "flex-row-reverse" : "text-right"}`}>
              <div className="w-6/12">
                <div className=" rounded-lg p-4">
                  <h4 className="text-xl font-bold text-gray-900 mt-4">{item.title}</h4>
                  <p className="text-gray-600">{item.institution || item.company} | {item.location}</p>
                  <p className={`text-blue-500 mt-2`}>{item.period}</p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              <div className="w-6/12 hidden md:block z-40">
                <div className={`h-4 w-4 rounded-full bg-blue-500 flex mb-16 items-center justify-center text-white  ${index % 2 === 1 ? "ml-auto" : "mr-auto"}`}>
                  <span className="text-lg">•</span>
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
