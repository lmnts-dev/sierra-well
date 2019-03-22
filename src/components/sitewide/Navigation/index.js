// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Vendor
// import Img from 'gatsby-image';

// Styles
import NavigationStyle, {
  ActiveTab,
} from 'components/sitewide/Navigation/styles.scss';

// Components
import Button from 'components/library/Button/';

// Constants
import { Theme } from 'constants/Theme';
import logo from '../../../assets/images/icon.png';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LinkList = () => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allPrismicNavigation {
          edges {
            node {
              id
              data {
                module_name
                main {
                  label
                  slug
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Pull all Navigation Lists from Prismic
      const AllNavigation = data.allPrismicNavigation.edges;

      // Pull only the Main Navigation list.
      const MainNavigation = AllNavigation.map(
        (linklist, index) => linklist.node.data.main
      );

      // Convert these to usable elements
      return (
        <ul>
          {MainNavigation[0].map((link, index) => (
            <li key={index}>
              <Link to={link.slug} activeStyle={ActiveTab}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      );
    }}
  />
);

const Navigation = () => (
  <NavigationStyle>
    <NavigationStyle.BrandingBlock>
      <Link to="/">
        <img src={logo} alt={Theme.Site.Title} height="30px" />
      </Link>
    </NavigationStyle.BrandingBlock>

    <NavigationStyle.LinkListBlock>
      <NavigationStyle.TopLinkListWrapper>
        <LinkList />
      </NavigationStyle.TopLinkListWrapper>
    </NavigationStyle.LinkListBlock>

    <NavigationStyle.CommunicationBlock>
      <Button label="Get in Touch" to="/contact" color="nightsky" />
    </NavigationStyle.CommunicationBlock>
  </NavigationStyle>
);

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component
