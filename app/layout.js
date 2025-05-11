import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// ✅ SEO Metadata
export const metadata = {
  title: "My Awesome Website | Next.js",
  description: "A fast, SEO-friendly website built with Next.js and deployed on Vercel.",
  keywords: "next.js, SEO, vercel, static site, personal website",
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  creator: "Your Name",
  openGraph: {
    title: "My Awesome Website | Next.js",
    description: "A fast, SEO-optimized website built with Next.js.",
    url: "https://yourdomain.com",
    siteName: "My Awesome Website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Optional Open Graph image
        width: 1200,
        height: 630,
        alt: "Website Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Website | Next.js",
    description: "A fast, SEO-friendly website built with Next.js and deployed on Vercel.",
    images: ["https://yourdomain.com/og-image.jpg"], // Optional
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Best practices for SEO and performance */}
        {/* <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://lms-six-weld.vercel.app/" /> */}
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
