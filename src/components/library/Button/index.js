// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Vendor
import { StaticQuery, graphql } from 'gatsby';

// Styles
import ButtonStyle from 'components/library/Button/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Button = ({ label, to, color }) => (
  <ButtonStyle to={to} color={color}>
    {label}
  </ButtonStyle>
);

export default Button;

//////////////////////////////////////////////////////////////////////
// End Component
