// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import SubLevelPage from 'components/core/SubLevelPage';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.Flower,
    Primary: Theme.Color.Dank,
    Secondary: Theme.Color.White,
    Tertiary: Theme.Color.Black,
  },
};

const Index = ({ data }) => (
  <Layout
    BgColor={PageTheme.Color.Background}
    PrimaryColor={PageTheme.Color.Primary}
    SecondaryColor={PageTheme.Color.Secondary}
    TertiaryColor={PageTheme.Color.Tertiary}
  >
    <SubLevelPage
      BgColor={PageTheme.Color.Background}
      PrimaryColor={PageTheme.Color.Primary}
      SecondaryColor={PageTheme.Color.Secondary}
      TertiaryColor={PageTheme.Color.Tertiary}
    >
      <div className="content-stretch">
        <h1>
          Reno’s first Cannabis dispensary — located in the heart of downtown.
        </h1>
      </div>
    </SubLevelPage>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
