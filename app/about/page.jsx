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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10" />
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
              className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <FaAward className="mr-2" />
              <span>ISO 9001:2015 Certified</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold mb-4"
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
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-blue-100 rounded-xl aspect-video overflow-hidden shadow-lg">
              {/* Placeholder for institute image */}
              <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                <GiGraduateCap className="w-20 h-20 text-blue-600" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
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
                whileHover={{ y: -5 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Our Courses
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium"
              >
                Contact Us
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
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

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind Shanaya's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center text-center md:text-left gap-6"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                <img 
                  src="https://randomuser.me/api/portraits/men/60.jpg" 
                  alt="Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Rajesh Sharma
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  Founder & Director
                </p>
                <p className="text-gray-600">
                  "Our mission is to bridge the gap between education and employment through quality training programs."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row items-center text-center md:text-left gap-6"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Academic Head" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Priya Patel
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  Academic Head
                </p>
                <p className="text-gray-600">
                  "We continuously update our curriculum to meet the evolving needs of industries."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
