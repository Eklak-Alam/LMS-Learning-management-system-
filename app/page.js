// app/page.js
import Connect from "@/components/Connect";
import CoursePreview from "@/components/CoursePreview";
import FAQSection from "@/components/Faqs";
import LandingPage from "@/components/LandingPage";
import Process from "@/components/Process";
import Trusted from "@/components/Trusted";
import WhyUs from "@/components/Whyus";

// ✅ HOME PAGE METADATA - OPTIMIZED FOR "ENGINEERING TRAINING" KEYWORDS
export const metadata = {
  title: "Shanaya Training Institute Pvt Ltd | Best Online Engineering Design Skill Training Institute | PLC, Automation, Web Development Courses",
  description: "Join India's top-rated Engineering Training Institute. Live online courses in PLC Programming, Industrial Automation, Web Development, Digital Marketing with 100% placement assistance. Learn from MNC experts.",
  keywords: "engineering training, PLC programming, industrial automation, web development course, digital marketing training, CAD training, mechanical design, electrical engineering, online courses with placement",
  openGraph: {
    title: "Best Engineering Design Training Institute | PLC, Automation Courses Online",
    description: "Live online engineering courses with placement assistance. Learn from industry experts at Shanaya Training Institute.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Shanaya Training Institute - Engineering Courses",
      },
    ],
  },
};

// ✅ STRUCTURED DATA FOR HOMEPAGE
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Engineering Design Training Courses - Shanaya Training Institute",
  "description": "India's Best Engineering ONLINE Training Institute with experienced faculty from top MNCs",
  "url": "https://shanayatraining.com",
  "mainEntity": {
    "@type": "TrainingCenter",
    "name": "Shanaya Training Institute",
    "description": "Premium Engineering Design Training Institute offering online courses in PLC, Automation, Web Development and Digital Marketing",
    "hasCourse": [
      {
        "@type": "Course",
        "name": "PLC Programming Training",
        "description": "Complete PLC programming course with hands-on practical training",
        "provider": {
          "@type": "Organization",
          "name": "Shanaya Training Institute"
        }
      },
      {
        "@type": "Course",
        "name": "Industrial Automation Course", 
        "description": "SCADA, HMI, DCS and Industrial Automation comprehensive training",
        "provider": {
          "@type": "Organization", 
          "name": "Shanaya Training Institute"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* ✅ STRUCTURED DATA FOR HOMEPAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      
      <main className="relative" itemScope itemType="https://schema.org/WebPage">
        {/* ✅ BREADCRUMB STRUCTURED DATA */}
        <div itemScope itemType="https://schema.org/BreadcrumbList" className="hidden">
          <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="1" />
            <span itemProp="name">Home</span>
            <link itemProp="item" href="https://shanayatraining.com" />
          </span>
        </div>

        {/* ✅ MAIN CONTENT WITH PROPER SEMANTICS */}
        <section itemScope itemType="https://schema.org/CreativeWork">
          <LandingPage />
          <CoursePreview />
          <WhyUs />
          <Process />
          <Trusted />
          <FAQSection />
          <Connect />
        </section>
      </main>
    </>
  );
}