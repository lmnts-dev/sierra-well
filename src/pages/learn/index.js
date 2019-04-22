// locations.js:
// This is the Locations page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';

// Mobile Components
import VerticalContent from 'components/core/VerticalContent';

// Desktop Components
import { HorizontalContent } from 'components/core/HorizontalContent';
import SlideGroup from 'components/core/HorizontalContent/SlideGroup';

// Data
import { LearnData } from 'data/learn';

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

// Small Device Content
const SmallContent = () => <VerticalContent />;

// Render Page
const Locationss = ({ data }) => (
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
      <SmallContent />
    </Device>
  </Layout>
);

export default Locationss;

//////////////////////////////////////////////////////////////////////
// End Component
