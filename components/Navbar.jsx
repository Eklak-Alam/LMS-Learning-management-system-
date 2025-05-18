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
  Mail,
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
    { name: 'Home', icon: <Home size={22} />, href: '/' },
    { name: 'Courses', icon: <BookOpen size={22} />, href: '/courses' },
    { name: 'Services', icon: <Headphones size={22} />, href: '/services' },
    { name: 'About', icon: <Info size={22} />, href: '/about' },
    { name: 'Contact', icon: <Phone size={22} />, href: '/contact' },
  ]

  const socialLinks = [
    { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/919990111835', label: 'WhatsApp', color: 'bg-green-500' },
    { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/shanayatraininginstitute?igsh=MW84MHV6ZnRrb2F2Nw==', label: 'Instagram', color: 'bg-gradient-to-br from-pink-500 to-orange-500' },
    { icon: <FaYoutube size={20} />, href: 'https://www.youtube.com/@shanayatraining', label: 'YouTube', color: 'bg-red-600' },
    { icon: <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/', label: 'LinkedIn', color: 'bg-blue-700' },
    { icon: <FaFacebookF size={20} />, href: 'https://www.facebook.com/share/18nRTrPhuX/', label: 'Facebook', color: 'bg-blue-600' },
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
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="flex flex-col">
              <span className="text-xl font-bold">Shanaya Training Institute</span>
              <span className="text-sm">ISO 9001:2015 Certified</span>
            </div>
          </Link>
          <button className="lg:hidden">
            <Menu size={28} />
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
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-gray-900 to-violet-900 shadow-xl' : 'bg-gradient-to-r from-gray-900 to-violet-700'}`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo with full name and ISO */}
        <Link href="/" className="flex items-center cursor-pointer min-w-0">
          <div className="flex flex-col ml-2">
            <motion.span 
              className="text-lg md:text-xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis"
              whileHover={{ color: '#a5b4fc' }}
            >
              Shanaya Training Institute Pvt Ltd
            </motion.span>
            <motion.div 
              className="flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Check className="h-4 w-4 text-green-300" />
              <span className="text-sm text-blue-100">ISO 9001:2015 Certified</span>
            </motion.div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10 mx-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-blue-100 hover:text-white transition-colors group"
            >
              <span className="mr-3 group-hover:scale-110 transition-transform">{link.icon}</span>
              <span className="font-medium text-lg">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact and Social */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex flex-col items-end mr-4">
            <a href="tel:+919990111835" className="text-lg font-medium text-white hover:text-blue-100">
              +91 9990111835
            </a>
            <a href="mailto:sawrabh20009@gmail.com" className="text-sm text-blue-100 hover:text-white">
              sawrabh20009@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`${social.color} text-white p-3 rounded-full flex items-center justify-center hover:shadow-lg`}
                whileHover={{ scale: 1.15, rotate: 5 }}
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
          className="lg:hidden text-white hover:text-blue-200 focus:outline-none p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="lg:hidden w-full bg-blue-800 overflow-hidden shadow-inner"
          >
            <div className="flex flex-col space-y-2 py-4 px-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={mobileItemVariants}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-blue-100 hover:text-white transition-colors py-4 px-6 rounded-lg hover:bg-blue-700/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-4">{link.icon}</span>
                    <span className="font-medium text-lg">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Contact Info */}
              <motion.div 
                className="mt-4 pt-4 border-t border-blue-700"
                variants={mobileItemVariants}
              >
                <div className="flex flex-col space-y-4 px-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-200" />
                    <a href="tel:+919990111835" className="text-lg text-white">+91 9990111835</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-200" />
                    <a href="mailto:sawrabh20009@gmail.com" className="text-lg text-white">sawrabh20009@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Social Links */}
              <motion.div 
                className="flex justify-center space-x-4 mt-6 pt-6 border-t border-blue-700"
                variants={mobileItemVariants}
              >
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${social.color} text-white p-3 rounded-full`}
                    whileHover={{ scale: 1.15 }}
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
                className="flex items-center justify-center mt-6 pt-6 border-t border-blue-700 text-sm text-blue-100"
                variants={mobileItemVariants}
              >
                <Check className="h-4 w-4 text-green-300 mr-2" />
                ISO 9001:2015 Certified
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}