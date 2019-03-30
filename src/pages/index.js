// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import HorizontalContent from 'components/core/HorizontalContent';
import DeviceContent from 'components/core/DeviceContent';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.Background,
    Primary: Theme.Color.Nightsky,
    Secondary: Theme.Color.Nightsky,
    Tertiary: Theme.Color.Background,
  },
};

// Large Device Content
const LargeContent = <HorizontalContent />;

// Small Device Content
const SmallContent = <div>Mobile</div>;

// Render Page
const Index = ({ data }) => (
  <Layout
    BgColor={PageTheme.Color.Background}
    PrimaryColor={PageTheme.Color.Primary}
    SecondaryColor={PageTheme.Color.Secondary}
    TertiaryColor={PageTheme.Color.Tertiary}
  >
    <DeviceContent Large={LargeContent} Small={SmallContent} />
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
