'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Clock, User, ChevronRight, ShieldCheck, Briefcase, Globe, Headphones } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: "Industry-Aligned Curriculum",
    description: "Our courses are designed with direct input from industry experts to ensure you learn the most relevant and in-demand skills.",
    icon: <Briefcase className="text-purple-600" size={24} />,
    hoverIcon: <Briefcase className="text-white" size={24} />,
    bgColor: "bg-purple-600",
  },
  {
    title: "Hands-On Practical Training",
    description: "Gain real-world experience with our practical labs, simulations, and project-based learning approach.",
    icon: <BookOpen className="text-blue-600" size={24} />,
    hoverIcon: <BookOpen className="text-white" size={24} />,
    bgColor: "bg-blue-600",
  },
  {
    title: "Certified Expert Instructors",
    description: "Learn from certified professionals with 10+ years of industry experience in automation and instrumentation.",
    icon: <User className="text-emerald-600" size={24} />,
    hoverIcon: <User className="text-white" size={24} />,
    bgColor: "bg-emerald-600",
  },
  {
    title: "Flexible Learning Options",
    description: "Choose from online live sessions or self-paced learning to fit your schedule and learning style.",
    icon: <Clock className="text-amber-600" size={24} />,
    hoverIcon: <Clock className="text-white" size={24} />,
    bgColor: "bg-amber-600",
  },
  {
    title: "Global Certification",
    description: "Earn industry-recognized certifications that are valued by employers worldwide.",
    icon: <Award className="text-red-600" size={24} />,
    hoverIcon: <Award className="text-white" size={24} />,
    bgColor: "bg-red-600",
  },
  {
    title: "Placement Support",
    description: "Get dedicated career services including resume building, interview prep, and job placement assistance.",
    icon: <Globe className="text-indigo-600" size={24} />,
    hoverIcon: <Globe className="text-white" size={24} />,
    bgColor: "bg-indigo-600",
  },
];

const combinedVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    },
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};


export default function WhyUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ShieldCheck className="mr-2" size={16} />
            Why Choose Shanaya Training Institute
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Industrial Training <span className="text-purple-600">That Gets You Hired</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            At Shanaya Training Institute, we bridge the gap between academic knowledge and industry requirements with our specialized programs in automation, instrumentation, and industrial control systems.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={combinedVariants}
                whileHover="hover"
                className="relative h-full"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-full p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 overflow-hidden ${
                  hoveredCard === i ? 'shadow-lg border-transparent' : ''
                }`}>
                  {/* Animated Background */}
                  <motion.div 
                    className={`absolute inset-0 w-full h-full ${feature.bgColor} opacity-0`}
                    animate={{
                      opacity: hoveredCard === i ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-14 h-14 ${hoveredCard === i ? feature.bgColor : 'bg-gray-100'} flex items-center justify-center rounded-xl mb-6 transition-colors duration-300`}
                  >
                    {hoveredCard === i ? feature.hoverIcon : feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredCard === i ? 1 : 0,
                      x: hoveredCard === i ? 0 : -10
                    }}
                    className="absolute bottom-6 left-8"
                  >
                    <a href="#" className="flex items-center text-sm font-medium">
                      Learn more <ChevronRight className="ml-1" size={16} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <div className="text-4xl font-bold mb-2">2,000+</div>
                <div className="text-purple-100">Students Trained</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-purple-100">Industry Experts</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-purple-100">Practical Training</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-purple-100">Support</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}