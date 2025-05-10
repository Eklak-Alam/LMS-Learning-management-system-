'use client';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, User } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: "Interactive Courses",
    description: "Hands-on lessons with real-world projects, quizzes, and code challenges to reinforce learning.",
    icon: <BookOpen className="text-purple-600" size={24} />,
  },
  {
    title: "Expert Instructors",
    description: "Learn from top-tier industry professionals with years of experience and a passion for teaching.",
    icon: <User className="text-purple-600" size={24} />,
  },
  {
    title: "Flexible Learning",
    description: "Self-paced modules accessible 24/7, so you can study when and where it suits you best.",
    icon: <Clock className="text-purple-600" size={24} />,
  },
  {
    title: "Certified Success",
    description: "Gain career-ready certifications that are recognized by companies and hiring partners globally.",
    icon: <Award className="text-purple-600" size={24} />,
  },
];

const stagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function WhyUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
            WHY CHOOSE SANAYA
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tools That <span className="text-purple-600">Empower Learning</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our LMS offers a seamless experience backed by powerful features to help students thrive and succeed.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className={`p-8 rounded-2xl border bg-gradient-to-br from-white to-gray-50 shadow-sm transition-transform duration-300 ${
                hoveredCard === i ? 'shadow-lg -translate-y-2 border-purple-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
