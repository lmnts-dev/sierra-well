// menu.js:
// The desktop menu.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from './../components/core/DeviceQuery';
import Layout from 'components/core/Layout';
import { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Mobile Components
import VerticalContent from 'components/core/VerticalContent';

// Desktop Components
import { MenuContainerHeight } from 'components/sitewide/Navigation/Small/MenuContainer/styles.scss';
import SubLevelPage from 'components/core/SubLevelPage';
import MenuHero from './../components/library/Hero/MenuHero';

// Data
import { MenuData } from 'data/menu';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SublevelInnerLock = createGlobalStyle`
.sublevel-inner {
  min-height: calc(100vh - (${Root.Nav.Size} + ${Root.Footer.Size})) !important;
  height: calc(100vh - (${Root.Nav.Size} + ${Root.Footer.Size})) !important;
}
`;

// Large Device Content
const LargeContent = () => (
  <SubLevelPage
    BgColor={MenuData.PageTheme.Color.Background}
    PrimaryColor={MenuData.PageTheme.Color.Primary}
    SecondaryColor={MenuData.PageTheme.Color.Secondary}
    TertiaryColor={MenuData.PageTheme.Color.Tertiary}
  >
    <SublevelInnerLock />
    <MenuHero />
  </SubLevelPage>
);

// Small Device Options

//// Mobile Menu
const MobileMenuTransform = createGlobalStyle`
  .nav-mobile {
    transform: translateY(calc(0px - ${MenuContainerHeight}));

    li {
      a {
        padding: 10px !important;
      }
    }
  }
`;

//// Small Device Content
const SmallContent = () => (
  <>
    <MobileMenuTransform />
    <VerticalContent />
  </>
);

// Render Page
const Menu = ({ data }) => (
  <Layout
    BgColor={MenuData.PageTheme.Color.Background}
    PrimaryColor={MenuData.PageTheme.Color.Primary}
    SecondaryColor={MenuData.PageTheme.Color.Secondary}
    TertiaryColor={MenuData.PageTheme.Color.Tertiary}
  >
    <Device Query="Desktop">
      <LargeContent />
    </Device>

    <Device Query="Mobile">
      <SmallContent />
    </Device>
  </Layout>
);

export default Menu;

//////////////////////////////////////////////////////////////////////
// End Component
