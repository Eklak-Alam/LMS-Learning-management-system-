'use client'
import { motion } from 'framer-motion'
import { BookOpen, Users, Monitor, Award, Clock, MessageSquare, CheckCircle } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Comprehensive Courses",
      description: "Structured curriculum covering all major subjects with expert-created content and regular updates.",
      features: [
        "100+ courses available",
        "Beginner to advanced levels",
        "Downloadable resources"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Live Classes",
      description: "Interactive sessions with experienced educators in virtual classrooms with real-time collaboration.",
      features: [
        "Small batch sizes",
        "Doubt solving sessions",
        "Recordings available"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-indigo-600" />,
      title: "Online Platform",
      description: "State-of-the-art learning management system accessible from any device, anytime.",
      features: [
        "Progress tracking",
        "Mobile app available",
        "24/7 access"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Certification",
      description: "Recognized certificates upon course completion to boost your academic profile.",
      features: [
        "Industry-recognized",
        "Digital & physical copies",
        "Verification portal"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with morning, evening and weekend batch options available.",
      features: [
        "Self-paced options",
        "Missed class recovery",
        "Holiday schedules"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
      title: "Mentorship",
      description: "1:1 guidance from subject matter experts to help you achieve your learning goals.",
      features: [
        "Personalized roadmaps",
        "Career counseling",
        "Regular feedback"
      ]
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // Custom easing for smoother animation
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardHover = {
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-100 to-gray-200 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-gray-300 text-black rounded-full text-sm mb-6 backdrop-blur-sm border border-white/20"
              animate={{
                boxShadow: ['0 0 0px rgba(255, 255, 255, 0)', '0 0 10px rgba(255, 255, 255, 0.3)', '0 0 0px rgba(255, 255, 255, 0)'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              OUR SERVICES
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-black">
                Transformative 
              </span>{' '}
              <span className="text-indigo-700">Learning Experiences</span>
            </h1>
            
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Empowering students with innovative teaching methodologies and cutting-edge educational resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-50 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  
                  <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Ready to transform your learning experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have achieved academic excellence with our programs
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px -5px rgba(79, 70, 229, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg font-medium text-white shadow-md hover:shadow-lg transition-all"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage