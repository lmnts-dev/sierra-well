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
import FooterLargeStyle from './styles.scss';

const FooterLarge = ({ Location, Routes }) => (
  <FooterLargeStyle location={Location} routes={Routes}>
    <FooterLargeStyle.Section>
      <FooterLargeStyle.Inner location={Location} routes={Routes}>
        <span className="copyright">
          © {new Date().getFullYear()} Be. Cannabis Stores
        </span>
        <span>
          Made with
          <span role="img" aria-label="Heart">
            ️❤️️
          </span>
          in Reno, NV & Brooklyn, NYC
        </span>
      </FooterLargeStyle.Inner>
    </FooterLargeStyle.Section>
  </FooterLargeStyle>
);

export default FooterLarge;
