'use client'
import { motion } from 'framer-motion'
import { Play, Star, Users } from 'lucide-react'

const Trusted = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gray-900">
      {/* Background with subtle animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/classroom-bg.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/95 via-purple-950/80 to-purple-950/95" />
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Trusted By Section with Student Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-purple-900/40 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30 mb-4">
            <Users className="w-5 h-5 text-purple-300 mr-2" />
            <span className="text-purple-300 font-medium">TRUSTED BY 25,000+ STUDENTS</span>
          </div>
          
          {/* Student testimonials rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center mt-4"
          >
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-300">4.9/5 from 2,800+ reviews</span>
          </motion.div>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Animated Play Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-8 cursor-pointer shadow-lg shadow-purple-700/50 hover:shadow-purple-700/70 transition-all"
          >
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 transition-transform group-hover:scale-110" />
            
            {/* Pulsing ring effect */}
            <motion.div 
              className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-0"
              animate={{
                scale: [1, 1.3],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>

          {/* Headline with animated gradient text */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Start Your Learning Journey Today
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 mb-8 max-w-xl mx-auto"
          >
            Join thousands of students who have transformed their careers with our courses
          </motion.p>

          {/* Get Started Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg font-medium text-white shadow-xl shadow-purple-700/30 hover:shadow-purple-700/50 transition-all flex items-center"
          >
            <span>Get Started</span>
            <svg 
              className="w-5 h-5 ml-2" 
              viewBox="0 0 24 24"
              fill="none"
            >
              <motion.path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Trusted