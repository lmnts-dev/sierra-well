const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);
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

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

// This code is based on GatsbyGram's implementation of createPages():
// Learn more: https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // The “graphql” function allows us to run arbitrary
  // queries against this Gatsbygram's graphql schema. Think of
  // it like Gatsbygram has a built-in database constructed
  // from static data that you can run queries against.
  //
  // Post is a data node type derived from data/posts.json
  // which is created when scraping Instagram. “allPostsJson”
  // is a "connection" (a GraphQL convention for accessing
  // a list of nodes) gives us an easy way to query all
  // Post nodes.
  return graphql(
    `
      {
        allQuestionCategoriesJson {
          edges {
            node {
              Slug
              Tags {
                Slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Learn category page template.
    const categoryTemplate = path.resolve(`src/templates/Learn/Category/index.js`);

    // Learn tag page template.
    const tagTemplate = path.resolve(`src/templates/Learn/Tag/index.js`);

    // Create Category Pages
    _.each(result.data.allQuestionCategoriesJson.edges, edge => {
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby. 
      // We are using 'lodash' above for the _.each function. Read more:
      // https://lodash.com/docs/4.17.11#forEach

      // Use Gatsby's createPage() function. Read more:
      // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: `/learn/${edge.node.Slug}/`,
        component: slash(categoryTemplate),
        context: {
          Slug: edge.node.Slug,
        },
      });

      // Create Tag Pages
      const CategorySlug = edge.node.Slug;

      _.each(edge.node.Tags, tag => {
        createPage({
          path: `/learn/${CategorySlug}/${tag.Slug}/`,
          component: slash(tagTemplate),
          context: {
            TagSlug: tag.Slug,
            CategorySlug: CategorySlug
          },
        });
      });
    });
  });
};
