'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Loader2, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import CourseData from '@/db/CourseData'

const CoursePreview = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCourses, setVisibleCourses] = useState(6)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(CourseData)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const loadMoreCourses = () => {
    setVisibleCourses(prev => prev + 3)
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const hoverCard = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      } 
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-purple-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-purple-800/40 text-purple-300 rounded-full text-sm mb-6 backdrop-blur-sm border border-purple-500/30"
            animate={{
              boxShadow: ['0 0 0px rgba(139, 92, 246, 0)', '0 0 10px rgba(139, 92, 246, 0.5)', '0 0 0px rgba(139, 92, 246, 0)'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            COURSE CATALOG
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Master New Skills
            </span>{' '}
            <span className="text-purple-400">Today</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our collection of expert-led courses designed to boost your career
          </p>
        </motion.div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
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
                {courses.slice(0, visibleCourses).map((course) => (
                  <motion.div
                    key={course.id}
                    variants={item}
                    layout
                  >
                    <motion.div
                      className="h-full bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm group"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
                        <p className="text-gray-300 mb-6 line-clamp-2">{course.description}</p>
                        
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span className="font-medium">View Course</span>
                          <ChevronRight size={18} className="ml-1" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Load More Button */}
            {visibleCourses < courses.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-16"
              >
                <motion.button
                  onClick={loadMoreCourses}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg font-medium text-white shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 transition-all"
                >
                  Load More Courses
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default CoursePreview