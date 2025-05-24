'use client'
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiHelpCircle, FiSearch, FiX } from 'react-icons/fi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);
  
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer: "Enrolling in a course is simple! Browse our course catalog, select the course you're interested in, click on the 'Enroll Now' button, and follow the checkout process. Once completed, you'll have immediate access to your course materials."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All transactions are processed through secure payment gateways to ensure your financial information stays protected."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Our platform is fully responsive and optimized for mobile learning. You can access all course materials, videos, and assessments on smartphones and tablets through our mobile-friendly website or dedicated mobile app available for iOS and Android."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Our certificates are industry-recognized and valued by employers worldwide. They verify your course completion and the skills you've acquired. Many of our courses are also aligned with industry standards and developed in partnership with leading companies."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 07-day money-back guarantee for most courses. If you're unsatisfied with your course, you can request a full refund within 07 days of enrollment, if eligible"
    },
    {
      question: "How long do I have access to a course after purchasing?",
      answer: "Once you purchase a course, you receive lifetime access to all course materials, updates, and resources. This allows you to learn at your own pace and revisit the content whenever you need a refresher."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!filteredFaqs.length) return;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = openIndex === null ? 0 : Math.min(openIndex + 1, filteredFaqs.length - 1);
        setOpenIndex(nextIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = openIndex === null ? filteredFaqs.length - 1 : Math.max(openIndex - 1, 0);
        setOpenIndex(prevIndex);
      } else if (e.key === 'Escape') {
        setOpenIndex(null);
      } else if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openIndex, filteredFaqs.length]);

  return (
    <section id="faq" className="relative py-16 z-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background overlay fix */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find quick answers to common questions about our courses and services.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="relative max-w-2xl mx-auto mb-12"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={searchRef}
            type="text"
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search FAQs"
          />
          {searchTerm && (
            <button 
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
            </button>
          )}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="rounded-xl overflow-hidden border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm"
                  initial={false}
                  animate={{ 
                    backgroundColor: openIndex === index ? 'rgba(99, 102, 241, 0.05)' : 'rgba(255, 255, 255, 0.8)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    onClick={() => handleItemClick(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                    whileHover={{ color: '#6366F1' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center">
                      <FiHelpCircle className={`mr-4 h-5 w-5 ${openIndex === index ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    </div>
                    {openIndex === index ? (
                      <FiMinus className="h-5 w-5 text-blue-600" />
                    ) : (
                      <FiPlus className="h-5 w-5 text-gray-400" />
                    )}
                  </motion.button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-14 text-gray-700">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-12 bg-white rounded-xl shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-500 mb-4">No results found for "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset search
              </button>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div 
          className="rounded-xl p-8 mt-12 flex flex-col md:flex-row items-center justify-between shadow-lg backdrop-blur-sm bg-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Still have questions?</h3>
            <p className="text-gray-600">Can't find what you're looking for? Contact our support team.</p>
          </div>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;