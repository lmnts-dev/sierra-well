// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from './../components/core/DeviceQuery';
import Layout from 'components/core/Layout';

// Mobile Components
import VerticalContent from 'components/core/VerticalContent';

// Desktop Components
import { HorizontalContent } from 'components/core/HorizontalContent';
import SlideGroup from 'components/core/HorizontalContent/SlideGroup';

// Data
import { SpecialsData } from 'data/specials';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const LargeContent = () => (
  <HorizontalContent>
    <SlideGroup
      className={SpecialsData.SlideGroup.Name}
      SlidesData={SpecialsData.SlideGroup.Slides}
    />
    {/* {console.log(SpecialsData.SlideGroup.Slides)} */}
  </HorizontalContent>
);

// Small Device Content
const SmallContent = () => <VerticalContent />;

// Render Page
const Specials = ({ data }) => (
  <Layout
    BgColor={SpecialsData.PageTheme.Color.Background}
    PrimaryColor={SpecialsData.PageTheme.Color.Primary}
    SecondaryColor={SpecialsData.PageTheme.Color.Secondary}
    TertiaryColor={SpecialsData.PageTheme.Color.Tertiary}
  >
    <Device Query="Desktop">
      <LargeContent />
    </Device>

    <Device Query="Mobile">
      <SmallContent />
    </Device>
  </Layout>
);

export default Specials;
