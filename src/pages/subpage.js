// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/core/Layout';
import {
  SubLevelPageContent,
  SubLevelPage,
} from 'components/core/SubLevelPage';
import SimpleHero from 'components/library/Hero/SimpleHero';
import SimpleSection from 'components/library/Section/SimpleSection';

import ImgQuery from 'components/core/ImgQuery';

// Elements
import Block from './../components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.Mint,
    Primary: Theme.Color.Dank,
    Secondary: Theme.Color.Nightsky,
    Tertiary: Theme.Color.White,
  },
};

const Index = props => (
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
      {/* ///////////// */}

      <SimpleHero
        imgRight="0"
        imgBottom="0"
        imgWidth="50%"
        Size="0"
        Background="none"
        TextColor={Theme.Color.Nightsky}
      >
        <Block>
          <h1>100% Free Delivery</h1>
          <p className="p-md">Any size order, no minimum required.</p>
        </Block>
        <Block className="hero-img">
          <ImgQuery
            query={props.data.imageOne.childImageSharp.fluid}
            alt="100% Free Delivery"
          />
        </Block>
      </SimpleHero>
      {/* Begin page content. */}
      {/* ///////////// */}
      <SubLevelPageContent
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
      >
        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
          Style="centered"
        >
          <Block Style="centered" Top={1} Bottom={1} Width={0.5}>
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>
        </SimpleSection>

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.Black}
          TextColor={Theme.Color.White}
          Style="centered"
        >
          <Block Style="centered" Top={3} Bottom={3} Width={0.5}>
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>
        </SimpleSection>

        {/* ///////////// */}
      </SubLevelPageContent>
      {/* End page content. */}
      {/* ///////////// */}
    </SubLevelPage>
  </Layout>
);

export default Index;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "hero-phone.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
