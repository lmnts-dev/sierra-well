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
import { LocationsData } from 'data/locations';

// Templates
import LocationsPageMobile from './Mobile';
import LocationsPageDesktop from './Desktop';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const LargeContent = () => (
  <HorizontalContent>
    <SlideGroup
      className={LocationsData.SlideGroup.Name}
      SlidesData={LocationsData.SlideGroup.Slides}
    />
  </HorizontalContent>
);

// Render Page
const LocationsTemplate = ({ LocationData }) => (
  <Layout
    BgColor={LocationsData.PageTheme.Color.Background}
    PrimaryColor={LocationsData.PageTheme.Color.Primary}
    SecondaryColor={LocationsData.PageTheme.Color.Secondary}
    TertiaryColor={LocationsData.PageTheme.Color.Tertiary}
  >
    <Device Query="Desktop">
      <LargeContent />
    </Device>

    <Device Query="Mobile">
      <LocationsPageMobile LocationData={LocationData} />
    </Device>
  </Layout>
);

export default LocationsTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
