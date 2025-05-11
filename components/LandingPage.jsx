'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';

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
    { value: "10K+", label: "Students Enrolled" },
    { value: "200+", label: "Courses Available" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  if (!isMounted) {
    // Return simplified static version for SSR
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 text-gray-900 overflow-hidden pt-7">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 flex justify-center">
                <span className="inline-block px-4 text-lg py-1.5 bg-purple-100 text-purple-700 rounded-full font-semibold tracking-wider shadow-sm">
                  WELCOME TO SHANAYA
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your <span className="text-purple-600">Learning</span> Experience
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Shanaya LMS provides cutting-edge learning solutions with personalized pathways, interactive content, and measurable outcomes.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              {/* Placeholder for image */}
              <div className="bg-gray-200 w-full h-64 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 text-gray-900 overflow-hidden pt-7">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
              <span className="inline-block px-4 text-lg py-1.5 bg-purple-100 text-purple-700 rounded-full font-semibold tracking-wider shadow-sm">
                WELCOME TO SHANAYA
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              Transform Your <span className="text-purple-600">Learning</span> Experience
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
              variants={fadeInUp}
            >
              Shanaya LMS provides cutting-edge learning solutions with personalized pathways, interactive content, and measurable outcomes.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={fadeInUp}
            >
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <span>Start Learning</span>
                <FiArrowRight className="ml-2" />
              </button>
              <button className="px-8 py-4 border border-purple-300 bg-white text-purple-700 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:bg-purple-50">
                <FiPlay className="mr-2" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <h3 className="text-2xl font-bold text-purple-600">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
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
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 w-64"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">+12 mentors</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Live Mentorship</h4>
              <p className="text-sm text-gray-500">Weekly sessions with industry experts</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}