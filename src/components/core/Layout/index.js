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

// Styles
import { GlobalStyle } from 'constants/styles/Global';
import SiteGrid from 'components/core/Layout/styles.scss';
import { Theme } from '../../../constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PageBackground = createGlobalStyle`
body {
  background-color: ${props =>
    props.PageColor ? props.PageColor : Theme.Color.Background};
}
`;

const Layout = ({ data, children, PageColor }) => (
  <SiteGrid>
    <GlobalStyle />
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
