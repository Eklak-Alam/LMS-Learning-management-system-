'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, BookOpen, BarChart2, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import CourseData from '@/db/CourseData'

const CourseDetail = ({ params }) => {
  const { slug } = params
  const router = useRouter()
  const course = CourseData.find(c => c.slug === slug)

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Course not found</h1>
          <button
            onClick={() => router.push('/courses')}
            className="px-6 py-3 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition-colors flex items-center mx-auto"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Courses
          </button>
        </div>
      </div>
    )
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-2/3"
            >
              <button
                onClick={() => router.push('/courses')}
                className="flex items-center text-purple-300 hover:text-purple-100 mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2" size={18} />
                Back to Courses
              </button>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                {course.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Clock className="mr-2 text-purple-400" size={18} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <BookOpen className="mr-2 text-purple-400" size={18} />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <BarChart2 className="mr-2 text-purple-400" size={18} />
                  <span>{course.level}</span>
                </div>
                {course.students && (
                  <div className="flex items-center text-gray-300">
                    <Users className="mr-2 text-purple-400" size={18} />
                    <span>{course.students}+ students</span>
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/3"
            >
              <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category</span>
                      <span className="text-white">{course.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Instructor</span>
                      <span className="text-white">{course.instructor || 'Expert Instructor'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Updated</span>
                      <span className="text-white">{course.updated || 'Recently'}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What You'll Learn</h2>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningPoints?.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                        ✓
                      </div>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Course Content</h2>
              <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                {course.modules?.map((module, index) => (
                  <div key={index} className="border-b border-gray-700/50 last:border-b-0">
                    <div className="p-6 hover:bg-gray-700/20 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-white">
                          Module {index + 1}: {module.title}
                        </h3>
                        <span className="text-gray-400 text-sm">{module.lessons} lessons</span>
                      </div>
                      {module.description && (
                        <p className="mt-2 text-gray-300">{module.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">About This Course</h2>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <div className="prose prose-invert max-w-none">
                  {course.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-gray-300">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail