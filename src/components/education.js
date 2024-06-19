// import React from 'react';

// const Education = () => {
//   return (
//     <section id="education" className="py-20 bg-gray-200">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900">Education</h2>
//         <div className="mt-8 space-y-8">
//           {/* Degree 1 */}
//           <div className="bg-white rounded-md p-4">
//             <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
//             <p className="text-gray-700">University of Technology, 2014 - 2018</p>
//             <p className="mt-2 text-gray-700">Graduated with Honors, focused on software development and UI/UX design.</p>
//           </div>
//           {/* Degree 2 */}
//           <div className="bg-white rounded-md p-4">
//             <h3 className="text-xl font-semibold">Certified UX Designer</h3>
//             <p className="text-gray-700">Design Institute, 2019</p>
//             <p className="mt-2 text-gray-700">Completed a comprehensive UX design certification program.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Education;

import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900">Education</h2>
        <div className="mt-8 space-y-8">
          {/* Degree 1 */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-700">University of Technology, 2014 - 2018</p>
            <p className="mt-4 text-gray-700">Graduated with Honors, focused on software development and UI/UX design.</p>
          </div>
          {/* Degree 2 */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">Certified UX Designer</h3>
            <p className="text-gray-700">Design Institute, 2019</p>
            <p className="mt-4 text-gray-700">Completed a comprehensive UX design certification program.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

