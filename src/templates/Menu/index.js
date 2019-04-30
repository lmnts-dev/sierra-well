// menu.js:
// The desktop menu.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';
import { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Mobile Components
import VerticalContent from 'components/core/VerticalContent';

// Desktop Components
import { MenuContainerMobileHeight } from 'components/library/OrderMenu/styles.scss';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import MenuHero from 'components/library/Hero/MenuHero';
import { OrderMenuDesktop } from 'components/library/OrderMenu';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SublevelInnerLock = createGlobalStyle`
.sublevel-inner {
  min-height: calc(100vh) !important;
  height: calc(100vh) !important;
}
`;

// Large Device Content
const LargeContent = ({ State, City }) => (
  <SubLevelPage
    BgColor={City.PageTheme.Color.Background}
    PrimaryColor={City.PageTheme.Color.Primary}
    SecondaryColor={City.PageTheme.Color.Secondary}
    TertiaryColor={City.PageTheme.Color.Tertiary}
  >
    <SublevelInnerLock />
    <MenuHero State={State} City={City} />
    <OrderMenuDesktop City={City} />
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
const MenuTemplate = ({ State, City }) => (
  <Layout
    BgColor={City.PageTheme.Color.Background}
    PrimaryColor={City.PageTheme.Color.Primary}
    SecondaryColor={City.PageTheme.Color.Secondary}
    TertiaryColor={City.PageTheme.Color.Tertiary}
  >
    <Device Query="Desktop">
      <LargeContent State={State} City={City} />
    </Device>

    <Device Query="Mobile">
      <SmallContent />
    </Device>
  </Layout>
);

export default MenuTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
