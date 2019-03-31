// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Media from 'react-media';

// Constants
import { Base } from 'constants/styles/Base';

// Components
import FooterLarge from './Large';
import FooterSmall from './Small';

// Begin Component
//////////////////////////////////////////////////////////////////////

class Footer extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      // Query our Navigation data so we can adjust our Footer styles
      // based on Top Level Pages vs Sub Level Pages.
      <StaticQuery
        query={graphql`
          query FooterRoutesQuery {
            allPrismicNavigation {
              edges {
                node {
                  id
                  data {
                    module_name
                    main {
                      slug
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          // Pull the allPrismicNavigation query for our Navigation List data.
          const TopLevelRoutesData =
            data.allPrismicNavigation.edges[0].node.data.main;

          // Convert & group our Navigation objects by slug.
          const TopLevelRoutes = TopLevelRoutesData.map(function(route) {
            return route.slug;
          });

          // Render our Footer Bar and pass our Navigation state data down
          // to the styled components below.
          return (
            <>
              {/* Render our Footer baased on Device Size*/}
              <Media query={{ maxWidth: Base.Media.Width.Md }}>
                {matches =>
                  matches ? (
                    // Render Mobile Footer
                    <FooterSmall
                      Location={location.pathname}
                      Routes={TopLevelRoutes}
                    />
                  ) : (
                    // Render Desktop Footer
                    <FooterLarge
                      Location={location.pathname}
                      Routes={TopLevelRoutes}
                    />
                  )
                }
              </Media>
            </>
          );
        }}
      />
    );
  }
}

export default Footer;

//////////////////////////////////////////////////////////////////////
// End Component
