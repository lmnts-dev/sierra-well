// gatsby-config.js:
// This is the core settings to Gatsby.

// Our Sitewide variables
const siteConfig = require('./site-config');
const path = require(`path`);

// This is for Prismic.io
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Begin Component
//////////////////////////////////////////////////////////////////////

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/assets/images/`,
        },
      },
    },

    // For v1 Site Launch to transform .json data into
    // GraphQL nodes so we can run createPages() in
    // gatsby-node.js
    `gatsby-transformer-json`,

    // For Slick Slider
    `gatsby-plugin-sass`,

    // For Intercom

    // {
    //   resolve: `gatsby-plugin-intercom`,
    //   options: {
    //     appId: 'd5dbftk9',
    //   },
    // },

    // gatsby-source-filesystem
    // So we can load hard coded images with
    // gatsby-image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },

    // So we can load our JSON data via
    // GraphQL nodes so we can run createPages() in
    // gatsby-node.js
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`, `json`),
      },
    },

    // Set up Prismic.io
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `sierrawell`,
        accessToken: `MC5YSW02TGhFQUFNQ2phVFdl.ElB277-9KO-_ve-_ve-_vTZu77-9X--_ve-_vS0e77-9Zu-_ve-_ve-_ve-_ve-_vSYs77-9Rw4wUh4o`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          dashboard: require('./src/schemas/dashboard.json'),
          location: require('./src/schemas/location.json'),
          navigation: require('./src/schemas/navigation.json'),
          person: require('./src/schemas/person.json'),
          question: require('./src/schemas/question.json'),
          question_category: require('./src/schemas/question_category.json'),
          settings: require('./src/schemas/settings.json'),
          special: require('./src/schemas/special.json'),
          top_level_page: require('./src/schemas/top_level_page.json'),
        },
      },
    },

    // // Load files from /content/ folder
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/content`,
    //   },
    // },

    // // Google Analytics
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Puts tracking script in the head instead of the body
    //     head: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //   },
    // },

    // // Machine Learning Based Prefetching / Prerendering with Guess.js
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     // Find the view id in the GA admin in a section labeled "views"
    //     GAViewID: `VIEW_ID`,
    //     minimumThreshold: 0.03,
    //     // The "period" for fetching analytic data.
    //     period: {
    //       startDate: new Date("2018-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
  ],
};
