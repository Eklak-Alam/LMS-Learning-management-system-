
'use client';
import { motion } from 'framer-motion';
import { FaBookOpen, FaChalkboardTeacher, FaAward, FaUsers, FaRegLightbulb, FaCertificate } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';

const features = [
  {
    icon: <FaChalkboardTeacher className="w-8 h-8 text-blue-600" />,
    title: 'Expert Faculty',
    desc: 'Learn from industry professionals with 10+ years experience',
    delay: 0.1
  },
  {
    icon: <FaBookOpen className="w-8 h-8 text-blue-600" />,
    title: 'Comprehensive Curriculum',
    desc: 'Courses designed to meet current industry standards',
    delay: 0.2
  },
  {
    icon: <FaAward className="w-8 h-8 text-blue-600" />,
    title: 'ISO 9001:2015 Certified',
    desc: 'Internationally recognized quality management system',
    delay: 0.3
  },
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600" />,
    title: 'Placement Support',
    desc: '90% placement rate with top companies',
    delay: 0.4
  },
  {
    icon: <FaRegLightbulb className="w-8 h-8 text-blue-600" />,
    title: 'Practical Training',
    desc: 'Hands-on projects and real-world simulations',
    delay: 0.5
  },
  {
    icon: <FaCertificate className="w-8 h-8 text-blue-600" />,
    title: 'Certification',
    desc: 'Industry-recognized certificates upon completion',
    delay: 0.6
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      {/* Hero Banner with Enhanced Gradient */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/30"
            >
              <FaAward className="mr-2" />
              <span className="font-medium">Shanaya Training Institute Pvt Ltd - ISO 9001:2015 Certified</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-bold mb-6"
            >
              Shanaya Training Institute
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Empowering careers through quality education since 2010
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-16 text-gray-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.91,111.31,208.45,98.57c65.87-12.4,108-43.49,112.94-42.13Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section with Enhanced Design */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl aspect-video overflow-hidden shadow-xl border border-blue-200/50">
              {/* Placeholder for institute image with gradient background */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5"></div>
                <GiGraduateCap className="w-24 h-24 text-blue-600" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center">
                <FaAward className="text-yellow-500 text-2xl mr-2" />
                <div>
                  <p className="font-bold text-sm">Certified</p>
                  <p className="text-xs">ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About Our Institute
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Shanaya Training Institute Pvt Ltd is a premier educational institution committed to delivering excellence in professional training and skill development.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              With our ISO 9001:2015 certification, we maintain the highest standards in education quality, ensuring our students receive world-class training.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-3.5 rounded-lg font-medium transition-all"
              >
                Our Courses
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.25)" }}
                className="bg-white border border-blue-600 text-blue-600 px-7 py-3.5 rounded-lg font-medium transition-all"
              >
                Contact Us
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-white to-red-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Shanaya?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional learning experiences with measurable outcomes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-blue-200 transition-all shadow-sm"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section - Single Founder Card */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-white to-red-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary behind Shanaya's success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 shadow-lg border border-blue-200/50 flex flex-col items-center text-center gap-8">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src="https://randomuser.me/api/portraits/men/60.jpg" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  Saurabh Sharma
                </h3>
                <p className="text-blue-600 font-medium mb-5">
                  Founder & Director
                </p>
                <div className="max-w-xl mx-auto">
                  <p className="text-gray-600 text-lg italic">
                    "Our mission is to bridge the gap between education and employment through quality training programs. We continuously update our curriculum to meet the evolving needs of industries."
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center space-x-4">
                  <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <FaAward className="text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <FaUsers className="text-blue-500 mr-2" />
                    <span className="text-sm font-medium">20,000+ Students</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}