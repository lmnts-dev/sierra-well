// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Vendor
import { StaticQuery, graphql } from 'gatsby';

//  Components
import Head from 'components/core/Head';
import PageTheme from 'components/core/PageTheme';

// Constants
import { Theme, Root } from 'constants/Theme';

// Styles
import { GlobalStyle } from 'constants/styles/Global';
import SiteGrid from 'components/core/Layout/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Mobile Menu Colors

const MenuPageTheme = createGlobalStyle`
  nav {
    /* Top Navigation */
    &.nav-mobile {
      background-color: ${Theme.Color.Black};

      i, span, .label {
        color: Theme.Color.Slate;
      }
    }
  }

  .nav-top-mobile-inner {
    &:before {
      background-color: ${Theme.Color.Black};
    }

    &.scroll {
      &:before {
        background-color: ${Theme.Color.Black};
      }
    }
  }
`;

const Layout = ({
  data,
  children,
  BgColor,
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
  MenuLocationData,
}) => (
  <SiteGrid>
    {MenuLocationData
      ? console.log(MenuLocationData)
      : console.log('not a menu page')}
    {MenuLocationData ? <MenuPageTheme /> : null}
    <GlobalStyle />
    <PageTheme
      BgColor={BgColor}
      PrimaryColor={PrimaryColor}
      SecondaryColor={SecondaryColor}
      TertiaryColor={TertiaryColor}
    />
    <Head />
    <SiteGrid.Inner>{children}</SiteGrid.Inner>
  </SiteGrid>
);

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

export default LayoutWithQuery;

//////////////////////////////////////////////////////////////////////
// End Component
