// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import FooterStyle from 'components/sitewide/Footer/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Footer = () => (
  <FooterStyle>
    <FooterStyle.Section>
      <FooterStyle.Inner>
        <strong>{Theme.Site.Title}</strong>
        <span>© {new Date().getFullYear()}</span>
      </FooterStyle.Inner>
    </FooterStyle.Section>
  </FooterStyle>
);

export default Footer;

//////////////////////////////////////////////////////////////////////
// End Component
