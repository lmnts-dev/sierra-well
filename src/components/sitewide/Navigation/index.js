// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Media from 'react-media';

// Vendor
// import Img from 'gatsby-image';

// Styles
import NavigationStyle from './styles.scss';

// Components
import Button from 'components/library/Button/';
import LinkList from 'components/core/LinkList/';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import logo from '../../../assets/images/brandmark.png';

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
            <div>
              {/* Render our Navigation baased on Device Size*/}
              <Media query={{ maxWidth: Base.Media.Width.Md }}>
                {matches =>
                  matches ? (
                    // Render Mobile Navigation
                    <p>Small Nav</p>
                  ) : (
                    // Render Desktop Navigation
                    <NavigationStyle>
                      <NavigationStyle.Top className="nav-top">
                        <NavigationStyle.Top.BrandingBlock>
                          <Link to="/">
                            <img
                              src={logo}
                              alt={Theme.Site.Title}
                              height="30px"
                            />
                          </Link>
                        </NavigationStyle.Top.BrandingBlock>

                        <NavigationStyle.Top.LinkListBlock>
                          <NavigationStyle.Top.TopLinkListWrapper
                            location={location.pathname}
                            routes={TopLevelRoutes}
                          >
                            <LinkList ActiveClass="active" />
                          </NavigationStyle.Top.TopLinkListWrapper>
                        </NavigationStyle.Top.LinkListBlock>

                        <NavigationStyle.Top.CommunicationBlock>
                          <Button
                            label="Get in Touch"
                            to="/contact"
                            color="nightsky"
                          />
                        </NavigationStyle.Top.CommunicationBlock>
                      </NavigationStyle.Top>

                      <NavigationStyle.Bottom
                        location={location.pathname}
                        routes={TopLevelRoutes}
                        className="nav-bottom"
                      >
                        <NavigationStyle.Bottom.LinkListWrapper
                          location={location.pathname}
                          routes={TopLevelRoutes}
                        >
                          <LinkList ActiveClass="active" />
                        </NavigationStyle.Bottom.LinkListWrapper>
                      </NavigationStyle.Bottom>
                    </NavigationStyle>
                  )
                }
              </Media>
            </div>
          );
        }}
      />
    );
  }
}

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component
