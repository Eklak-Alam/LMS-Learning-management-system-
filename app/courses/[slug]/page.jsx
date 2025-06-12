'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, BookOpen, Users, Check, Zap, Award, Video, Mail, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import CourseData from '@/db/CourseData'
import { use } from 'react';

const CourseDetail = ({ params }) => {
  const { slug } = use(params);
  const router = useRouter()
  const course = CourseData.find(c => c.slug === slug) // Changed to use id since some slugs are empty

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center p-6 max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Course not found</h1>
          <button
            onClick={() => router.push('/courses')}
            className="px-6 py-3 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors flex items-center mx-auto shadow-md"
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <button
                onClick={() => router.push('/courses')}
                className="flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors font-medium"
              >
                <ArrowLeft className="mr-2" size={18} />
                Back to Courses
              </button>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                {course.title}
              </h1>

              {course.description && (
                <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <p className="text-gray-700">{course.description}</p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <Clock className="mr-2 text-indigo-500" size={18} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <BookOpen className="mr-2 text-indigo-500" size={18} />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <Video className="mr-2 text-indigo-500" size={18} />
                  <span>{course.mode}</span>
                </div>
                {course.students > 0 && (
                  <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Users className="mr-2 text-indigo-500" size={18} />
                    <span>{course.students}+ students</span>
                  </div>
                )}
                {course.available && (
                  <div className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    <Zap className="mr-2" size={18} />
                    <span>{course.available}</span>
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                {course.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Course Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="mr-2 mt-1 text-indigo-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Certificate upon completion</span>
                    </div>
                    {course.learningPoints.slice(1, 4).map((point, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="mr-2 mt-1 text-indigo-500 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <a href='https://wa.me/919990111835' target='_blank' rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 rounded-md text-white transition-colors shadow-md">
                      <Phone size={18} />
                      Contact via WhatsApp
                    </a>
                    <a href='mailto:sawrabh20009@gmail.com' className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors shadow-md">
                      <Mail size={18} />
                      Email for Details
                    </a>
                  </div>
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">What You'll Learn</h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningPoints?.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                        <Check size={18} />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Course Modules</h2>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                {course.modules?.map((module, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                    <details className="group">
                      <summary className="p-6 cursor-pointer list-none">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                            Module {index + 1}: {module.title}
                          </h3>
                          <span className="text-gray-500 text-sm">{module.lessons} lessons</span>
                        </div>
                        {module.description && (
                          <p className="mt-2 text-gray-600">{module.description}</p>
                        )}
                      </summary>
                      <div className="px-6 pb-6 pt-2">
                        {module.covered && (
                          <ul className="space-y-2">
                            {module.covered.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-indigo-500 mr-2">•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </motion.div>

            {course.content && (
              <motion.div variants={item}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">About This Course</h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="prose max-w-none">
                    {course.content.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 text-gray-700">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contact CTA */}
            <motion.div variants={item} className="mt-12">
              <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-800">Ready to Enroll?</h2>
                <p className="text-lg text-indigo-700 mb-6">Get started with this professional training today</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href='https://wa.me/919990111835' 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white transition-colors shadow-md"
                  >
                    <Phone size={18} />
                    WhatsApp: {course.meta?.contact?.whatsapp}
                  </a>
                  <a 
                    href={`mailto:sawrabh20009@gmail.com`} 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors shadow-md"
                  >
                    <Mail size={18} />
                    Email: {course.meta?.contact?.email}
                  </a>
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