// import React from 'react';

// const Resume = () => {
//   const education = [
    
//     {
//       title: " Junior Software Developer",
//       institution: "Fremont Associates",
//       location: "Nairobi, Kenya",
//       period: "Present",
//       description: "Specialized in user-centered design and front-end development."
//     }
//   ];

//   const experience = [
//     {
//       title: "Full-Stack Developer",
//       company: "Webacha Company Limited",
//       location: "Webuye,Kenya",
//       period: "2023 - 2024",
//       description: "Developed and maintained the front-end of various web applications, focusing on user experience and performance."
//     },
//     {
//       title: "Software Developer Attache",
//       company: "Coretec Solutions Africa",
//       location: "Nairobi,Kenya",
//       period: "2022 - 2023",
//       description: "Created intuitive and visually appealing user interfaces for web and mobile applications."
//     },
//     {
//       title: "Bachelor of Science in Computer Science",
//       institution: "Moi University",
//       location: "Eldoret, Kenya",
//       period: "2018-2023",
//       description: "Focusing on software development,Data structures and algorithms design and development, and UI/UX design."
//     },
//   ];

//   return (
//     <section id="resume" className="py-32 bg-white flex justify-around ">
//       <div className="container mx-20 relative">
//         <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 text-center">Education & Experience</h2>
//         <h2 className="text-5xl font-bold text-gray-900 text-center">My Resume</h2>
//         <p className="text-sm text-gray-600 mt-4 text-center md:px-32">
//         Showcasing my journey in Software Engineering and Software Development, this resume highlights my professional experiences, educational background, and key skills. Explore the roles I've undertaken, the projects I've contributed to, and the continuous learning path that fuels my passion for creating exceptional digital experiences.
//         </p>
//         <div className="mt-8 ">
//           <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
//           {education.concat(experience).map((item, index) => (
//             <div key={index} className={` flex justify-around items-center w-full ${index % 2 === 1 ? "flex-row-reverse" : "text-right"}`}>
//               <div className="w-6/12">
//                 <div className=" rounded-lg p-4 mb-6">
//                   <h4 className="text-xl font-bold text-gray-900 mt-4">{item.title}</h4>
//                   <p className="text-gray-400">{item.institution || item.company} | {item.location}</p>
//                   <p className={`text-blue-500 mt-2`}>{item.period}</p>
//                   <p className="text-gray-600 mt-2">{item.description}</p>
//                 </div>
//               </div>
//               <div className="w-6/12 hidden md:block z-40">
//                 <div className={`h-4 w-4 rounded-full bg-blue-500 flex mb-16 items-center justify-center text-white  ${index % 2 === 1 ? "ml-auto" : "mr-auto"}`}>
//                   <span className="text-sm">•</span>
//                 </div>
//               </div>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;

import React from 'react';

const Resume = () => {
  const education = [
    {
      title: "Full-Stack Software Developer",
      institution: "Fremont Associates",
      location: "Nairobi, Kenya",
      period: "Present",
      description: "Specialized in user-centered design and front-end development."
    }
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Webacha Company Limited",
      location: "Webuye, Kenya",
      period: "2023 - 2024",
      description: "Developed and maintained the front-end of various web applications, focusing on user experience and performance."
    },
    {
      title: "Software Developer Attache",
      company: "Coretec Solutions Africa",
      location: "Nairobi, Kenya",
      period: "2022 - 2023",
      description: "Created intuitive and visually appealing user interfaces for web and mobile applications."
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
    <section id="resume" className="py-20 bg-white flex justify-around">
      <div className="container mx-20 relative">
        <h2 className="text-sm font-bold text-blue-500 uppercase mb-2 text-center">Education & Experience</h2>
        <h2 className="text-5xl font-bold text-gray-900 text-center">My Resume</h2>
        <p className="text-gray-600 mt-4 text-center md:px-32">
          Showcasing my journey in Software Engineering and Software Development, this resume highlights my professional experiences, educational background, and key skills. Explore the roles I've undertaken, the projects I've<br/> contributed to, and the continuous learning path that fuels my passion <br/>for creating exceptional digital experiences.
        </p>
        <div className="mt-8 relative">
          <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {education.concat(experience).map((item, index) => (
            <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 1 ? 'flex-row-reverse' : 'text-right'}`}>
              <div className="w-6/12">
                <div className={`bg-white rounded-lg p-4 ${index % 2 === 1 ? 'ml-4' : 'mr-4'}`}>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-400">{item.institution || item.company} | {item.location}</p>
                  <p className={`text-blue-500 mt-2`}>{item.period}</p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              <div className="w-0/12 flex justify-center relative">
                <div className={` h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-white absolute left-1/2 transform -translate-x-1/2`}>
                  <span className="text-sm">•</span>
                </div>
              </div>
              {/* <div className="w-5/12 text-left hidden md:block">
                <div className={`bg-white rounded-lg p-4 shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-400">{item.institution || item.company} | {item.location}</p>
                  <p className="text-blue-500 mt-2">{item.period}</p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
