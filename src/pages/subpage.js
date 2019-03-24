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

const PageColor = 'Tomato';

const Index = ({ data }) => (
  <Layout
    BgColor={PageColor}
    PrimaryColor={Theme.Color.Dank}
    SecondaryColor={Theme.Color.Tahoe}
    TertiaryColor={Theme.Color.White}
  >
    <SubLevelPage
      BgColor={PageColor}
      PrimaryColor={Theme.Color.Dank}
      SecondaryColor={Theme.Color.Tahoe}
      TertiaryColor={Theme.Color.White}
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
