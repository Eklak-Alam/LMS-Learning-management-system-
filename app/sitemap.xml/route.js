// app/sitemap.xml/route.js

import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
  const staticUrls = [
    {
      loc: 'https://shanayatraining.com/',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://shanayatraining.com/about',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://shanayatraining.com/contact',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://shanayatraining.com/courses',
      lastmod: new Date().toISOString(),
    },
  ];

  let dynamicUrls = [];
  try {
    const res = await fetch('https://api.shanayatraining.com/courses', {
      cache: 'no-store',
    });
    const courses = await res.json();

    dynamicUrls = courses.map((course) => ({
      loc: `https://shanayatraining.com/course/${course.slug}`,
      lastmod: new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch dynamic URLs", error);
  }

  return getServerSideSitemap([...staticUrls, ...dynamicUrls]);
}
