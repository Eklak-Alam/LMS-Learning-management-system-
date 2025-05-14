import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


// ✅ SEO Metadata
export const metadata = {
  title: "Shanaya Training Institute Pvt Ltd | Expert Training in Industrial & IT Skills",
  description:
    "Upskill with Shanaya Training Institute’s certified programs in Industrial Automation, PLC, Digital Marketing, and more. Practical live training, industry-relevant curriculum, and placement assistance.",
  keywords:
    "Shanaya, Shanaya Course, Shanaya Training, Shanaya Training Institute, PLC training, Industrial Automation, Skill Development, Online Training, Digital Marketing, Engineering Courses, Career Growth",
  authors: [{ name: "Shanaya Training Institute", url: "https://shanayatraining.com/" }],
  creator: "Shanaya Training Institute",
  openGraph: {
    title: "Shanaya Training Institute | Certified Industrial & IT Skill Courses",
    description:
      "Join Shanaya Training Institute for expert-led training in PLC, Industrial Automation, Web Development, Digital Marketing, and more. Live sessions, hands-on practice, and career support.",
    url: "https://shanayatraining.com/",
    siteName: "Shanaya Training Institute",
    images: [
      {
        url: "https://shanayatraining.com/logo.png", // ✅ Use public image
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://shanayatraining.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shanaya Training Institute" />
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
