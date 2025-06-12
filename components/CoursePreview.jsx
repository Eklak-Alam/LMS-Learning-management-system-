'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ChevronRight, BookOpen, Mail, Check, Star, Award, Zap, ArrowRight, Clock, Users, BarChart2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import CourseData from '@/db/CourseData';
import Link from 'next/link';

const CoursePreview = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(CourseData);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const loadMoreCourses = () => {
    setVisibleCourses(prev => prev + 3);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const hoverCard = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      y: 0
    },
    hover: {
      scale: 1.02,
      y: -8,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const buttonHover = {
    rest: { 
      backgroundPosition: "0% 50%",
      boxShadow: "0 4px 12px rgba(124, 58, 237, 0.2)"
    },
    hover: { 
      backgroundPosition: "100% 50%",
      boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)"
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-300 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Institute Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="flex flex-col items-center justify-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Award className="h-7 w-7 text-purple-600" />
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Shanaya Training Institute Pvt Ltd
              </motion.h2>
            </div>
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Check className="h-4 w-4 text-green-500" />
              <span>ISO 9001:2015 Certified</span>
              <Star className="h-4 w-4 text-yellow-400 ml-2" />
              <span>4.9/5 (128 Reviews)</span>
            </motion.div>
          </motion.div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm mb-6 border border-purple-100 font-medium relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(139, 92, 246, 0)',
                  '0 0 15px rgba(139, 92, 246, 0.4)',
                  '0 0 0px rgba(139, 92, 246, 0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap className="h-4 w-4 mr-2 text-purple-600 fill-current" />
              <span>INDUSTRY-READY COURSES</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Technical Training </span>
              <br className="sm:hidden" />
              <span>Online Programs</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Practical courses in PLC, Instrumentation, and Industrial Automation designed by industry experts
            </motion.p>
          </motion.div>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Loader2 className="h-16 w-16 text-purple-500" />
            </motion.div>
          </div>
        ) : (
          <>
            <motion.div
              ref={containerRef}
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {courses.slice(0, visibleCourses).map((course, index) => (
                  <motion.div 
                    key={course.id} 
                    variants={item} 
                    layout
                    className="relative group"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="h-full bg-white rounded-2xl overflow-hidden border border-gray-100 relative"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      variants={hoverCard}
                    >
                      <Link href={`/courses/${course.slug}`} className="block">
                        <div className="relative h-52 overflow-hidden">
                          <motion.img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            variants={imageHover}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {course.title}
                            </h3>
                            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">
                              {course.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500 space-x-3">
                              <span className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                {course.rating}
                              </span>
                              <span className="flex items-center">
                                <Users className="h-4 w-4 text-blue-400 mr-1" />
                                {course.students}+
                              </span>
                              <span className="flex items-center">
                                <BarChart2 className="h-4 w-4 text-green-400 mr-1" />
                                {course.completionRate}%
                              </span>
                            </div>
                            <motion.div
                              className="flex items-center text-purple-600 hover:text-purple-500 transition-colors font-medium"
                              whileHover={{ x: 5 }}
                            >
                              <span className="flex items-center text-sm">
                                View Details
                                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </motion.div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>

                    {/* Premium hover effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 0.15 : 0,
                        background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.4) 0%, rgba(124, 58, 237, 0) 70%)"
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Action Buttons */}
            <div className="mt-20 flex flex-col items-center gap-6">
              {visibleCourses < courses.length && (
                <motion.button
                  onClick={loadMoreCourses}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  variants={buttonHover}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg relative overflow-hidden group"
                  style={{
                    backgroundSize: "200% 200%",
                    backgroundImage: "linear-gradient(45deg, #7c3aed, #6d28d9, #5b21b6, #7c3aed)"
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Load More Courses
                    <motion.span
                      className="ml-2"
                      animate={{
                        x: [0, 5, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity
                        }
                      }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.span>
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    initial={{ opacity: 0 }}
                  />
                </motion.button>
              )}

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <Link href="/courses" className="w-full">
                  <motion.button
                    whileHover={{ 
                      y: -3, 
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                      backgroundColor: '#f5f3ff'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-4 bg-white text-purple-700 font-bold rounded-xl border border-purple-100 shadow hover:bg-purple-50 transition-all group"
                  >
                    <BookOpen className="h-5 w-5 mr-3 text-purple-600 group-hover:scale-110 transition-transform" />
                    Browse All Courses
                  </motion.button>
                </Link>

                <Link href="mailto:sawrabh20009@gmail.com" className="w-full">
                  <motion.button
                    whileHover={{ 
                      y: -3, 
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                      backgroundColor: '#fafafa'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-100 shadow hover:bg-gray-50 transition-all group"
                  >
                    <Mail className="h-5 w-5 mr-3 text-gray-600 group-hover:scale-110 transition-transform" />
                    Contact Support
                  </motion.button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CoursePreview;