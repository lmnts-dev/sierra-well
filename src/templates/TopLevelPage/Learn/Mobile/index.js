// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import VerticalContent from 'components/core/VerticalContent';
import QuestionsHero from 'components/library/Hero/QuestionsHero';
import WidgetSection from 'components/library/Section/WidgetSection';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SlideSection from 'components/library/Section/SlideSection';
import QuestionListings from 'components/library/QuestionListings';

// Styles
import LocationsTemplateStyle from './styles.scss';

// Data
import { IndexData } from 'data/index';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Component
//////////////////////////////////////////////////////////////////////

const WidgetsOne = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/all/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Nightsky,
            BgImage: '',
            Subhead: '',
            Headline: 'All Questions',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
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
            Headline: 'Recreational',
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
        Destination: '/learn/medical/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImage: '',
            Subhead: '',
            Headline: 'Medical',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
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

const WidgetsTwo = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/all/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Black,
            BgImageFile: 'placeholder_bg_2.jpg',
            Subhead: '',
            Headline: 'Ask us anything.',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'question', // FontAwesome Icon Name
            TintColor: Theme.Color.Black,
            TintOpacity: '0.6',
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
            BgColor: Theme.Color.Primary,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Recreational',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
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
        Destination: '/learn/medical/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImage: '',
            Subhead: '',
            Headline: 'Medical',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
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

const WidgetCategories = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/medical/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImage: '',
            Subhead: '',
            Headline: 'Medical',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
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
            BgImageFile: '',
            Subhead: '',
            Headline: 'Recreational',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'cannabis', // FontAwesome Icon Name
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
            BgImageFile: '',
            Subhead: '',
            Headline: 'Safety',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
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
        Destination: '/learn/industry/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Primary,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Industry',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'user', // FontAwesome Icon Name
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
        Destination: '/learn/all/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Black,
            BgImageFile: 'placeholder_bg_2.jpg',
            Subhead: '',
            Headline: 'Ask us anything.',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'question', // FontAwesome Icon Name
            TintColor: Theme.Color.Black,
            TintOpacity: '0.6',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
];

const WidgetsMedical = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/medical/medical-cards',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Medical Cards',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'briefcase-medical', // FontAwesome Icon Name
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
        Destination: '/learn/medical/purchasing',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Purchasing',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'money-bill-wave', // FontAwesome Icon Name
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
        Destination: '/learn/medical/growing',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Growing',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'seedling', // FontAwesome Icon Name
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
        Destination: '/learn/medical',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Nightsky,
            BgImageFile: '',
            Subhead: '',
            Headline: 'View all',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'question', // FontAwesome Icon Name
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

const WidgetsRecreational = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/recreational',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Medical Cards',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'briefcase-medical', // FontAwesome Icon Name
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
        Destination: '/learn/recreational',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Purchasing',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'money-bill-wave', // FontAwesome Icon Name
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
        Destination: '/learn/recreational',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Growing',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'seedling', // FontAwesome Icon Name
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
        Destination: '/learn/recreational',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Nightsky,
            BgImageFile: '',
            Subhead: '',
            Headline: 'View all',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'question', // FontAwesome Icon Name
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

const WidgetsIndustry = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/industry',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Primary,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Medical Cards',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'briefcase-medical', // FontAwesome Icon Name
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
        Destination: '/learn/industry',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Primary,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Purchasing',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'money-bill-wave', // FontAwesome Icon Name
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
        Destination: '/learn/industry',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Primary,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Growing',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'seedling', // FontAwesome Icon Name
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
        Destination: '/learn/industry',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Nightsky,
            BgImageFile: '',
            Subhead: '',
            Headline: 'View all',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'question', // FontAwesome Icon Name
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

const WidgetsSafety = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/safety',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Dank,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Medical Cards',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'briefcase-medical', // FontAwesome Icon Name
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
        Destination: '/learn/safety',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Dank,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Purchasing',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'money-bill-wave', // FontAwesome Icon Name
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
        Destination: '/learn/safety',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Dank,
            BgImageFile: '',
            Subhead: '',
            Headline: 'Growing',
            TextColor: Theme.Color.Nightsky,
            IconColor: Theme.Color.Nightsky,
            IconName: 'seedling', // FontAwesome Icon Name
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
        Destination: '/learn/safety',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Nightsky,
            BgImageFile: '',
            Subhead: '',
            Headline: 'View all',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'question', // FontAwesome Icon Name
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

//// Small Device Content
const LocationsPageMobile = ({ LocationData }) => (
  <SubLevelPage
    BgColor={Theme.Color.White}
    PrimaryColor={Theme.Color.Nightsky}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
  >
    <LocationsTemplateStyle>
      <QuestionsHero LocationData={LocationData} />
      {/* ///////////// */}
      <SlideSection
        Widgets={WidgetCategories}
        SectionSize={2}
        Header="All Categories"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={WidgetsMedical}
        SectionSize={4}
        Header="Medical"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={WidgetsRecreational}
        SectionSize={4}
        Header="Recreational"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={WidgetsSafety}
        SectionSize={4}
        Header="Safety"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={WidgetsIndustry}
        SectionSize={4}
        Gutter={[1, 1, 4, 1]}
        Header="Industry"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
        }}
      />

      <QuestionListings
        Header="Latest Questions"
        TextColor={Theme.Color.Black}
        Gutter={[0, 1, 5, 1]}
      />
      {/* ///////////// */}
    </LocationsTemplateStyle>
  </SubLevelPage>
);

export default LocationsPageMobile;

//////////////////////////////////////////////////////////////////////
// End Component
