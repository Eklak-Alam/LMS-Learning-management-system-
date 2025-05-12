'use client'
import { motion } from 'framer-motion'
import { Play, Star, Users } from 'lucide-react'

const Trusted = () => {

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-white text-gray-900">
      {/* Background Image with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0">
        <img 
          src="https://www.thecttl.org/wp-content/uploads/2020/12/Parent-Tips-Talking-about-grades-scaled.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60" // Adding opacity to image
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* TRUSTED BY Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-gray-200 shadow-sm mb-4">
            <Users className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-gray-700 font-medium tracking-wide">TRUSTED BY 25,000+ STUDENTS</span>
          </div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center mt-2"
          >
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 text-sm">4.9/5 rating from 2,800+ reviews</span>
          </motion.div>
        </motion.div>

        {/* Call To Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Play Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-8 cursor-pointer shadow-md hover:shadow-lg transition"
          >
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-0"
              animate={{ scale: [1, 1.3], opacity: [0, 0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Start Your Learning Journey Today
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl"
          >
            Empower your future with in-demand tech skills taught by industry experts.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg font-semibold shadow-md flex items-center transition"
          >
            <a href='/courses'>Get Started</a>
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
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
