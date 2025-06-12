'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function LandingPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const stats = [
    { value: "20K+", label: "Students Enrolled" },
    { value: "15+", label: "Courses Available" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 flex justify-center">
                <span className="inline-block px-4 text-lg py-1.5 bg-purple-100 text-purple-700 rounded-full font-semibold tracking-wider shadow-sm">
                  WELCOME TO SHANAYA Pvt Ltd
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your <span className="text-purple-600">Learning</span> Experience
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Shanaya Training Institute Pvt Ltd provides cutting-edge learning solutions with personalized pathways.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-200 w-full h-64 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:pt-0 pt-10 bg-gradient-to-br from-blue-600 via-white to-red-300 text-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-100/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200/20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-8xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
              <span className="inline-block px-4 text-lg py-1.5 bg-purple-100 text-purple-700 rounded-full font-semibold tracking-wider shadow-sm">
                WELCOME TO SHANAYA TRAINING INSTITUTE
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              Transform Your <span className="text-purple-600">Learning</span> Experience
            </motion.h1>

            <motion.p 
              className="text-lg xl:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
              variants={fadeInUp}
            >
              Shanaya Training Institute Pvt Ltd - An ISO 9001:2015 Certified India's Best Engineering ONLINE Training Institute with experienced faculty from top MNCs, flexible timing, and affordable pricing.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={fadeInUp}
            >
              <Link 
                href="/courses" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <span>Start Learning</span>
                <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                href="https://www.youtube.com/@shanayatraining" 
                className="px-8 py-4 border border-purple-300 bg-white text-purple-700 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:bg-purple-50 hover:border-purple-400"
              >
                <FiPlay className="mr-2" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-purple-200"
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    borderColor: "rgba(124, 58, 237, 0.5)"
                  }}
                >
                  <h3 className="text-2xl xl:text-3xl font-bold text-purple-600">{stat.value}</h3>
                  <p className="text-sm xl:text-base text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning together"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </div>
            
            {/* Certification Badge */}
            {/* <motion.div 
              className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-xl border border-gray-200 w-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">ISO 9001:2015</h4>
                  <p className="text-sm text-gray-500">Certified Institute</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
















// 'use client'
// import { useState, useEffect } from 'react';

// // Mock NewCourseNotice component
// const NewCourseNotice = () => (
//   <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 rounded-2xl shadow-lg mb-6 animate-pulse">
//     <div className="flex items-center justify-center">
//       <span className="font-semibold">🔥 New Course Alert: Advanced React Development</span>
//     </div>
//   </div>
// );

// export default function LandingPage() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsMounted(true);
    
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const stats = [
//     { 
//       value: "2,500+", 
//       label: "Students Enrolled",
//       icon: "👥",
//       description: "Active learners worldwide",
//       gradient: "from-blue-500 to-purple-600"
//     },
//     { 
//       value: "15+", 
//       label: "Courses Available",
//       icon: "📚",
//       description: "Industry-focused programs",
//       gradient: "from-green-500 to-teal-600"
//     },
//     { 
//       value: "99%", 
//       label: "Satisfaction Rate",
//       icon: "⭐",
//       description: "Student success stories",
//       gradient: "from-yellow-500 to-orange-600"
//     },
//     { 
//       value: "24/7", 
//       label: "Support Available",
//       icon: "🚀",
//       description: "Round-the-clock assistance",
//       gradient: "from-pink-500 to-red-600"
//     }
//   ];

//   const features = [
//     "Expert Faculty from Top MNCs",
//     "Flexible Learning Schedule",
//     "Industry-Recognized Certifications",
//     "Hands-on Project Experience"
//   ];

//   if (!isMounted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-32 bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-900 overflow-hidden relative">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Dynamic gradient orbs */}
//         <div 
//           className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
//           style={{
//             background: 'linear-gradient(45deg, #8B5CF6, #06B6D4)',
//             left: mousePosition.x * 0.02 + 'px',
//             top: mousePosition.y * 0.02 + 'px',
//           }}
//         />
//         <div 
//           className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl transition-all duration-700 ease-out"
//           style={{
//             background: 'linear-gradient(-45deg, #F59E0B, #EF4444)',
//             right: mousePosition.x * 0.015 + 'px',
//             bottom: mousePosition.y * 0.015 + 'px',
//           }}
//         />
        
