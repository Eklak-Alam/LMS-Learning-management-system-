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
    { icon: <FaWhatsapp />, href: 'https://wa.me/919990111835', label: 'WhatsApp', color: 'bg-green-500' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/shanayatraininginstitute?igsh=MW84MHV6ZnRrb2F2Nw==', label: 'Instagram', color: 'bg-pink-600' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@shanayatraining', label: 'YouTube', color: 'bg-red-600' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/', label: 'LinkedIn', color: 'bg-blue-700' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/share/18nRTrPhuX/', label: 'Facebook', color: 'bg-blue-600' },
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
    // Return a simplified version for SSR that matches the client layout
    return (
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
              Shanaya
            </span>
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
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-2 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg border-b border-gray-300' : 'bg-white/80 backdrop-blur-sm'}`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <span className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
            STI  Pvt Ltd
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-gray-800 hover:text-purple-600 transition-colors"
            >
              <span className="mr-2">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact Info (Phone & Email) */}
        <div className="hidden lg:flex items-center space-x-6 ml-4 p-2 rounded-xl">
          <a href="mailto:sawrabh20009@gmail.com" className="text-gray-800 hover:text-purple-600 flex items-center space-x-2">
            <span>sawrabh20009@gmail.com</span>
          </a>
          <a href="tel:+919990111835" className="text-gray-800 hover:text-purple-600 flex items-center space-x-2">
            <span>+91 9990111835</span>
          </a>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex items-center space-x-3 ml-4">
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 hover:text-purple-600 focus:outline-none"
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
            className="lg:hidden w-full bg-white overflow-hidden"
          >
            <div className="flex flex-col space-y-1 py-3 px-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={mobileItemVariants}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-800 hover:text-purple-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 mt-4 pt-3 border-t border-gray-200 bg-gray-100 rounded-lg p-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-800 hover:text-purple-600 p-2 rounded-full"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="flex flex-col items-center mt-4 space-y-4">
                <a href="mailto:sawrabh20009@gmail.com" className="text-gray-800 hover:text-purple-600">Email: sawrabh20009@gmail.com</a>
                <a href="tel:+919990111835" className="text-gray-800 hover:text-purple-600">Phone: +91 9990111835</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}