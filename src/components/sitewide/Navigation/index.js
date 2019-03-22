// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
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
import logo from '../../../assets/images/brandmark.png';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The LinkList loop.
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

// The Navigation Component itself.
class Navigation extends PureComponent {
  render() {
    const { children, location } = this.props;

    console.log(location.pathname)

    return (
      <NavigationStyle>
        <NavigationStyle.Top>
          <NavigationStyle.Top.BrandingBlock>
            <Link to="/">
              <img src={logo} alt={Theme.Site.Title} height="30px" />
            </Link>
          </NavigationStyle.Top.BrandingBlock>

          <NavigationStyle.Top.LinkListBlock>
            <NavigationStyle.Top.TopLinkListWrapper location={location.pathname}>
              <LinkList />
            </NavigationStyle.Top.TopLinkListWrapper>
          </NavigationStyle.Top.LinkListBlock>

          <NavigationStyle.Top.CommunicationBlock>
            <Button label="Get in Touch" to="/contact" color="nightsky" />
          </NavigationStyle.Top.CommunicationBlock>
        </NavigationStyle.Top>
        <NavigationStyle.Bottom location={location.pathname}>
          <NavigationStyle.Bottom.LinkListWrapper>
            <LinkList />
          </NavigationStyle.Bottom.LinkListWrapper>
        </NavigationStyle.Bottom>
      </NavigationStyle>
    );
  }
}

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component
