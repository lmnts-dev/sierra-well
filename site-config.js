/* eslint-disable */

// site-config.js:
// This is the sitewide information that is used throughout the entire
// build of the site. This goes from SEO to headings and also into the
// core Gatsby config files as well.

const path = require('path');

module.exports = {
  siteTitle: `L&M Gatsby Starter`,
  siteTitleShort: `lmnts-gatsby-starter`,
  siteDescription: `Making the web more scalable, accessible, and flexible. Since 2014.`,
  siteBaseKeywords: `design, graphic design`,
  siteUrl: `https://laxaltandmciver.co`,
  themeColor: `#DB8DBA`,
  secondaryColor: `#3C3049`,
  backgroundColor: `#fff`,
  pathPrefix: '/',
  logo: path.resolve(__dirname, 'src/assets/images/icon.png'),
  logoLight: path.resolve(__dirname, 'src/assets/images/icon.png'),
  logoDark: path.resolve(__dirname, 'src/assets/images/icon.png'),
  social: {
    twitter: `laxaltandmciver`,
    facebook: `laxaltandmciver`,
    instagram: `laxaltandmciver`,
    fbAppId: `966242223397117`,
  },
};
