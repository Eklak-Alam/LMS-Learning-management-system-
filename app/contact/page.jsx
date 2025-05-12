'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaUser, 
  FaCommentDots, 
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaYoutube
} from 'react-icons/fa';

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500" size={20} />,
      title: "Email Us",
      value: "sawrabh20009@gmail.com",
      link: "mailto:sawrabh20009@gmail.com"
    },
    {
      icon: <FaPhone className="text-blue-500" size={20} />,
      title: "Call Us",
      value: "+91 9990111835",
      link: "tel:+919990111835"
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500" size={20} />,
      title: "Visit Us",
      value: "Shanti Nagar, Near Newaji Tola, Chapra Pin 841301",
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock className="text-blue-500" size={20} />,
      title: "Working Hours",
      value: "Mon-Fri: 9am-6pm IST",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      url: "https://www.instagram.com/shanayatraininginstitute?igsh=MW84MHV6ZnRrb2F2Nw==",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      icon: <FaYoutube size={20} />,
      name: "YouTube",
      url: "https://www.youtube.com/@shanayatraining",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-12 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to work together? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} text-white h-10 w-10 rounded-full flex items-center justify-center transition-all`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-8"
              >
                <FaCheckCircle size={48} className="mb-4 text-green-500" />
                <p className="text-xl font-semibold text-gray-800">Message Sent!</p>
                <p className="text-gray-600 mt-2">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <div className="relative">
                    <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}