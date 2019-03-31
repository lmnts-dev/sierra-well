// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Media from 'react-media';

// Components
import Layout from 'components/core/Layout';
import HorizontalContent from 'components/core/HorizontalContent';
import VerticalContent from 'components/core/VerticalContent';
import { MenuContainerHeight } from 'components/sitewide/Navigation/Small/MenuContainer/styles.scss';

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
const LargeContent = () => <HorizontalContent />;

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
const Index = ({ data }) => (
  <Layout
    BgColor={PageTheme.Color.Background}
    PrimaryColor={PageTheme.Color.Primary}
    SecondaryColor={PageTheme.Color.Secondary}
    TertiaryColor={PageTheme.Color.Tertiary}
  >
    <Media
      query={{ minWidth: Base.Media.Width.Md }}
      render={() => <LargeContent />}
    />

    <Media
      query={{ maxWidth: Base.Media.Width.Md }}
      render={() => <SmallContent />}
    />
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
