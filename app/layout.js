import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


// ✅ SEO Metadata
export const metadata = {
  title: "Shanaya Training Institute Pvt Ltd | Best Online Engineering Design Skill Training Institute",
  description:
    "India's Best Engineering ONLINE Training Institute with well experience faculty from top MNC, Flexible timing. Low price | Join Shanaya Training Institute for expert-led training in PLC, Industrial Automation, Web Development, Digital Marketing, and more. Live sessions, hands-on practice, and career support.",
  keywords:
    "Shanaya, Shanaya Course, Shanaya Training, Shanaya Training Institute, PLC training, Industrial Automation, Skill Development, Online Training, Digital Marketing, Engineering Courses, Career Growth",
  authors: [{ name: "Shanaya Training Institute", url: "https://shanayatraining.com/" }],
  creator: "Shanaya Training Institute",
  openGraph: {
    title: "Shanaya Training Institute | Certified Industrial & IT Skill Courses",
    description:
      "Upskill with Shanaya Training Institute’s certified programs in Industrial Automation, PLC, Digital Marketing, and more. Practical live training, industry-relevant curriculum, and placement assistance.",
    url: "https://shanayatraining.com/",
    siteName: "Shanaya Training Institute",
    images: [
      {
        url: "https://shanayatraining.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Shanaya Logo",
      },
    ],
    type: "website",
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" />
        <link rel="icon" href="/apple-touch-icon.png" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon-32x32.png" />
        
        {/* Other meta tags */}
        <meta name="google-site-verification" content="LrkpdjhX9cSJh782MW0R4wZEkppXnwc_NEaz30avcsQ" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://shanayatraining.com/" />
        <meta name="robots" content="index, follow" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shanaya Training Institute",
            "url": "https://shanayatraining.com",
            "logo": "https://shanayatraining.com/logo.png"
          })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TrainingCenter",
          "name": "Shanaya Training Institute",
          "image": "https://shanayatraining.com/logo.png",
          "telephone": "+91 9990111835",
          "email": "sawrabh20009@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shanti Nagar, Near Newaji Tola, Chapra Pin 841301",
            "addressLocality": "Chapra",
            "addressRegion": "Bihar",
            "postalCode": "841301",
            "addressCountry": "India"
          }
        })}
      </script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}


