// templates/Learn.js:
// This is the template for Learn pages.

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
import SlideSection from 'components/library/Section/SlideSection';

//// Misc. Components
import Breadcrumb from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Elements
import Block from 'components/library/Block';

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

const Widgets = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Out of State',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Growing',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Purchase',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Nevada',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Out of State',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Growing',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Purchase',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
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
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Nevada',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
            TintColor: '',
            TintOpacity: '',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
];

const LearnTemplate = ({ data }) => (
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
          <Breadcrumb to="/learn" Label="Learn" TextColor={Theme.Color.White} />
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

        <SlideSection
          Widgets={Widgets}
          SectionSize={3}
          Header="Headline"
          Theme={{
            TextColor: Theme.Color.Black,
            BgColor: 'none',
          }}
          SliderSettings={{
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: false,
            arrows: true,
          }}
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
                  Destination: '/learn/recreational/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Mint,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Out of State',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'leaf', // FontAwesome Icon Name
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
                  Destination: '/learn/recreational/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Mint,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Growing',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'leaf', // FontAwesome Icon Name
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
                  Destination: '/learn/recreational/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Mint,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Purchase',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'leaf', // FontAwesome Icon Name
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
                  Destination: '/learn/recreational/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Mint,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Nevada',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'leaf', // FontAwesome Icon Name
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
                  Destination: '/learn/safety/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Dank,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Dosage',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'exclamation', // FontAwesome Icon Name
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
                  Destination: '/learn/safety/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Dank,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Child Proofing',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'lock', // FontAwesome Icon Name
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
                  Destination: '/learn/safety/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Dank,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Legal Consumption',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'home', // FontAwesome Icon Name
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
                  Destination: '/learn/safety/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Dank,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Nevada',
                      TextColor: Theme.Color.Black,
                      IconColor: Theme.Color.Black,
                      IconName: 'home', // FontAwesome Icon Name
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
                  Destination: '/learn/industry/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Sunset,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Job Opportunities',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.White,
                      IconName: 'clipboard', // FontAwesome Icon Name
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
                  Destination: '/learn/industry/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Sunset,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Accomodation',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.White,
                      IconName: 'heart', // FontAwesome Icon Name
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
                  Destination: '/learn/industry/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Sunset,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Producers',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.White,
                      IconName: 'heart', // FontAwesome Icon Name
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
                  Destination: '/learn/industry/',
                  Style: 'Generic',
                  Meta: {
                    Generic: {
                      BgColor: Theme.Color.Sunset,
                      BgImage: '',
                      Subhead: '',
                      Headline: 'Nevada',
                      TextColor: Theme.Color.White,
                      IconColor: Theme.Color.White,
                      IconName: 'heart', // FontAwesome Icon Name
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

export default LearnTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
