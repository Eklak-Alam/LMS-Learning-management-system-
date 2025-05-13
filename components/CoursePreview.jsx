'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ChevronRight, BookOpen, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import CourseData from '@/db/CourseData';
import Link from 'next/link';

const CoursePreview = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState(6);

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
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const hoverCard = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-5 px-4 sm:px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-gray-100 text-purple-700 rounded-full text-sm mb-6 border border-purple-200"
            animate={{
              boxShadow: [
                '0 0 0px rgba(139, 92, 246, 0)',
                '0 0 10px rgba(139, 92, 246, 0.3)',
                '0 0 0px rgba(139, 92, 246, 0)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            COURSE CATALOG
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Master New Skills <span className="text-purple-600">Today</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of expert-led courses designed to boost your career
          </p>
        </motion.div>

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
                {courses.slice(0, visibleCourses).map(course => (
                  <motion.div key={course.id} variants={item} layout>
                    <motion.div
                      className="h-full bg-white rounded-xl overflow-hidden border border-gray-200 group shadow hover:shadow-xl transition"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      variants={hoverCard}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{course.title}</h3>
                        <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>

                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex items-center text-purple-600 hover:text-purple-500 transition-colors"
                        >
                          <motion.span whileHover={{ x: 5 }} className="font-medium flex items-center">
                            View Details
                            <ChevronRight size={18} className="ml-1" />
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Action Buttons Below */}
            <div className="mt-20 flex flex-col items-center gap-6">
              {visibleCourses < courses.length && (
                <motion.button
                  onClick={loadMoreCourses}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-purple-600 text-white rounded-lg font-medium shadow-md hover:bg-purple-500 transition-all"
                >
                  Load More Courses
                </motion.button>
              )}

              {/* Button Group */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/courses">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center px-7 py-3 bg-purple-100 text-purple-700 font-semibold rounded-lg border border-purple-200 shadow hover:bg-purple-200 transition-colors text-base"
                  >
                    <BookOpen size={20} className="mr-2" />
                    See All Courses
                  </motion.button>
                </Link>

                <Link href="mailto:sawrabh20009@gmail.com">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center px-7 py-3 bg-white text-purple-700 font-semibold rounded-lg border border-purple-200 shadow hover:bg-purple-50 transition-colors text-base"
                  >
                    <Mail size={20} className="mr-2" />
                    Connect to Us
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
