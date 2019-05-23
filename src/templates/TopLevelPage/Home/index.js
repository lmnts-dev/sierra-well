// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';

// Desktop Components
import { HorizontalContent } from 'components/core/HorizontalContent';
import SlideGroup from 'components/core/HorizontalContent/SlideGroup';

// Data
import { IndexData } from 'data/index';

// Templates
import HomePageMobile from './Mobile';
// import HomePageDesktop from './Desktop';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const HomePageDesktop = () => (
  <HorizontalContent>
    <SlideGroup
      className={IndexData.SlideGroup.Name}
      SlidesData={IndexData.SlideGroup.Slides}
    />
  </HorizontalContent>
);

// Render Page
const HomeTemplate = ({ LocationData }) => (
  <Layout
    BgColor={IndexData.PageTheme.Color.Background}
    PrimaryColor={IndexData.PageTheme.Color.Primary}
    SecondaryColor={IndexData.PageTheme.Color.Secondary}
    TertiaryColor={IndexData.PageTheme.Color.Tertiary}
  >
    <Device Query="Desktop">
      <HomePageDesktop />
    </Device>

    <Device Query="Mobile">
      <HomePageMobile LocationData={LocationData} />
    </Device>
  </Layout>
);

export default HomeTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
