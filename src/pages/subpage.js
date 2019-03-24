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

const PageColor = Theme.Color.Dank;

const Index = ({ data }) => (
  <Layout
    BgColor={PageColor}
    PrimaryColor={Theme.Color.Dank}
    SecondaryColor={Theme.Color.Tahoe}
    TertiaryColor={Theme.Color.White}
  >
    <SubLevelPage>
      <div className="content-stretch">
        <h1>Hello</h1>
      </div>
    </SubLevelPage>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
