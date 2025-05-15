'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  BookOpen,
  Headphones,
  Info,
  Phone,
  Menu,
  X,
  Check,
  Mail, // Now properly imported
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, href: '/' },
    { name: 'Courses', icon: <BookOpen size={18} />, href: '/courses' },
    { name: 'Services', icon: <Headphones size={18} />, href: '/services' },
    { name: 'About', icon: <Info size={18} />, href: '/about' },
    { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
  ]

  const socialLinks = [
    { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/919990111835', label: 'WhatsApp', color: 'bg-green-500' },
    { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/shanayatraininginstitute?igsh=MW84MHV6ZnRrb2F2Nw==', label: 'Instagram', color: 'bg-pink-600' },
    { icon: <FaYoutube size={16} />, href: 'https://www.youtube.com/@shanayatraining', label: 'YouTube', color: 'bg-red-600' },
    { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/', label: 'LinkedIn', color: 'bg-blue-700' },
    { icon: <FaFacebookF size={16} />, href: 'https://www.facebook.com/share/18nRTrPhuX/', label: 'Facebook', color: 'bg-blue-600' },
  ]

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800">Shanaya Training Institute</span>
              <span className="text-xs text-gray-500">ISO 9001:2015 Certified</span>
            </div>
          </Link>
          <button className="lg:hidden text-gray-800">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    )
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-white/80 backdrop-blur-sm'}`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo with full name and ISO */}
        <Link href="/" className="flex items-center cursor-pointer min-w-0">
          <div className="flex flex-col ml-2">
            <motion.span 
              className="text-lg font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis"
              whileHover={{ color: '#7c3aed' }}
            >
              Shanaya Training Institute Pvt Ltd
            </motion.span>
            <motion.div 
              className="flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Check className="h-3 w-3 text-green-600" />
              <span className="text-xs text-gray-500">ISO 9001:2015 Certified</span>
            </motion.div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 mx-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-gray-700 hover:text-purple-600 transition-colors group"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact and Social */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-col items-end mr-4">
            <a href="tel:+919990111835" className="text-sm font-medium text-gray-700 hover:text-purple-600">
              +91 9990111835
            </a>
            <a href="mailto:sawrabh20009@gmail.com" className="text-xs text-gray-500 hover:text-purple-500">
              sawrabh20009@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`${social.color} text-white p-2 rounded-full flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 hover:text-purple-600 focus:outline-none p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden w-full bg-white overflow-hidden shadow-inner"
          >
            <div className="flex flex-col space-y-1 py-3 px-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={mobileItemVariants}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-800 hover:text-purple-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Contact Info */}
              <motion.div 
                className="mt-4 pt-4 border-t border-gray-200"
                variants={mobileItemVariants}
              >
                <div className="flex flex-col space-y-3 px-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-600" />
                    <a href="tel:+919990111835" className="text-gray-700">+91 9990111835</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <a href="mailto:sawrabh20009@gmail.com" className="text-gray-700">sawrabh20009@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Social Links */}
              <motion.div 
                className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-200"
                variants={mobileItemVariants}
              >
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${social.color} text-white p-2 rounded-full`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* ISO Certification */}
              <motion.div 
                className="flex items-center justify-center mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500"
                variants={mobileItemVariants}
              >
                <Check className="h-3 w-3 text-green-600 mr-1" />
                ISO 9001:2015 Certified
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}