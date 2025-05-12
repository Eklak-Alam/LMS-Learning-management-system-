// 'use client'
// import React from 'react';
// import { motion } from "framer-motion";
// import { FaChalkboardTeacher, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
// import Link from 'next/link';

// const instructors = [
//   {
//     id: 1,
//     name: "Dr. Sarah Johnson",
//     role: "Senior Data Scientist",
//     bio: "10+ years experience in AI and machine learning",
//     image: "/instructors/sarah.jpg",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       github: "#"
//     },
//     courses: 15,
//     rating: 4.9
//   },
//   {
//     id: 2,
//     name: "Prof. Michael Chen",
//     role: "Full Stack Developer",
//     bio: "Former Google engineer with 8 years of teaching experience",
//     image: "/instructors/michael.jpg",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       github: "#"
//     },
//     courses: 12,
//     rating: 4.8
//   },
//   // Add more instructors
// ];

// const InstructorShowcase = () => {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Meet Our Expert Instructors
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Learn from industry professionals with real-world experience
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {instructors.map((instructor) => (
//             <motion.div 
//               key={instructor.id}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
//             >
//               <div className="relative h-64 bg-gray-100">
//                 {/* Replace with your actual image */}
//                 <img 
//                   src={instructor.image} 
//                   alt={instructor.name}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.src = '/default-instructor.jpg';
//                   }}
//                 />
//                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
//                   <span className="text-yellow-500">★</span> {instructor.rating}
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
//                 <p className="text-indigo-600 mt-1">{instructor.role}</p>
//                 <p className="text-gray-600 mt-3">{instructor.bio}</p>
                
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-sm text-gray-500">
//                     {instructor.courses} courses
//                   </span>
                  
//                   <div className="flex space-x-3">
//                     <a href={instructor.social.linkedin} className="text-gray-500 hover:text-blue-600">
//                       <FaLinkedin size={18} />
//                     </a>
//                     <a href={instructor.social.twitter} className="text-gray-500 hover:text-blue-400">
//                       <FaTwitter size={18} />
//                     </a>
//                     <a href={instructor.social.github} className="text-gray-500 hover:text-gray-800">
//                       <FaGithub size={18} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link href="/instructors">
//             <Link className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
//               View All Instructors
//               <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </Link>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InstructorShowcase;