// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import SubLevelPage from 'components/core/SubLevelPage';

// Blocks
import Section from 'elements/Section';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PageColor = Theme.Color.Gray;

const Index = ({ data }) => (
  <Layout PageColor={PageColor}>
    <SubLevelPage BgColor="black">
      <div className="content-stretch">
        <h1>Hello</h1>
      </div>
    </SubLevelPage>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
