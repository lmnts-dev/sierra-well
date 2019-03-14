// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Vendor
import { StaticQuery, graphql } from 'gatsby';

//  Components
import Head from 'components/core/Head';

// Styles
import GlobalStyle from 'constants/styles/GlobalStyles.scss.js';
import Root from 'constants/root/RootVariables.scss';
import SiteGrid from 'components/core/Layout/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Layout = ({ data, children }) => (
  <SiteGrid>
    <Root />
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
