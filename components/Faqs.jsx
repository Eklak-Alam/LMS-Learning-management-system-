'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqItems = [
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

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-blue-600 via-white to-red-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our platform, courses, and learning experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <button
                type="button"
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 transition-colors flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-400"
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {item.question}
                <ChevronDown
                  className={`ml-2 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600 text-sm overflow-hidden"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Still have questions? We're here to help!</p>
          <Link href="mailto:sawrabh20009@gmail.com">
            <button className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-400">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
