'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ChevronRight, BookOpen, Mail, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import CourseData from '@/db/CourseData';
import Link from 'next/link';

const CoursePreview = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // Custom easing curve
      }
    }
  };

  const hoverCard = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-br from-violet-600 via-red-200 to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Institute Header */}
        <div className="text-center mb-12">
          <motion.div 
            className="flex flex-col items-center justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Shanaya Training Institute Pvt Ltd
            </h2>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-600 mr-1" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </motion.div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.span
              className="inline-block px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-sm mb-6 border border-purple-200 font-medium"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(139, 92, 246, 0)',
                  '0 0 12px rgba(139, 92, 246, 0.3)',
                  '0 0 0px rgba(139, 92, 246, 0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              INDUSTRY-READY COURSES
            </motion.span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-purple-600">Technical Training </span>Online Programs
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical courses in PLC, Instrumentation, and Industrial Automation designed by industry experts
            </p>
          </motion.div>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
          </div>
        ) : (
          <>
            <motion.div
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
                    className="relative"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="h-full bg-white rounded-xl overflow-hidden border border-gray-200"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      variants={hoverCard}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {course.duration}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{course.title}</h3>
                        <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>

                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex items-center text-purple-600 hover:text-purple-500 transition-colors group"
                        >
                          <motion.span 
                            whileHover={{ x: 5 }} 
                            className="font-medium flex items-center"
                          >
                            View Course Details
                            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 0.1 : 0,
                        backgroundColor: 'rgba(124, 58, 237, 1)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Action Buttons */}
            <div className="mt-16 flex flex-col items-center gap-6">
              {visibleCourses < courses.length && (
                <motion.button
                  onClick={loadMoreCourses}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(124, 58, 237, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-purple-600 text-white rounded-lg font-medium shadow-lg hover:bg-purple-700 transition-all"
                >
                  Load More Courses
                </motion.button>
              )}

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Link href="/courses" className="w-full">
                  <motion.button
                    whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-3.5 bg-purple-100 text-purple-700 font-medium rounded-lg border border-purple-200 shadow hover:bg-purple-200 transition-colors"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    Browse All Courses
                  </motion.button>
                </Link>

                <Link href="mailto:sawrabh20009@gmail.com" className="w-full">
                  <motion.button
                    whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-3.5 bg-white text-purple-700 font-medium rounded-lg border border-purple-200 shadow hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
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