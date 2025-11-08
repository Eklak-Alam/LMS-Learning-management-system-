// app/layout.js (Next.js 14+ App Router)
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// ✅ PROPER SEO METADATA - DYNAMIC & COMPREHENSIVE
export const metadata = {
  metadataBase: new URL('https://shanayatraining.com'),
  title: {
    default: "Shanaya Training Institute | Best Engineering Design Courses Online",
    template: "%s | Shanaya Training Institute"
  },
  description: "Join India's top Engineering Design Training Institute. Live online courses in PLC, Industrial Automation, Web Development, Digital Marketing with placement assistance. Learn from MNC experts.",
  keywords: [
    "PLC training", "Industrial Automation course", "Engineering Design", "Online Training", 
    "SCADA programming", "Digital Marketing course", "Web Development", "CAD training",
    "Mechanical Design", "Electrical Engineering", "Job Ready Skills", "Placement Assistance",
    "Industrial Robotics", "HMI Programming", "DCS Training", "Panel Designing"
  ].join(", "),
  authors: [{ name: "Shanaya Training Institute" }],
  creator: "Shanaya Training Institute",
  publisher: "Shanaya Training Institute Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // OPEN GRAPH - SOCIAL MEDIA OPTIMIZATION
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shanayatraining.com",
    siteName: "Shanaya Training Institute",
    title: "Shanaya Training Institute | Best Engineering Design Courses Online",
    description: "Join India's top Engineering Design Training Institute. Live online courses with placement assistance.",
    images: [
      {
        url: "/og-image.jpg", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "Shanaya Training Institute - Best Engineering Courses",
      },
    ],
  },

  // TWITTER CARD OPTIMIZATION
  twitter: {
    card: "summary_large_image",
    title: "Shanaya Training Institute | Best Engineering Design Courses",
    description: "Join India's top Engineering Design Training Institute. Live online courses with placement.",
    creator: "@shanayatraining",
    images: ["/og-image.jpg"],
  },

  // ROBOTS.TXT CONFIG
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ALTERNATE LANGUAGES
  alternates: {
    canonical: "https://shanayatraining.com",
    languages: {
      "en-IN": "https://shanayatraining.com",
      "hi-IN": "https://shanayatraining.com/hi",
    },
  },

  // VERIFICATION
  verification: {
    google: "LrkpdjhX9cSJh782MW0R4wZEkppXnwc_NEaz30avcsQ",
    yandex: "yandex-verification-code", // Add if you have
    yahoo: "yahoo-verification-code", // Add if you have
  },
};

// ✅ CRITICAL JSON-LD STRUCTURED DATA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TrainingCenter",
  "name": "Shanaya Training Institute Pvt Ltd",
  "alternateName": "Shanaya Training Institute",
  "description": "India's Best Engineering ONLINE Training Institute with well experience faculty from top MNC",
  "url": "https://shanayatraining.com",
  "logo": "https://shanayatraining.com/logo.png",
  "telephone": "+91-9990111835",
  "email": "sawrabh20009@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shanti Nagar, Near Newaji Tola",
    "addressLocality": "Chapra",
    "addressRegion": "Bihar",
    "postalCode": "841301",
    "addressCountry": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.7800",
    "longitude": "84.7500"
  },
  "areaServed": "India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Training Courses",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "PLC Programming Training",
          "description": "Comprehensive PLC programming course with hands-on training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Industrial Automation Course",
          "description": "Complete industrial automation training with SCADA and HMI"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/shanayatraining",
    "https://www.linkedin.com/company/shanaya-training",
    "https://www.instagram.com/shanayatraining",
    "https://twitter.com/shanayatraining"
  ],
  "openingHours": "Mo-Su 09:00-21:00",
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shanayatraining.com"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        {/* ✅ CRITICAL META TAGS */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* ✅ FAVICON - PROPER IMPLEMENTATION */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        
        {/* ✅ PRELOAD CRITICAL ASSETS */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* ✅ CANONICAL URL */}
        <link rel="canonical" href="https://shanayatraining.com" />
        
        {/* ✅ ALTERNATE LANGUAGES */}
        <link rel="alternate" hrefLang="en-IN" href="https://shanayatraining.com" />
        <link rel="alternate" hrefLang="hi-IN" href="https://shanayatraining.com/hi" />
        <link rel="alternate" hrefLang="x-default" href="https://shanayatraining.com" />

        {/* ✅ STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* ✅ ADDITIONAL VERIFICATION */}
        <meta name="google-site-verification" content="LrkpdjhX9cSJh782MW0R4wZEkppXnwc_NEaz30avcsQ" />
        
        {/* ✅ FACEBOOK DOMAIN VERIFICATION */}
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      </head>
      
      <body className="antialiased">
        {/* ✅ SCHEMA MARKUP FOR BODY */}
        <div itemScope itemType="https://schema.org/TrainingCenter">
          <Navbar />
          <main itemScope itemType="https://schema.org/WebPage">
            {children}
          </main>
          <WhatsAppFloat />
          <Footer />
        </div>
        <Analytics />
        
        {/* ✅ PERFORMANCE SCRIPTS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Lazy loading and performance optimization
              if ('loading' in HTMLImageElement.prototype) {
                const images = document.querySelectorAll('img[loading="lazy"]');
                images.forEach(img => {
                  img.src = img.dataset.src;
                });
              }
              
              // Service Worker Registration for PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}