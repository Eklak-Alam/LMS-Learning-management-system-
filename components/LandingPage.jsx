'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ChevronRight,
  Star,
  Users,
  Code,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react';

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const features = [
    { icon: <BookOpen size={20} className="text-purple-300" />, text: "100+ Expert-led Courses" },
    { icon: <Users size={20} className="text-purple-300" />, text: "10,000+ Active Students" },
    { icon: <Star size={20} className="text-purple-300" />, text: "4.9 Average Rating" },
    { icon: <Code size={20} className="text-purple-300" />, text: "Hands-on Practical Learning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-gray-900 text-white overflow-x-hidden px-2 sm:px-5 pt-3 relative">
      {/* Background Elements - Enhanced */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* Hero Section - Image on top for mobile, side-by-side for desktop */}
      <section className="container mx-auto px-2 sm:px-6 py-10 md:py-20 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.span 
            className="inline-block px-5 py-2 bg-purple-800/40 text-purple-200 rounded-full text-sm mb-6 backdrop-blur-sm border border-purple-500/30 font-semibold tracking-wide shadow-md"
            variants={fadeInUp}
          >
            IT LEARNING MADE SIMPLE
          </motion.span>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg"
            variants={fadeInUp}
          >
            Unlock Your <span className="text-purple-400">IT Potential</span>
          </motion.h1>

          <motion.p 
            className="text-gray-300 mb-8 text-lg max-w-xl leading-relaxed font-medium"
            variants={fadeInUp}
          >
            Learn the latest tech skills with easy-to-follow courses, hands-on projects, and expert support. Start your journey today!
          </motion.p>

          {/* Features - visually distinct */}
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 bg-purple-900/40 rounded-xl p-3 border border-purple-500/20 shadow-sm hover:shadow-lg transition-shadow"
                variants={fadeInLeft}
                whileHover={{ x: 3 }}
              >
                <div className="p-2 bg-purple-700/40 rounded-full border border-purple-400/30">
                  {feature.icon}
                </div>
                <span className="text-gray-200 text-sm font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg font-bold flex items-center justify-center shadow-xl shadow-purple-700/30 text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-purple-400"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <ChevronRight size={22} className="ml-2" />
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-purple-950/60 border border-purple-500/40 rounded-lg font-bold text-purple-200 flex items-center justify-center backdrop-blur-sm hover:bg-purple-900/70 transition-colors text-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={22} className="mr-2" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image - on top for mobile, right for desktop */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 pt-5 lg:mb-0">
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-400/30 bg-gradient-to-tr from-purple-800/30 to-transparent"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 to-transparent z-10 mix-blend-overlay" />
            <img 
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" 
              alt="Student learning with laptop" 
              className="w-full h-80 sm:h-96 object-cover rounded-3xl relative z-0 shadow-xl border-2 border-purple-300/30"
              loading="lazy"
            />
            {/* Soft glow */}
            <div className="absolute -inset-2 rounded-3xl bg-purple-400/20 blur-2xl z-0" />
            {/* Floating shape */}
            <motion.div 
              className="absolute -top-6 -right-6 w-20 h-20 bg-purple-500 rounded-full opacity-60 blur-xl"
              animate={{ y: [0, -12, 0], transition: { duration: 4, repeat: Infinity } }}
            />
            {/* Course list mockup - subtle */}
            <motion.div 
              className="absolute top-8 -left-8 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg w-44 hidden sm:block"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="h-2 w-14 bg-purple-300/50 rounded" />
                <div className="h-2 w-4 bg-purple-300/30 rounded" />
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/5 p-2 rounded-md">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <div className="space-y-1">
                      <div className="h-1.5 w-16 bg-purple-300/40 rounded" />
                      <div className="h-1 w-10 bg-purple-300/20 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}