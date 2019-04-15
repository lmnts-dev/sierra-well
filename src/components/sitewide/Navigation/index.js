// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Device from './../../core/DeviceQuery';

import NavigationLarge from './Large';
import NavigationSmall from './Small';

// Constants
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Large Device Navigation
class Navigation extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      // Query our Navigation data so we can adjust our Navigation styles
      // based on Top Level Pages vs Sub Level Pages
      <StaticQuery
        query={graphql`
          query RoutesQuery {
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

          // Render our Navigation Bar and pass our Navigation state data down
          // to the styled components below.
          return (
            <>
              {/* Render our Navigation baased on Device Size*/}

              <Device Query="Mobile">
                <NavigationSmall
                  Location={location.pathname}
                  Routes={TopLevelRoutes}
                />
              </Device>

              <Device Query="Desktop">
                <NavigationLarge
                  Location={location.pathname}
                  Routes={TopLevelRoutes}
                />
              </Device>
            </>
          );
        }}
      />
    );
  }
}

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component
