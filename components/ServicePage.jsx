import { motion } from 'framer-motion';
import {
  Users,
  BookOpen,
  GraduationCap,
  Clock,
  MessageCircle,
  Star,
  Globe,
} from 'lucide-react';

const services = [
  {
    icon: <Users size={32} className="text-purple-400" />, 
    title: 'Expert Teachers',
    desc: 'Learn from experienced, passionate educators who care about your success.'
  },
  {
    icon: <BookOpen size={32} className="text-purple-400" />, 
    title: 'Comprehensive Courses',
    desc: 'Wide range of subjects and skill levels, from beginner to advanced.'
  },
  {
    icon: <GraduationCap size={32} className="text-purple-400" />, 
    title: 'Certification',
    desc: 'Earn certificates to showcase your achievements and boost your career.'
  },
  {
    icon: <Clock size={32} className="text-purple-400" />, 
    title: 'Flexible Learning',
    desc: 'Study at your own pace, anytime, anywhere, on any device.'
  },
  {
    icon: <MessageCircle size={32} className="text-purple-400" />, 
    title: 'Community Support',
    desc: 'Join a vibrant community of learners and get help when you need it.'
  },
  {
    icon: <Globe size={32} className="text-purple-400" />, 
    title: 'Global Access',
    desc: 'Connect and learn with students and teachers from around the world.'
  },
  {
    icon: <Star size={32} className="text-purple-400" />, 
    title: 'Quality Guarantee',
    desc: 'We are committed to providing the best learning experience for you.'
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

export default function ServicePage() {

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-gray-900 text-white px-4 py-10">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-4">
            <GraduationCap size={48} className="text-purple-400 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Empowering learners and teachers with everything they need to succeed. Discover what makes our institute special.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-purple-900/40 border border-purple-500/20 rounded-2xl p-7 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow group"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.04 }}
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-purple-800/40 border border-purple-400/20 group-hover:bg-purple-700/50 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-100">{service.title}</h3>
            <p className="text-gray-300 text-base">{service.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
} 