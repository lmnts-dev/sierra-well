// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from './../components/core/DeviceQuery';

// Components
import Layout from 'components/core/Layout';
import HorizontalContent from 'components/core/HorizontalContent';
import VerticalContent from 'components/core/VerticalContent';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.Primary,
    Primary: Theme.Color.Nightsky,
    Secondary: Theme.Color.White,
    Tertiary: Theme.Color.White,
  },
};

// Large Device Content
const LargeContent = () => <HorizontalContent />;

// Small Device Content
const SmallContent = () => <VerticalContent />;

// Render Page
const Index = ({ data }) => (
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

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
