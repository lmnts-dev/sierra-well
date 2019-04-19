// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import {
  SubLevelPageContent,
  SubLevelPage,
} from 'components/core/SubLevelPage';
import SimpleHero from 'components/library/Hero/SimpleHero';
import SimpleSection from 'components/library/Section/SimpleSection';

// Elements
import Block from './../components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.White,
    Primary: Theme.Color.Dank,
    Secondary: Theme.Color.Black,
    Tertiary: Theme.Color.White,
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
      <SimpleHero BgColor={Theme.Color.Dank} TextColor={Theme.Color.Nightsky} />
      <SubLevelPageContent
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
      >
        <SimpleSection
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
        >
          <Block>
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>
        </SimpleSection>
      </SubLevelPageContent>
    </SubLevelPage>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