//         {/* Floating particles */}
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-bounce"
//             style={{
//               left: `${10 + i * 15}%`,
//               top: `${20 + (i % 3) * 30}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + i}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-8 lg:pr-8">
//             {/* Badge */}
//             <div className="flex justify-center lg:justify-start">
//               <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full shadow-sm">
//                 <span className="text-sm font-semibold text-purple-700 tracking-wide">
//                   🏆 ISO 9001:2015 CERTIFIED INSTITUTE
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <div className="text-center lg:text-left">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
//                 Transform Your{' '}
//                 <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
//                   Learning
//                 </span>{' '}
//                 Experience
//               </h1>
              
//               <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                 India's premier online engineering training institute with expert faculty from top MNCs, 
//                 flexible scheduling, and industry-recognized certifications.
//               </p>
//             </div>

//             {/* Feature Pills */}
//             <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-300 hover:bg-purple-50"
//                 >
//                   {feature}
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
//                 <span className="flex items-center justify-center">
//                   Start Learning Today
//                   <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </span>
//               </button>
              
//               <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
//                 <span className="flex items-center justify-center">
//                   <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Watch Demo
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="space-y-6 lg:pl-8">
//             <NewCourseNotice />
            
//             {/* Hero Image */}
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
//               <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
//                   alt="Students learning together"
//                   className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
//                 />
                
//                 {/* Floating stats card */}
//                 <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
//                       <span className="text-white font-bold text-xl">✓</span>
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-800">98% Success Rate</p>
//                       <p className="text-sm text-gray-500">Job Placements</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Stats Section */}
//         <div className="mt-20 lg:mt-32">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Why Students Choose{' '}
//               <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                 Shanaya
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Join thousands of successful professionals who transformed their careers with our comprehensive training programs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="group relative"
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Card */}
//                 <div className={`
//                   relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 
//                   transition-all duration-500 ease-out transform
//                   ${hoveredCard === index ? 'scale-105 shadow-2xl -translate-y-2' : 'hover:scale-102 hover:shadow-xl'}
//                 `}>
                  
//                   {/* Gradient overlay */}
//                   <div className={`
//                     absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 rounded-3xl
//                     transition-all duration-500 group-hover:opacity-5
//                   `} />
                  
//                   {/* Icon */}
//                   <div className="text-center mb-4">
//                     <div className={`
//                       inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4
//                       bg-gradient-to-br ${stat.gradient} text-white text-2xl font-bold
//                       transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
//                     `}>
//                       {stat.icon}
//                     </div>
//                   </div>
                  
//                   {/* Stats */}
//                   <div className="text-center space-y-2">
//                     <h3 className={`
//                       text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent
//                       transform transition-all duration-300 group-hover:scale-110
//                     `}>
//                       {stat.value}
//                     </h3>
//                     <p className="text-lg font-semibold text-gray-800">
//                       {stat.label}
//                     </p>
//                     <p className="text-sm text-gray-500 leading-relaxed">
//                       {stat.description}
//                     </p>
//                   </div>

//                   {/* Hover indicator */}
//                   <div className={`
//                     absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 
//                     bg-gradient-to-r ${stat.gradient} rounded-full
//                     transition-all duration-300 group-hover:w-20
//                   `} />
//                 </div>

//                 {/* Floating decoration */}
//                 <div className={`
//                   absolute -top-2 -right-2 w-6 h-6 rounded-full
//                   bg-gradient-to-br ${stat.gradient} opacity-0
//                   transition-all duration-500 group-hover:opacity-100 group-hover:scale-125
//                   animate-pulse
//                 `} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-20 text-center">
//           <p className="text-gray-500 mb-8">Trusted by students from</p>
//           <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
//             {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'].map((company, index) => (
//               <div
//                 key={index}
//                 className="px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-700 hover:shadow-md transition-all duration-300"
//               >
//                 {company}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }