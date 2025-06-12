'use client';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const courses = [
  {
    id: 6,
    title: "S3D Piping & Equipment Design",
    slug: "s3d-piping-equipment",
    desc: "Smart 3D: piping, equipment, supports, layout.",
    img: "https://www.rishabheng.com/wp-content/uploads/2018/06/pipingdesignsoftware.jpg",
    duration: "30 Days",
    mode: "Online",
    students: "500+"
  },
  {
    id: 7,
    title: "AutoCAD Electrical",
    slug: "autocad-electrical-training",
    desc: "Schematics, panels, PLCs with AutoCAD.",
    img: "https://caddeskhyderabad.com/wp-content/uploads/2023/07/AutoCAD-Electrical-Course-768x479.jpg",
    duration: "30 Days",
    mode: "Online",
    students: "800+"
  },
  {
    id: 8,
    title: "AutoCAD Instrumentation",
    slug: "autocad-instrumentation-training",
    desc: "Projects-based Instrumentation design.",
    img: "https://damassets.autodesk.net/content/dam/autodesk/draftr/7836/what-is-pid-thumb-1172x660_jpg.jpg",
    duration: "30 Days",
    mode: "Online",
    students: "600+"
  }
];

export default function NewCourseAnnouncement() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-4 bg-white/90 backdrop-blur rounded-lg shadow border border-gray-200"
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Left: Images */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2200 }}
            loop
            className="rounded-md overflow-hidden"
          >
            {courses.map(course => (
              <SwiperSlide key={course.id}>
                <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4500 }}
            loop
            allowTouchMove={false}
          >
            {courses.map(course => (
              <SwiperSlide key={course.id}>
                <div className="text-sm space-y-2">
                  <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full font-semibold">
                    NEW
                  </span>
                  <h3 className="text-base font-bold text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 text-xs">{course.desc}</p>

                  <div className="grid grid-cols-3 text-xs text-purple-700 gap-1">
                    <div><span className="block text-gray-500">Duration</span>{course.duration}</div>
                    <div><span className="block text-gray-500">Mode</span>{course.mode}</div>
                    <div><span className="block text-gray-500">Students</span>{course.students}</div>
                  </div>

                  <Link 
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center text-purple-600 hover:underline font-medium text-xs mt-1"
                  >
                    Explore <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
