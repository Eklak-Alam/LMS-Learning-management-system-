'use client'
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id="connect" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more? Reach out to us through any of these channels.
          </p>
        </motion.div>
        
        {/* Contact + Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea placeholder="Your message..." className="w-full border border-gray-300 rounded px-4 py-2 min-h-[120px]" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all">Send Message</button>
            </form>
          </motion.div>

          {/* Social + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-900 text-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <p className="mb-6">Stay connected with us on social media for updates, tips, and special promotions.</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <FaFacebookF />, label: 'Facebook' },
                  { icon: <FaInstagram />, label: 'Instagram' },
                  { icon: <FaYoutube />, label: 'YouTube' },
                  { icon: <FaTwitter />, label: 'Twitter' },
                  { icon: <FaLinkedinIn />, label: 'LinkedIn' },
                  { icon: <FaWhatsapp />, label: 'WhatsApp' },
                ].map((item, idx) => (
                  <a key={idx} href="#" className="flex flex-col items-center bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@edulearn.com" className="text-blue-600 hover:underline">info@edulearn.com</a>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+18001234567" className="text-blue-600 hover:underline">+1 (800) 123-4567</a>
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <address className="not-italic">
                    123 Learning Street<br />
                    Education City, ED 12345<br />
                    United States
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="bg-gray-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600">Get the latest updates, news, and special offers straight to your inbox.</p>
          </div>
          <div className="w-full md:w-2/5 flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full rounded-l px-4 py-2 border border-gray-300 focus:outline-none" 
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-r transition-all">Subscribe</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
