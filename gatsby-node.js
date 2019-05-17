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

        ## From Prismic:

        allPrismicSpecial {
          edges {
            node {
              id
              uid
            }
          }
        }

        allPrismicTopLevelPage {
          edges {
            node {
              id
              uid
            }
          }
        }

        allPrismicLocation {
          edges {
            node {
              id
              uid
              data {
                geo_state
                nearby_locations {
                  nearby_slug
                  nearby_name
                }
              }
            }
          }
        }

        allPrismicQuestion {
          edges {
            node {
              id
              uid
              tags
              data {
                category {
                  uid
                }
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

    ////////////////////////////////////////////////////////////////////////////////////

    // Top Level Page template.
    const topLevelPageTemplate = path.resolve(
      `src/templates/TopLevelPage/index.js`
    );

    ////////////////////////////////////////////////////////////////////////////////////

    // Create Top Level Pages
    _.each(result.data.allPrismicTopLevelPage.edges, edge => {
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
        path: `/${edge.node.uid}/`,
        component: slash(topLevelPageTemplate),
        context: {
          Id: edge.node.id,
        },
      });
    });

    ////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////

    // Create Prismic Question Pages
    const questionTemplate = path.resolve(`src/templates/Question/index.js`);

    _.each(result.data.allPrismicQuestion.edges, edge => {
      const questionPath = `/learn/${
        edge.node.data.category
          ? edge.node.data.category.uid
          : 'cannabis-questions'
      }/${edge.node.uid}/`;

      createPage({
        path: questionPath,
        component: slash(questionTemplate),
        context: {
          Id: edge.node.id,
        },
      });

      ////////////////////////////////////////////////////////////////////////////////////

      //  Create our Tagged Question Pages
      _.each(edge.node.tags, tag => {
        const taggedQuestionPath = `/learn/${
          edge.node.data.category
            ? edge.node.data.category.uid
            : 'cannabis-questions'
        }/${slugify(tag)}/${edge.node.uid}/`;

        createPage({
          path: taggedQuestionPath,
          component: slash(questionTemplate),
          context: {
            Id: edge.node.id,
          },
        });
      });
    });

    ////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////

    // Create our Question Pages

    // _.each(result.data.allQuestionsJson.edges, edge => {
    //   createPage({
    //     path: `/learn/${slugify(edge.node.category)}/${edge.node.slug}/`,
    //     component: slash(questionTemplate),
    //     context: {
    //       Id: 'Prismic__Question__XN3BWBEAACYAm_Jo',
    //       Slug: edge.node.slug,
    //     },
    //   });

    //   ////////////////////////////////////////////////////////////////////////////////////

    //   //  Create our Tagged Question Pages
    //   _.each(edge.node.tags, tag => {
    //     createPage({
    //       path: `/learn/${slugify(edge.node.category)}/${slugify(tag)}/${
    //         edge.node.slug
    //       }/`,
    //       component: slash(questionTemplate),
    //       context: {
    //         Id: 'Prismic__Question__XN3BWBEAACYAm_Jo',
    //         Slug: edge.node.slug,
    //         CoverImage: edge.node.coverImage,
    //       },
    //     });
    //   });
    // });

    ////////////////////////////////////////////////////////////////////////////////////

    // Learn category page template.
    const categoryTemplate = path.resolve(
      `src/templates/Learn/Category/index.js`
    );

    // Learn tag page template.
    const tagTemplate = path.resolve(`src/templates/Learn/Tag/index.js`);

    ////////////////////////////////////////////////////////////////////////////////////

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

      ////////////////////////////////////////////////////////////////////////////////////

      // Create our Specials Pages
      const specialTemplate = path.resolve(`src/templates/Special/index.js`);

      _.each(result.data.allPrismicSpecial.edges, edge => {
        createPage({
          path: `/specials/${edge.node.uid}/`,
          component: slash(specialTemplate),
          context: {
            Id: edge.node.id,
          },
        });
      });

      ////////////////////////////////////////////////////////////////////////////////////

      // Create our Location Landing Pages
      const locationLandingTemplate = path.resolve(
        `src/templates/Location/Landing/index.js`
      );
      const locationMenuTemplate = path.resolve(
        `src/templates/Location/Menu/index.js`
      );
      const locationSpecialTemplate = path.resolve(
        `src/templates/Location/Landing/index.js`
      );

      _.each(result.data.allPrismicLocation.edges, edge => {
        ////////////////////////////////////////////////////////////////////////////////////

        // Create main landing pages.
        createPage({
          path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/`,
          component: slash(locationLandingTemplate),
          context: {
            Slug: edge.node.uid,
            Id: edge.node.id,
          },
        });

        ////////////////////////////////////////////////////////////////////////////////////

        // Create main menu pages. with /locations/ root url
        createPage({
          path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/menu/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: '',
            Id: edge.node.id,
          },
        });

        // 'online' context
        createPage({
          path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/menu/online`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: 'online',
            Id: edge.node.id,
          },
        });

        // 'pick-up' context
        createPage({
          path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/menu/pick-up`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: 'pick-up',
            Id: edge.node.id,
          },
        });

        // 'delivery' context
        createPage({
          path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/menu/delivery`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: 'delivery',
            Id: edge.node.id,
          },
        });

        ////////////////////////////////////////////////////////////////////////////////////

        // Create menu pages with /menu/ root url.
        createPage({
          path: `/menu/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: '',
            Id: edge.node.id,
          },
        });

        // 'online' context
        createPage({
          path: `/menu/online/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: 'online',
            Id: edge.node.id,
          },
        });

        // 'pick-up' context
        createPage({
          path: `/menu/pick-up/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: 'pick-up',
            Id: edge.node.id,
          },
        });

        // 'online' context
        createPage({
          path: `/menu/delivery/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/`,
          component: slash(locationMenuTemplate),
          context: {
            Slug: edge.node.uid,
            OrderContext: 'delivery',
            Id: edge.node.id,
          },
        });

        ////////////////////////////////////////////////////////////////////////////////////

        // Create specials collection pages.
        createPage({
          path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
            edge.node.uid
          }/specials/`,
          component: slash(locationSpecialTemplate),
          context: {
            Slug: edge.node.uid,
            Id: edge.node.id,
            Specials: true,
          },
        });

        ////////////////////////////////////////////////////////////////////////////////////

        // Create our location-specifc Specials Pages
        const specialTemplate = path.resolve(`src/templates/Special/index.js`);

        _.each(result.data.allPrismicSpecial.edges, special => {
          createPage({
            path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/specials/${special.node.uid}/`,
            component: slash(specialTemplate),
            context: {
              Id: special.node.id,
            },
          });
        });

        ////////////////////////////////////////////////////////////////////////////////////

        // Create our Nearby Location Pages:
        const locationNearbyMenuTemplate = path.resolve(
          `src/templates/Location/Menu/index.js`
        );

        _.each(edge.node.data.nearby_locations, nearby => {
          ////////////////////////////////////////////////////////////////////////////////////

          // Create Nearby Menu Pages with /locations/ root url
          createPage({
            path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/menu/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: '',
              Id: edge.node.id,
            },
          });

          // 'online' context
          createPage({
            path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/menu/online/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: 'online',
              Id: edge.node.id,
            },
          });

          // 'delivery' context
          createPage({
            path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/menu/delivery/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: 'delivery',
              Id: edge.node.id,
            },
          });

          // 'pick-up' context
          createPage({
            path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/menu/pick-up/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: 'pick-up',
              Id: edge.node.id,
            },
          });

          ////////////////////////////////////////////////////////////////////////////////////

          // Create Menu Pages with root /menu/ url
          createPage({
            path: `/menu/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: '',
              Id: edge.node.id,
            },
          });

          // 'online' context
          createPage({
            path: `/menu/online/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: 'online',
              Id: edge.node.id,
            },
          });

          // 'pickup' context
          createPage({
            path: `/menu/pick-up/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: 'pick-up',
              Id: edge.node.id,
            },
          });

          // 'delivery' context
          createPage({
            path: `/menu/delivery/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/`,
            component: slash(locationNearbyMenuTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              OrderContext: 'delivery',
              Id: edge.node.id,
            },
          });

          ////////////////////////////////////////////////////////////////////////////////////

          // Create nearby specials collection pages.
          createPage({
            path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
              edge.node.uid
            }/${nearby.nearby_slug}/specials/`,
            component: slash(locationSpecialTemplate),
            context: {
              Slug: edge.node.uid,
              NearbySlug: nearby.nearby_slug,
              NearbyName: nearby.nearby_name,
              Id: edge.node.id,
            },
          });

          // Create nearby specials article pages.

          const nearbySpecialTemplate = path.resolve(
            `src/templates/Special/index.js`
          );

          _.each(result.data.allPrismicSpecial.edges, special => {
            createPage({
              path: `/locations/${edge.node.data.geo_state.toLowerCase()}/${
                edge.node.uid
              }/${nearby.nearby_slug}/specials/${special.node.uid}/`,
              component: slash(nearbySpecialTemplate),
              context: {
                Id: special.node.id,
              },
            });
          });

          ////////////////////////////////////////////////////////////////////////////////////
        });
      });
    });
  });
};
