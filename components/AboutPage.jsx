import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Users,
  BookOpen,
  Star,
  UserCircle,
} from 'lucide-react';

const highlights = [
  {
    icon: <HeartHandshake size={28} className="text-purple-400" />, 
    title: 'Student-Centered',
    desc: 'We put our learners first, supporting every step of their journey.'
  },
  {
    icon: <BookOpen size={28} className="text-purple-400" />, 
    title: 'Innovative Learning',
    desc: 'Modern courses, hands-on projects, and real-world skills.'
  },
  {
    icon: <Users size={28} className="text-purple-400" />, 
    title: 'Community & Support',
    desc: 'A vibrant, helpful community and expert guidance.'
  },
  {
    icon: <Star size={28} className="text-purple-400" />, 
    title: 'Trusted Quality',
    desc: 'Thousands of students trust us for their education.'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-gray-900 text-white px-4 py-10">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-4">
            <UserCircle size={48} className="text-purple-400 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            We are passionate educators and technologists, dedicated to making high-quality IT education accessible, practical, and enjoyable for everyone.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-2xl mx-auto text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="text-xl text-purple-100 mb-6 font-medium"
        >
          Our mission is to empower students and teachers with the skills, confidence, and support they need to thrive in a digital world. Whether you're just starting out or looking to advance your career, we're here to help you succeed.
        </motion.p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-200 text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-purple-900/40 border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.04 }}
            >
              <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-purple-800/40 border border-purple-400/20 group-hover:bg-purple-700/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-1 text-purple-100">{item.title}</h3>
              <p className="text-gray-300 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team/Founder Section (placeholder) */}
      <section className="max-w-2xl mx-auto text-center mt-16">
        <div className="inline-block rounded-full bg-purple-800/40 border border-purple-400/20 p-2 mb-4">
          <UserCircle size={56} className="text-purple-300" />
        </div>
        <h3 className="text-xl font-bold text-purple-100 mb-2">Meet Our Founder</h3>
        <p className="text-gray-300 mb-2">"Education is the most powerful tool we can use to change the world. Thank you for being part of our journey!"</p>
        <span className="text-purple-300 font-semibold">- [Your Name Here]</span>
      </section>
    </div>
  );
} 