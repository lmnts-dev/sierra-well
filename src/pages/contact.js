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

const PageColor = Theme.Color.Sunset;

const Index = ({ data }) => (
  <Layout BgColor={PageColor}>
    <Section
      FlexDir="column"
      Background="none"
      PaddingTop={Theme.Base.Size}
      PaddingBottom={Theme.Base.Size}
      MinHeight="100vh"
      JustifyContent="center"
      TextColor={Theme.Color.White}
    />
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
