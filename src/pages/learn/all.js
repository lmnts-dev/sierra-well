// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SimpleHero from 'components/library/Hero/SimpleHero';
import WidgetSection from 'components/library/Section/WidgetSection';
import SimpleSection from 'components/library/Section/SimpleSection';

//// Misc. Components
import Breadcrumb from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Elements
import Block from './../../components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.Gunmetal,
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
      {/* ///////////// */}

      <SimpleHero TextColor={Theme.Color.White}>
        <Block maxWidth={0.5}>
          <Breadcrumb
            to="/learn"
            Label="Learn"
            TextColor={Theme.Color.White}
          />
          <h1 class="h2">You’ve got questions, we have answers.</h1>
        </Block>
      </SimpleHero>
      {/* Begin page content. */}
      {/* ///////////// */}
      <SubLevelPageContent
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
      >
        {/* ///////////// */}

        <WidgetSection
          BgColor={Theme.Color.Snow}
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

        {/* ///////////// */}

        <WidgetSection
          BgColor={Theme.Color.Snow}
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

        {/* ///////////// */}

        <WidgetSection
          BgColor={Theme.Color.Snow}
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

        {/* ///////////// */}

        <WidgetSection
          BgColor={Theme.Color.Snow}
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

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
          Style="centered"
        >
          <Block Style="centered" Padding={[1, 0, 1, 0]} maxWidth={0.5}>
            <h2>Not seeing your question?</h2>
            <p className="p-md">
              Chat with an expert now or sumbit your own question
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

//////////////////////////////////////////////////////////////////////
// End Component
