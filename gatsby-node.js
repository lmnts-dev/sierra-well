const _ = require(`lodash`);
const path = require(`path`);
const slash = require(`slash`);
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

// Slugify Helper

function slugify(string) {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

// Begin Exports

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

        allQuestionsJson {
          edges {
            node {
              id
              slug
              coverImage
              category
              tags
            }
          }
        }

        allLocationsJson {
          edges {
            node {
              id
              slug
              geography {
                city
                state
              }
              nearby {
                slug
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
    const categoryTemplate = path.resolve(
      `src/templates/Learn/Category/index.js`
    );

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
            CategorySlug: CategorySlug,
          },
        });
      });

      // Create our Question Pages
      const questionTemplate = path.resolve(`src/templates/Question/index.js`);

      _.each(result.data.allQuestionsJson.edges, edge => {
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
          path: `/learn/${slugify(edge.node.category)}/${edge.node.slug}/`,
          component: slash(questionTemplate),
          context: {
            Slug: edge.node.slug,
            CoverImage: edge.node.coverImage,
          },
        });

        //  Create our Tag Pages
        _.each(edge.node.tags, tag => {
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/learn/${slugify(edge.node.category)}/${slugify(tag)}/${
              edge.node.slug
            }/`,
            component: slash(questionTemplate),
            context: {
              Slug: edge.node.slug,
              CoverImage: edge.node.coverImage,
            },
          });
        });
      });

      // Create our Location Landing Pages
      const locationLandingTemplate = path.resolve(
        `src/templates/Location/Landing/index.js`
      );
      const locationMenuTemplate = path.resolve(
        `src/templates/Location/Menu/index.js`
      );
      const locationSpecialTemplate = path.resolve(
        `src/templates/Location/Special/index.js`
      );

      _.each(result.data.allLocationsJson.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        // We are using 'lodash' above for the _.each function. Read more:
        // https://lodash.com/docs/4.17.11#forEach

        // Use Gatsby's createPage() function. Read more:
        // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/

        // Create main landing pages.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/locations/${edge.node.geography.state}/${edge.node.slug}/`,
          component: slash(locationLandingTemplate),
          context: {
            Slug: edge.node.slug,
          },
        });

        // Create main menu pages.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/locations/${edge.node.geography.state}/${
            edge.node.slug
          }/menu/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.slug,
          },
        });

        // Create menu pages with /menu/ root url.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/menu/${edge.node.geography.state}/${edge.node.slug}/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.slug,
          },
        });

        // Create specials collection pages.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/locations/${edge.node.geography.state}/${
            edge.node.slug
          }/specials/`,
          component: slash(locationSpecialTemplate),
          context: {
            Slug: edge.node.slug,
          },
        });

        // Hypothetical Specials Postings:
        // _.each(result.data.allQuestionsJson.edges, special => {
        //   // Create specials landing pages.
        //   createPage({
        //     // Each page is required to have a `path` as well
        //     // as a template component. The `context` is
        //     // optional but is often necessary so the template
        //     // can query data specific to each page.
        //     path: `/locations/${edge.node.geography.state}/${
        //       edge.node.slug
        //     }/specials/${special.node.slug}`,
        //     component: slash(locationSpecialTemplate),
        //     context: {
        //       Slug: edge.node.slug,
        //     },
        //   });
        // });

        // Create our Nearby Location Pages:
        const locationNearbyMenuTemplate = path.resolve(
          `src/templates/Location/Menu/Nearby/index.js`
        );

        _.each(edge.node.nearby, nearby => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          // We are using 'lodash' above for the _.each function. Read more:
          // https://lodash.com/docs/4.17.11#forEach

          // Use Gatsby's createPage() function. Read more:
          // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/

          // Create Nearby Menu Pages
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/locations/${edge.node.geography.state}/${edge.node.slug}/${
              nearby.slug
            }/menu/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.slug,
              NearbySlug: nearby.slug,
            },
          });

          // Create Menu Pages with root /menu/ url
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/menu/${edge.node.geography.state}/${edge.node.slug}/${
              nearby.slug
            }/menu/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.slug,
              NearbySlug: nearby.slug,
            },
          });

          // Create nearby specials pages.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/locations/${edge.node.geography.state}/${edge.node.slug}/${
              nearby.slug
            }/specials/`,
            component: slash(locationSpecialTemplate),
            context: {
              Slug: edge.node.slug,
              NearbySlug: nearby.slug,
            },
          });
        });
      });
    });
  });
};
