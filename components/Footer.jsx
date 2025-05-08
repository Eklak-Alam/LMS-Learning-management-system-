'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowUp,
  FaStar,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function PremiumFooter() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would connect to your API to handle the subscription
    setSubscribeStatus('success');
    setTimeout(() => setSubscribeStatus(null), 3000);
    setEmail('');
  };

  // Detect scroll for back to top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp />, href: 'https://wa.me/yourNumber', label: 'WhatsApp', color: 'bg-green-500' },
    { icon: <FaInstagram />, href: 'https://instagram.com/yourProfile', label: 'Instagram', color: 'bg-pink-600' },
    { icon: <FaYoutube />, href: 'https://youtube.com/yourChannel', label: 'YouTube', color: 'bg-red-600' },
    { icon: <FaGoogle />, href: 'https://google.com', label: 'Google', color: 'bg-blue-500' },
    { icon: <FaTwitter />, href: 'https://twitter.com/yourHandle', label: 'Twitter', color: 'bg-blue-400' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/yourProfile', label: 'LinkedIn', color: 'bg-blue-700' },
    { icon: <FaFacebookF />, href: 'https://facebook.com/yourPage', label: 'Facebook', color: 'bg-blue-600' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, info: '123 Business Avenue, Suite 500, New York, NY 10001', label: 'Address' },
    { icon: <FaPhone />, info: '+1 (555) 123-4567', label: 'Phone' },
    { icon: <FaEnvelope />, info: 'contact@yourbrand.com', label: 'Email' },
    { icon: <FaClock />, info: 'Mon-Fri: 9am-6pm ET', label: 'Hours' },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-10 relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Top Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col lg:flex-row justify-between items-stretch lg:items-start gap-10 mb-16 border-b border-gray-800 pb-16"
          >
            {/* Brand Column */}
            <div className="lg:w-1/3">
              <div className="mb-6">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  YourBrand™
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Elevating digital experiences since 2010. Our premium solutions drive growth and innovation for businesses across all industries.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Contact Information</h3>
                <ul className="space-y-3">
                  {contactInfo.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-purple-400 mt-1 mr-3">{item.icon}</span>
                      <span className="text-gray-300">{item.info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
              {/* Main Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-purple-400 pb-2 border-b border-purple-800 inline-block">Main Menu</h3>
                <ul className="space-y-3">
                  {mainLinks.map((link, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2 text-xs">►</span>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              {/* <div>
                <h3 className="text-lg font-semibold mb-6 text-purple-400 pb-2 border-b border-purple-800 inline-block">Resources</h3>
                <ul className="space-y-3">
                  {resourceLinks.map((link, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2 text-xs">►</span>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div> */}

              {/* Newsletter Signup */}
              {/* <div>
                <h3 className="text-lg font-semibold mb-6 text-purple-400 pb-2 border-b border-purple-800 inline-block">Newsletter</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Stay updated with our latest news and special offers.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:translate-y-1 active:scale-95"
                  >
                    Subscribe
                  </button>
                  <AnimatePresence>
                    {subscribeStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-green-400 text-sm mt-2"
                      >
                        Thank you for subscribing!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div> */}
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10"
          >
            <div className="text-gray-400 text-sm">
              Trusted by over 10,000+ Students worldwide
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${social.color} text-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants} 
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} YourBrand™. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-gray-500">
              {legalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-purple-500 hover:bg-purple-600 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg z-50 transition duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}