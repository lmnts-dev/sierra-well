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
import HomeHero from 'components/library/Hero/HomeHero';
import WidgetSection from 'components/library/Section/WidgetSection';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SlideSection from 'components/library/Section/SlideSection';

// Styles
import HomeTemplateStyle from './styles.scss';

// Data
import { IndexData } from 'data/index';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Component
//////////////////////////////////////////////////////////////////////
const Widgets = [
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

//// Small Device Content
const HomePageMobile = ({ LocationData }) => (
  <SubLevelPage
    BgColor={Theme.Color.White}
    PrimaryColor={Theme.Color.Nightsky}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
  >
    <HomeTemplateStyle>
      <HomeHero LocationData={LocationData} />
      {/* ///////////// */}
      <SlideSection
        Widgets={Widgets}
        SectionSize={4}
        Header="Latest"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={Widgets}
        SectionSize={4}
        Header="Medical"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={Widgets}
        SectionSize={4}
        Header="Recreational"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        }}
      />
      <SlideSection
        Widgets={Widgets}
        SectionSize={4}
        Gutter={[1, 1, 5, 1]}
        Header="Industry"
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        }}
      />
      {/* ///////////// */}
    </HomeTemplateStyle>
  </SubLevelPage>
);

export default HomePageMobile;

//////////////////////////////////////////////////////////////////////
// End Component
