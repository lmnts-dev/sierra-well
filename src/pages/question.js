// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/core/Layout';

// Components
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';

// Hero Components
import SimpleHero from 'components/library/Hero/SimpleHero';
import HeroStrip from './../components/library/HeroStrip';

//// Section Components
import SimpleSection from 'components/library/Section/SimpleSection';
import WidgetSection from 'components/library/Section/WidgetSection';
import SplitSection from 'components/library/Section/SplitSection';

//// Misc. Components
import Breadcrumb from 'components/library/Breadcrumb';
import SocialStrip from 'components/library/SocialStrip';
import Btn from 'components/library/Btn/';
import ImgQuery from 'components/core/ImgQuery';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.PurpleHaze,
    Primary: Theme.Color.Dank,
    Secondary: Theme.Color.White,
    Tertiary: Theme.Color.Black,
  },
};

const QuestionTemplate = props => (
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
        Size="2"
        Background="url('https://source.unsplash.com/1600x900/?nature,water')"
        TextColor={Theme.Color.White}
        Tint="0.5"
      >
        <Block AlignItems="flex-start" Width={0.7}>
          <Breadcrumb
            to="/learn/medical/"
            Label="Medical Cannabis Questions"
            TextColor={Theme.Color.White}
          />
          <h1>What are qualifying conditions for a medical cannabis card?</h1>
          <SocialStrip
            Location={props.location.href}
            TextColor={Theme.Color.White}
          />
          {console.log(props.location)}
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
        >
          <Block Padding={[1, 0, 1, 0]} maxWidth={0.5}>
            <h3>
              In order to qualify for a medical marijuana card, you must suffer
              from one of the conditions listed and have a doctor’s
              recommendation that marijuana will help relieve that condition.
              The complete list of qualifying conditions can be found in the
              Nevada Revised Statutes, Chapter 453A, Section 050.
            </h3>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>
        </SimpleSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <WidgetSection
          BgColor={Theme.Color.White}
          Widgets={[
            {
              // Begin WidgetContent
              Flex: 1,
              WidgetContent: [
                {
                  Destination: '/menu',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Nightsky,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Menu',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.Primary,
                      IconName: 'plus', // FontAwesome Icon Name
                      TintColor: '',
                      TintOpacity: '',
                      IconSize: '',
                    },
                  },
                },
              ],
              // End WidgetContent
            },
            {
              // Begin WidgetContent
              Flex: 1,
              WidgetContent: [
                {
                  Destination: '/locations',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Tahoe,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Locations',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.White,
                      IconName: 'map-marker-alt', // FontAwesome Icon Name
                      TintColor: '',
                      TintOpacity: '',
                      IconSize: '',
                    },
                  },
                },
              ],
              // End WidgetContent
            },
            {
              // Begin WidgetContent
              Flex: 1,
              WidgetContent: [
                {
                  Destination: '/learn',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Mint,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Q&A',
                      TextColor: Theme.Color.Nightsky,
                      IconColor: Theme.Color.Nightsky,
                      IconName: 'book-open', // FontAwesome Icon Name
                      TintColor: '',
                      TintOpacity: '',
                      IconSize: '',
                    },
                  },
                },
              ],
              // End WidgetContent
            },
            {
              // Begin WidgetContent
              Flex: 1,
              WidgetContent: [
                {
                  Destination: '/specials',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Primary,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Specials',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.White,
                      IconName: 'star', // FontAwesome Icon Name
                      TintColor: '',
                      TintOpacity: '',
                      IconSize: '',
                    },
                  },
                },
              ],
              // End WidgetContent
            },
          ]}
        />

        {/* ///////////// */}
      </SubLevelPageContent>
      {/* End page content. */}
      {/* ///////////// */}
    </SubLevelPage>
  </Layout>
);

export default QuestionTemplate;

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

    imageTwo: file(relativePath: { eq: "placeholder_bg_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
