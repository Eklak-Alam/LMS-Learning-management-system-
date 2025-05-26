'use client'
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id="connect" className="relative py-16 z-20 bg-gradient-to-br from-blue-700 via-white to-purple-600 overflow-hidden">
      {/* Background overlay fix */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Connect With Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or want to learn more? Reach out to us through any of these channels.
          </p>
        </motion.div>
        
        {/* Contact + Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm bg-white/80"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  placeholder="Your message..." 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                />
              </div>
              <button 
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social + Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8 backdrop-blur-sm bg-gray-900/90">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <p className="mb-6 text-gray-300">Stay connected with us on social media for updates, tips, and special promotions.</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { 
                    icon: <FaFacebookF className="text-xl" />, 
                    label: 'Facebook', 
                    href: 'https://www.facebook.com/share/18nRTrPhuX/' 
                  },
                  { 
                    icon: <FaInstagram className="text-xl" />, 
                    label: 'Instagram', 
                    href: 'https://www.instagram.com/shanayatraininginstitute?igsh=MW84MHV6ZnRrb2F2Nw==' 
                  },
                  { 
                    icon: <FaYoutube className="text-xl" />, 
                    label: 'YouTube', 
                    href: 'https://www.youtube.com/@shanayatraining' 
                  },
                  { 
                    icon: <FaLinkedinIn className="text-xl" />, 
                    label: 'LinkedIn', 
                    href: 'https://www.linkedin.com/company/shanaya-training-institute-pvt-ltd/' 
                  },
                  { 
                    icon: <FaWhatsapp className="text-xl" />, 
                    label: 'WhatsApp', 
                    href: '/' 
                  },
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="mb-2">{item.icon}</div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 backdrop-blur-sm bg-white/80">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Contact</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a 
                    href="mailto:sawrabh20009@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    sawrabh20009@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a 
                    href="tel:+919990111835" 
                    className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    +91 9990111835
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <address className="not-italic text-gray-600">
                    Shanti Nagar, Near Newaji Tola, <br />
                    Chapra Pin 841301
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg backdrop-blur-sm bg-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600">Get the latest updates, news, and special offers straight to your inbox.</p>
          </div>
          <div className="w-full md:w-2/5 flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full rounded-l-lg px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            />
            <button 
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Subscribe please
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;