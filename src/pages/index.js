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

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
import { IndexData } from 'data';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const LargeContent = () => (
  <HorizontalContent>
    <SlideGroup
      className={IndexData.SlideGroup.Name}
      SlidesData={IndexData.SlideGroup.Slides}
    />
  </HorizontalContent>
);

// Small Device Content
const SmallContent = () => <VerticalContent />;

// Render Page
const Index = ({ data }) => (
  <Layout
    BgColor={IndexData.PageTheme.Color.Background}
    PrimaryColor={IndexData.PageTheme.Color.Primary}
    SecondaryColor={IndexData.PageTheme.Color.Secondary}
    TertiaryColor={IndexData.PageTheme.Color.Tertiary}
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
