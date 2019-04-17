// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from './../components/core/DeviceQuery';

// Components
import Layout from 'components/core/Layout';
import VerticalContent from 'components/core/VerticalContent';
import { MenuContainerHeight } from 'components/sitewide/Navigation/Small/MenuContainer/styles.scss';
import SubLevelPage from 'components/core/SubLevelPage';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.Nightsky,
    Primary: Theme.Color.Nightskys,
    Secondary: Theme.Color.White,
    Tertiary: Theme.Color.Nightsky,
  },
};

// Large Device Content
const LargeContent = () => (
  <SubLevelPage
    BgColor={PageTheme.Color.Background}
    PrimaryColor={PageTheme.Color.Primary}
    SecondaryColor={PageTheme.Color.Secondary}
    TertiaryColor={PageTheme.Color.Tertiary}
  >
    <div className="content-stretch">
      <h1>
        Reno’s first Cannabis dispensary — located in the heart of downtown.
      </h1>
    </div>
  </SubLevelPage>
);

// Small Device Content
const SmallContent = () => (
  <>
    <MobileMenuTransform />
    <VerticalContent />
  </>
);

// Mobile Menu
import { createGlobalStyle } from 'styled-components';

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

// Render Page
const Menu = ({ data }) => (
  <Layout
    BgColor={PageTheme.Color.Background}
    PrimaryColor={PageTheme.Color.Primary}
    SecondaryColor={PageTheme.Color.Secondary}
    TertiaryColor={PageTheme.Color.Tertiary}
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
