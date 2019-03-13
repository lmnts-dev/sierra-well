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
// import Inner from 'elements/Inner';
// import Block from 'elements/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Index = ({ data }) => (
  <Layout>
    <Section
      FlexDir="column"
      Background={Theme.Color.Gray}
      PaddingTop={Theme.Base.Size}
      PaddingBottom={Theme.Base.Size}
      MinHeight="1000vh"
      JustifyContent="center"
      TextColor={Theme.Color.Black}
    >
      <h1>Work</h1>
      <p>{Theme.Site.Description}</p>
    </Section>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
