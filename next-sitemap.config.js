// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shanayatraining.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/private/*', '/api/*'],
  
  // Transform function for each page
  transform: async (config, path) => {
    // Custom priority for important pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/courses')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Additional paths to include
  additionalPaths: async (config) => {
    const result = [];

    // Add important static paths
    result.push(await config.transform(config, '/about'));
    result.push(await config.transform(config, '/contact'));
    result.push(await config.transform(config, '/courses'));

    return result;
  },
};