const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};

// // Implement the Gatsby API “createPages”. This is
// // called after the Gatsby bootstrap is finished so you have
// // access to any information necessary to programmatically
// // create pages.

// // This code is based on GatsbyGram's implementation of createPages():
// // Learn more: https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   // The “graphql” function allows us to run arbitrary
//   // queries against this Gatsbygram's graphql schema. Think of
//   // it like Gatsbygram has a built-in database constructed
//   // from static data that you can run queries against.
//   //
//   // Post is a data node type derived from data/posts.json
//   // which is created when scraping Instagram. “allPostsJson”
//   // is a "connection" (a GraphQL convention for accessing
//   // a list of nodes) gives us an easy way to query all
//   // Post nodes.
//   return graphql(
//     `
//       {
//         allPostsJson(limit: 1000) {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create image post pages.
//     const postTemplate = path.resolve(`src/templates/post-page.js`)
//     // We want to create a detailed page for each
//     // Instagram post. Since the scraped Instagram data
//     // already includes an ID field, we just use that for
//     // each page's path.
//     _.each(result.data.allPostsJson.edges, edge => {
//       // Gatsby uses Redux to manage its internal state.
//       // Plugins and sites can use functions like "createPage"
//       // to interact with Gatsby.
//       createPage({
//         // Each page is required to have a `path` as well
//         // as a template component. The `context` is
//         // optional but is often necessary so the template
//         // can query data specific to each page.
//         path: `/${slug(edge.node.id)}/`,
//         component: slash(postTemplate),
//         context: {
//           id: edge.node.id,
//         },
//       })
//     })
//   })
// }