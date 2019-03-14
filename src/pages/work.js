// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';

// Blocks
import Section from 'elements/Section';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PageColor = Theme.Color.Gray;

const Index = ({ data }) => (
  <Layout PageColor={PageColor}>
    <Section
      FlexDir="column"
      Background={PageColor}
      PaddingTop={Theme.Base.Size}
      PaddingBottom={Theme.Base.Size}
      MinHeight="100vh"
      JustifyContent="center"
      TextColor={Theme.Color.Black}
    />
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
