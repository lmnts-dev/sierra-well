// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import FooterStyle from 'components/sitewide/Footer/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

class Footer extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
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
            <FooterStyle location={location.pathname} routes={TopLevelRoutes}>
              <FooterStyle.Section>
                <FooterStyle.Inner location={location.pathname} routes={TopLevelRoutes}>
                  <span className="copyright">© {new Date().getFullYear()} Sierra Well</span>
                  <span>
                    Made with{' '}
                    <span role="img" aria-label="Heart">
                      ️❤️️
                    </span>{' '}
                    in Nevada
                  </span>
                </FooterStyle.Inner>
              </FooterStyle.Section>
            </FooterStyle>
          );
        }}
      />
    );
  }
}

export default Footer;

//////////////////////////////////////////////////////////////////////
// End Component
