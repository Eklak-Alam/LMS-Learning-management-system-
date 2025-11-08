// app/sitemap.xml/route.js
import { getServerSideSitemap } from 'next-sitemap';

export async function GET(request) {
  try {
    // Static URLs - IMPORTANT PAGES
    const staticUrls = [
      {
        loc: 'https://shanayatraining.com',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      },
      {
        loc: 'https://shanayatraining.com/about',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: 'https://shanayatraining.com/contact',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: 'https://shanayatraining.com/courses',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      },
    ];

    // Dynamic URLs - COURSES (if you have API)
    let dynamicUrls = [];
    
    // If you have courses API, uncomment this:
    /*
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (res.ok) {
        const courses = await res.json();
        dynamicUrls = courses.map((course) => ({
          loc: `https://shanayatraining.com/courses/${course.slug}`,
          lastmod: course.updatedAt || new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.9,
        }));
      }
    } catch (error) {
      console.error('Failed to fetch courses for sitemap:', error);
    }
    */

    // If no API, add some sample course URLs manually:
    const sampleCourses = [
      'plc-programming-training',
      'industrial-automation-course',
      'web-development-course',
      'digital-marketing-training',
      'cad-training',
      'mechanical-design-course'
    ];

    dynamicUrls = sampleCourses.map(slug => ({
      loc: `https://shanayatraining.com/courses/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }));

    // Combine all URLs
    const allUrls = [...staticUrls, ...dynamicUrls];

    // Generate sitemap
    return getServerSideSitemap(allUrls);

  } catch (error) {
    console.error('Sitemap generation error:', error);
    
    // Fallback to basic sitemap if error
    const fallbackUrls = [
      {
        loc: 'https://shanayatraining.com',
        lastmod: new Date().toISOString(),
      }
    ];
    
    return getServerSideSitemap(fallbackUrls);
  }
}