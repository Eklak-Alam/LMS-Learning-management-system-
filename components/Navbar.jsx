'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  BookOpen, 
  Headphones, 
  Info, 
  Phone, 
  Menu, 
  X,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, href: '/' },
    { name: 'Courses', icon: <BookOpen size={18} />, href: '/courses' },
    { name: 'Services', icon: <Headphones size={18} />, href: '/services' },
    { name: 'About', icon: <Info size={18} />, href: '/about' },
    { name: 'Contact', icon: <Phone size={18} />, href: '/contact' }
  ]

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg border-b border-gray-800' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Skillify
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link href={link.href} passHref key={link.name}>
              <motion.div
                className="flex items-center text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{link.icon}</span>
                <span>{link.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Schedule Call Button - Desktop */}
        <div className="hidden lg:block">
          <Link href="/schedule-call" passHref>
            <motion.div
              className="flex items-center bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-700/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} className="mr-2" />
              Schedule Call
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-purple-300 focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden w-full bg-gray-800 overflow-hidden"
          >
            <div className="flex flex-col space-y-1 py-3 px-4">
              {navLinks.map((link) => (
                <Link href={link.href} passHref key={link.name}>
                  <motion.div
                    className="flex items-center text-gray-300 hover:text-purple-300 transition-colors py-3 px-4 rounded-lg hover:bg-gray-700/50"
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-3">{link.icon}</span>
                    <span>{link.name}</span>
                  </motion.div>
                </Link>
              ))}
              
              <motion.div
                variants={mobileItemVariants}
                className="pt-2 mt-2"
              >
                <Link href="/schedule-call" passHref>
                  <motion.div
                    className="flex items-center justify-center w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar size={16} className="mr-2" />
                    Schedule Call
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}