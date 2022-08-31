/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.theselected.io",
  generateRobotsTxt: true, // (optional)
  // ...other options
  priority: 1.0,
  changefreq: "always",
};

module.exports = config;
