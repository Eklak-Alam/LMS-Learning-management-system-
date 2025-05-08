'use client';
import { motion } from 'framer-motion';
import { FaBookOpen, FaRegHandshake, FaQuoteLeft, FaStar, FaUserCircle, FaUsers } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaRegHandshake size={28} className="text-purple-400" aria-label="Student-Centered" />, 
    title: 'Student-Centered',
    desc: 'We put our learners first, supporting every step of their journey.',
  },
  {
    icon: <FaBookOpen size={28} className="text-purple-400" aria-label="Innovative Learning" />, 
    title: 'Innovative Learning',
    desc: 'Modern courses, hands-on projects, and real-world skills.',
  },
  {
    icon: <FaUsers size={28} className="text-purple-400" aria-label="Community & Support" />, 
    title: 'Community & Support',
    desc: 'A vibrant, helpful community and expert guidance.',
  },
  {
    icon: <FaStar size={28} className="text-purple-400" aria-label="Trusted Quality" />, 
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
      ease: 'easeOut',
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-950 to-gray-900 text-white px-4 py-10 relative overflow-x-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-purple-700/20 pointer-events-none z-0" />
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl z-0 animate-pulse" />

      {/* Hero Section */}
      <section className="relative max-w-3xl mx-auto text-center mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-5">
            <FaUserCircle size={54} className="text-purple-400 drop-shadow-xl" aria-label="About Icon" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-md sm:text-lg text-purple-200 mb-2 font-medium tracking-wide">
            Inspiring growth, one learner at a time.
          </p>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            We are passionate educators and technologists, dedicated to making high-quality IT education accessible, practical, and enjoyable for everyone.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-purple-700/30 via-purple-400/20 to-purple-700/30 mb-14" />

      {/* Mission Statement */}
      <section className="max-w-2xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-3"
        >
          <FaQuoteLeft size={36} className="text-purple-400 mb-1" aria-label="Mission Quote" />
          <p className="text-2xl text-purple-100 font-semibold max-w-xl">
            "Empowering students and teachers with the skills, confidence, and support to thrive in a digital world."
          </p>
          <span className="text-purple-300 text-base">
            Our mission is to help you succeed, whether you're just starting out or advancing your career.
          </span>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-purple-700/30 via-purple-400/20 to-purple-700/30 mb-14" />

      {/* Highlights Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-200 text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.045, rotate: [0, 2, -2, 0] }}
              className="bg-purple-900/40 border border-purple-500/20 rounded-2xl p-7 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow group relative overflow-hidden"
              aria-label={item.title}
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:border-2 group-hover:border-purple-400 group-hover:shadow-[0_0_30px_0_rgba(168,85,247,0.25)] transition-all duration-300" />
              <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-purple-800/40 border border-purple-400/20 group-hover:bg-purple-700/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-1 text-purple-100">{item.title}</h3>
              <p className="text-gray-300 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-purple-700/30 via-purple-400/20 to-purple-700/30 mb-14" />

      {/* Founder Section */}
      <section className="max-w-2xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-purple-900/40 border border-purple-500/20 rounded-2xl px-8 py-10 flex flex-col items-center shadow-xl mx-2"
        >
          <motion.img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Founder portrait"
            className="w-20 h-20 rounded-full object-cover border-2 border-purple-300 mb-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <h3 className="text-xl font-bold text-purple-100 mb-2">Meet Our Founder</h3>
          <p className="text-gray-300 mb-2 max-w-lg mx-auto italic">
            “Education is the most powerful tool we can use to change the world. Thank you for being part of our journey!”
          </p>
          <span className="text-purple-300 font-semibold">- John Doe</span>
        </motion.div>
      </section>
    </div>
  );
}
