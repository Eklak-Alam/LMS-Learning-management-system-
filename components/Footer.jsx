'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowUp,
} from 'react-icons/fa';
import Link from 'next/link';

export default function PremiumFooter() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [year, setYear] = useState(null)
  const footerRef = useRef(null);


  useEffect(() => {
    // This runs only on the client
    setYear(new Date().getFullYear());

  }, []);

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
    setSubscribeStatus('success');
    setTimeout(() => setSubscribeStatus(null), 3000);
    setEmail('');
  };

  // Scroll visibility effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram', color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube', color: 'bg-red-600 hover:bg-red-700' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter', color: 'bg-blue-400 hover:bg-blue-500' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800' },
    { icon: <FaFacebookF />, href: '#', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, info: '123 Education St, Learning City', label: 'Address' },
    { icon: <FaPhone />, info: '+1 (234) 567-8901', label: 'Phone' },
    { icon: <FaEnvelope />, info: 'contact@eduhub.com', label: 'Email' },
    { icon: <FaClock />, info: 'Mon-Fri: 9am-6pm', label: 'Hours' },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -3,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  if (!year) return null; // Avoid rendering until year is available

  return (
    <footer 
      ref={footerRef}
      className="bg-gray-800 text-white pt-16 pb-10 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900/80 z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Brand Column */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Sanaya Training Institute
              </Link>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Empowering learners worldwide with premium education resources and courses.
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </motion.button>
                <AnimatePresence>
                  {subscribeStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-green-400 text-sm text-center"
                    >
                      Thanks for subscribing!
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover="hover"
                  variants={hoverVariants}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, idx) => (
                <motion.li 
                  key={idx}
                  whileHover="hover"
                  variants={hoverVariants}
                  className="flex items-start"
                >
                  <span className="text-purple-400 mt-1 mr-3 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-gray-300">{item.info}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${social.color} text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-10 mt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-gray-400">
            © {year} EduHub. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {legalLinks.map((link, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: '#8B5CF6' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-purple-600 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-xl z-50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}