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
const LargeContent = ({
  LocationData,
  OrderContext,
  NearbySlug,
  NearbyName,
}) => (
  <SubLevelPage
    BgColor={Theme.Color.Nightsky}
    PrimaryColor={Theme.Color.White}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
  >
    <SublevelInnerLock />
    <MenuHero
      NearbySlug={NearbySlug}
      NearbyName={NearbyName}
      OrderContext={OrderContext}
      LocationData={LocationData}
    />
    <OrderMenuDesktop LocationData={LocationData} />
  </SubLevelPage>
);

// Small Device Options

//// Mobile Menu
const MobileMenuTransform = createGlobalStyle`
  .nav-mobile {
    border-radius: var(--Radius) var(--Radius) 0 0;
    transform: translateY(calc(0px - ${MenuContainerMobileHeight}));

    li {
      a {
        padding: 10px !important;
      }
    }
  }
`;

//// Small Device Content
const SmallContent = ({ LocationData }) => (
  <div>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
    <h1>Mobile Menu!</h1>
  </div>
);

// Render Page
const MenuTemplate = ({
  LocationData,
  OrderContext,
  NearbySlug,
  NearbyName,
}) => (
  <Layout
    BgColor={Theme.Color.Nightsky}
    PrimaryColor={Theme.Color.White}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
    MenuLocationData={LocationData}
  >
    <Device Query="Desktop">
      <LargeContent
        NearbySlug={NearbySlug}
        NearbyName={NearbyName}
        LocationData={LocationData}
        OrderContext={OrderContext}
      />
    </Device>

    <Device Query="Mobile">
      <SmallContent
        NearbySlug={NearbySlug}
        NearbyName={NearbyName}
        LocationData={LocationData}
      />
    </Device>
  </Layout>
);

export default MenuTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
