import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// ✅ SEO Metadata
export const metadata = {
  title: "Shanaya Training Institute | Best IT & Skill Development Courses",
  description:
    "Join Shanaya Training Institute for expert-led courses in web development, programming, digital marketing, and more. 100% practical training with certification.",
  keywords:
    "Shanaya Training Institute, IT courses, web development, training institute, coding, skill development, digital marketing",
  authors: [{ name: "Shanaya Training Institute", url: "https://shanayatraining.com/" }],
  creator: "Shanaya Training Institute",
  openGraph: {
    title: "Shanaya Training Institute | Learn IT Skills & Grow Your Career",
    description:
      "Build your career with top-quality IT training in web development, software, and marketing at Shanaya Training Institute.",
    url: "https://shanayatraining.com/",
    siteName: "Shanaya Training Institute",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
