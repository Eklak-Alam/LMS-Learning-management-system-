'use client';
import { Check, Search, UserPlus, BookOpen, Award, ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const processSteps = [
  {
    id: 1,
    icon: <Search className="h-8 w-8" />,
    title: 'Find Your Course',
    description: 'Explore our specialized courses in industrial automation, PLC, and instrumentation design.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 2,
    icon: <UserPlus className="h-8 w-8" />,
    title: 'Enroll & Register',
    description: 'Quick registration with flexible payment options for students and professionals.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 3,
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Learn at Your Pace',
    description: 'Live interactive sessions with lifetime access to course materials.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    icon: <Award className="h-8 w-8" />,
    title: 'Get Certified',
    description: 'Earn industry-recognized certificates to boost your career prospects.',
    color: 'bg-purple-100 text-purple-600'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Process = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-blue-600 via-white to-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4"
            variants={fadeIn}
          >
            <Rocket className="mr-2" size={16} />
            Start Your Learning Journey
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeIn}
          >
            How Our <span className="text-purple-600">Training Works</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Get industry-ready with our proven 4-step process designed for aspiring automation and instrumentation engineers.
          </motion.p>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative"
        >
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1.5 bg-gray-200 z-0 transform -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative"
              >
                <div className={`h-full p-8 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 overflow-hidden ${
                  hoveredStep === step.id ? 'shadow-lg border-transparent' : ''
                }`}>
                  {/* Animated Background */}
                  <motion.div 
                    className={`absolute inset-0 w-full h-full ${step.color.replace('100', '500')} opacity-0`}
                    animate={{
                      opacity: hoveredStep === step.id ? 0.05 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Step Number */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 ${step.color.replace('100', '500')} text-white font-bold flex items-center justify-center rounded-full shadow-lg`}>
                    {step.id}
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`w-16 h-16 ${step.color} flex items-center justify-center rounded-xl mb-6 mx-auto transition-colors duration-300`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredStep === step.id ? 1 : 0,
                      x: hoveredStep === step.id ? 0 : -10
                    }}
                    className="absolute bottom-6 left-8"
                  >
                    {/* <Link href="#" className="flex items-center text-sm font-medium">
                      Learn more <ArrowRight className="ml-1" size={16} />
                    </Link> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 text-white"
        >
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl">
              Join professionals from top companies who've upgraded their skills with our industry-focused training programs.
            </p>

            <ul className="space-y-3 text-purple-50">
              {[
                'Hands-on PLC and instrumentation training',
                'Live projects with industrial applications',
                'Placement assistance and interview prep',
                'Flexible payment options available'
              ].map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Check className="h-5 w-5 text-purple-200 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/3 w-full">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <p className="text-xl font-bold mb-2">Limited Time Offer</p>
              <p className="text-purple-100 text-sm mb-6">Enroll now and get 1-month free mentorship</p>
              <Link 
                href='/courses' 
                className="btn-primary w-full py-3 px-6 rounded-lg bg-white text-purple-600 font-medium flex items-center justify-center hover:bg-purple-50 transition-colors"
              >
                Browse Courses <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;