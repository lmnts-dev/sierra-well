// Large Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import FooterSmallStyle from './styles.scss';

const FooterSmall = ({ Location, Routes }) => (
  <FooterSmallStyle location={Location} routes={Routes}>
    Small Footer
  </FooterSmallStyle>
);

export default FooterSmall;
