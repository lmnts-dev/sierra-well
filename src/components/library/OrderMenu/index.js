// OrderMenu Component:
// This is the component for the iFrame menu
// embeds for ordering products.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import {
  MenuContainerMobileStyle,
  MenuContainerDesktopStyle,
} from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const OrderMenuDesktop = ({ City }) => (
  <MenuContainerDesktopStyle>
    <MenuContainerDesktopStyle.Inner GutterCancel="right">
      <MenuContainerDesktopStyle.Wrap>
        <iframe
          className="dutchie-iframe-desktop"
          frameBorder="0"
          title="menu-example"
          src="https://www.dutchie.com/embedded-menu/sierra-well-reno/menu?"
        />
      </MenuContainerDesktopStyle.Wrap>
    </MenuContainerDesktopStyle.Inner>
  </MenuContainerDesktopStyle>
);

export const OrderMenuMobile = ({ City }) => (
  <MenuContainerMobileStyle>
    <MenuContainerMobileStyle.Inner>
      <iframe
        className="dutchie-iframe"
        frameBorder="0"
        title="menu"
        src="https://www.dutchie.com/embedded-menu/sierra-well-reno/menu?"
      />
    </MenuContainerMobileStyle.Inner>
  </MenuContainerMobileStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component
