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
import { LearnData } from 'data/learn';

// Templates
import LearnPageMobile from './Mobile';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const LargeContent = () => (
  <HorizontalContent>
    <SlideGroup
      className={LearnData.SlideGroup.Name}
      SlidesData={LearnData.SlideGroup.Slides}
    />
  </HorizontalContent>
);

// Render Page
const LocationsTemplate = ({ LocationData }) => (
  <Layout
    BgColor={LearnData.PageTheme.Color.Background}
    PrimaryColor={LearnData.PageTheme.Color.Primary}
    SecondaryColor={LearnData.PageTheme.Color.Secondary}
    TertiaryColor={LearnData.PageTheme.Color.Tertiary}
  >
    <Device Query="Desktop">
      <LargeContent />
    </Device>

    <Device Query="Mobile">
      <LearnPageMobile LocationData={LocationData} />
    </Device>
  </Layout>
);

export default LocationsTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
