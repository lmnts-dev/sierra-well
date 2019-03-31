// Small Navigation Item Component:
// This is an individual item of the
// Small Navigation component.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Vendor
// import Img from 'gatsby-image';

// Styles
import { MenuContainerStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MenuContainer = () => (
  <MenuContainerStyle>
    <MenuContainerStyle.Inner>
      <iframe
        className="dutchie-iframe"
        frameBorder="0"
        title="menu"
        src="https://www.dutchie.com/embedded-menu/sierra-well-reno/menu?"
      />
    </MenuContainerStyle.Inner>
  </MenuContainerStyle>
);

export default MenuContainer;

//////////////////////////////////////////////////////////////////////
// End Component
