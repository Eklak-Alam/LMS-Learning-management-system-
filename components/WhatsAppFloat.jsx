"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppFloat() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const phoneNumber = "7070691178"; // Replace with your number
  const message = "Hello, I have a question about your courses!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed left-4 bottom-4 md:left-6 md:bottom-6 z-50">
      <div className="relative flex items-center">
        {/* WhatsApp button */}
        <motion.button
          onClick={handleClick}
          aria-label="Contact us on WhatsApp"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 group flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          <FaWhatsapp className="text-2xl md:text-3xl" />
        </motion.button>

        {/* Hover message - now appears to the right */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute left-full ml-3 hidden md:block"
            >
              <div className="bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap flex items-center">
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                <span>Need help? Chat with us!</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-4 h-4 ml-2 text-gray-500"
                >
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile tooltip */}
        <span className="md:hidden absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </div>
    </div>
  );
}