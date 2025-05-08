'use client'
import { motion } from 'framer-motion'
import { BookOpen, Users, Monitor, Award, Clock, MessageSquare, CheckCircle } from 'lucide-react'

const Page = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      title: "Comprehensive Courses",
      description: "Structured curriculum covering all major subjects with expert-created content and regular updates.",
      features: [
        "100+ courses available",
        "Beginner to advanced levels",
        "Downloadable resources"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Live Classes",
      description: "Interactive sessions with experienced educators in virtual classrooms with real-time collaboration.",
      features: [
        "Small batch sizes",
        "Doubt solving sessions",
        "Recordings available"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
      title: "Online Platform",
      description: "State-of-the-art learning management system accessible from any device, anytime.",
      features: [
        "Progress tracking",
        "Mobile app available",
        "24/7 access"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Certification",
      description: "Recognized certificates upon course completion to boost your academic profile.",
      features: [
        "Industry-recognized",
        "Digital & physical copies",
        "Verification portal"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with morning, evening and weekend batch options available.",
      features: [
        "Self-paced options",
        "Missed class recovery",
        "Holiday schedules"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-purple-800/40 text-purple-300 rounded-full text-sm mb-6 backdrop-blur-sm border border-purple-500/30"
              animate={{
                boxShadow: ['0 0 0px rgba(139, 92, 246, 0)', '0 0 10px rgba(139, 92, 246, 0.5)', '0 0 0px rgba(139, 92, 246, 0)'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              OUR SERVICES
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Transformative 
              </span>{' '}
              <span className="text-purple-400">Learning Experiences</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-purple-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your learning experience?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have achieved academic excellence with our programs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg font-medium text-white shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 transition-all"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page