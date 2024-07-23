import React from 'react';

const Skills = () => {
  const skills = [
    { name: "React", percentage: 90 },
    { name: "Django", percentage: 80 },
    { name: "C++", percentage: 75 },
    { name: "JavaScript", percentage: 95 },
    { name: "Python", percentage: 95 },
    { name: "User Experience", percentage: 80 },
    { name: "Figma", percentage: 90 },
    { name: "HTML", percentage: 80 },
    { name: "CSS3", percentage: 75 },
    { name: "PHP", percentage: 90 },
    { name: "MYSQL", percentage: 92 },
    { name: "User Experience", percentage: 65 },
    { name: "User Experience", percentage: 65 },
    { name: "User Experience", percentage: 65 },
    { name: "User Experience", percentage: 65 },
    { name: "User Experience", percentage: 65 },

  ];

  return (
    <section id="skills" className="py-8 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-around gap-4 md:mx-20 px-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-5/12">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-600">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.percentage}%</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
