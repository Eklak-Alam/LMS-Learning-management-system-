'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaCommentDots, FaCheckCircle } from 'react-icons/fa';

export default function Page() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add actual email/send logic if connected to backend
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    // Optional: Reset success after 5s
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-gray-900 text-white px-4 py-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-purple-900/30 border border-purple-500/20 rounded-2xl p-8 w-full max-w-xl shadow-2xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-200">Contact Us</h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center text-green-300"
          >
            <FaCheckCircle size={48} className="mb-4 text-green-400" />
            <p className="text-xl font-semibold">Your message has been received!</p>
            <p className="text-sm text-green-200">We’ll get back to you soon. 😊</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-purple-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-purple-800/30 text-white border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-purple-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-purple-800/30 text-white border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <FaCommentDots className="absolute top-3 left-3 text-purple-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-purple-800/30 text-white border border-purple-400/30 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
