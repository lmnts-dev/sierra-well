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
import { MenuContainerMobileHeight } from './../components/library/OrderMenu/styles.scss';
import {
  SubLevelPageContent,
  SubLevelPage,
} from 'components/core/SubLevelPage';
import MenuHero from './../components/library/Hero/MenuHero';
import { OrderMenuDesktop } from './../components/library/OrderMenu/';

// Data
import { MenuData } from 'data/menu';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SublevelInnerLock = createGlobalStyle`
.sublevel-inner {
  min-height: calc(100vh - (${Root.Nav.Size})) !important;
  height: calc(100vh - (${Root.Nav.Size})) !important;
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
    <OrderMenuDesktop />
  </SubLevelPage>
);

// Small Device Options

//// Mobile Menu
const MobileMenuTransform = createGlobalStyle`
  .nav-mobile {
    transform: translateY(calc(0px - ${MenuContainerMobileHeight}));

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
