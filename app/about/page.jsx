'use client';
import { motion } from 'framer-motion';
import { FaBookOpen, FaRegHandshake, FaQuoteLeft, FaStar, FaUserCircle, FaUsers } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaRegHandshake size={28} className="text-blue-600" aria-label="Student-Centered" />, 
    title: 'Student-Centered',
    desc: 'We put our learners first, supporting every step of their journey.',
  },
  {
    icon: <FaBookOpen size={28} className="text-blue-600" aria-label="Innovative Learning" />, 
    title: 'Innovative Learning',
    desc: 'Modern courses, hands-on projects, and real-world skills.',
  },
  {
    icon: <FaUsers size={28} className="text-blue-600" aria-label="Community & Support" />, 
    title: 'Community & Support',
    desc: 'A vibrant, helpful community and expert guidance.',
  },
  {
    icon: <FaStar size={28} className="text-blue-600" aria-label="Trusted Quality" />, 
    title: 'Trusted Quality',
    desc: 'Thousands of students trust us for their education.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom spring easing
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-white text-gray-900 px-4 py-10 relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-5">
            <FaUserCircle size={54} className="text-blue-600 drop-shadow-sm" aria-label="About Icon" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-gray-900">
            About Us
          </h1>
          <p className="text-md sm:text-lg text-gray-600 mb-2 font-medium tracking-wide">
            Inspiring growth, one learner at a time
          </p>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            We are passionate educators and technologists, dedicated to making high-quality education accessible, practical, and enjoyable for everyone.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-14" />

      {/* Mission Statement */}
      <section className="max-w-2xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3"
        >
          <FaQuoteLeft size={36} className="text-blue-500 mb-1" aria-label="Mission Quote" />
          <p className="text-2xl text-gray-800 font-semibold max-w-xl">
            "Empowering students with the skills, confidence, and support to thrive in a digital world."
          </p>
          <span className="text-gray-600 text-base">
            Our mission is to help you succeed, whether you're just starting out or advancing your career.
          </span>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-14" />

      {/* Highlights Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                y: -8,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-gray-200 transition-all"
              aria-label={item.title}
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-blue-50">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-14" />

      {/* Founder Section */}
      <section className="max-w-2xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-xl px-8 py-10 flex flex-col items-center shadow-sm border border-gray-200 mx-2"
        >
          <motion.img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Founder portrait"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-200 mb-4 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Meet Our Founder</h3>
          <p className="text-gray-600 mb-3 max-w-lg mx-auto italic">
            "Education is the most powerful tool we can use to change the world. Thank you for being part of our journey!"
          </p>
          <span className="text-blue-600 font-semibold">- John Doe</span>
        </motion.div>
      </section>
    </div>
  );
}