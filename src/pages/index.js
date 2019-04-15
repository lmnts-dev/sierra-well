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
import {
  HorizontalContent,
  SlideGroup,
  Slide,
  SlideColumn,
  SlideDivider,
} from 'components/core/HorizontalContent';
import WidgetContainer from 'components/library/Widgets/Container/';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Data
import { WidgetContent } from 'data';

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
const LargeContent = () => (
  <HorizontalContent>
    <SlideGroup class="home-slider">
      <Slide>
        <SlideColumn>
          <WidgetContainer WidgetContent={WidgetContent} />
          <WidgetContainer WidgetContent={WidgetContent} />
          <WidgetContainer WidgetContent={WidgetContent} />
        </SlideColumn>

        <SlideDivider />

        <SlideColumn>
          <WidgetContainer WidgetContent={WidgetContent} />
        </SlideColumn>
      </Slide>
    </SlideGroup>
  </HorizontalContent>
);

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
