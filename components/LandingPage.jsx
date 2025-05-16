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