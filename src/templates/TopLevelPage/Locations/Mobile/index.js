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
import LocationsHero from 'components/library/Hero/LocationsHero';
import WidgetSection from 'components/library/Section/WidgetSection';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SlideSection from 'components/library/Section/SlideSection';

// Styles
import LocationsTemplateStyle from './styles.scss';

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

//// Small Device Content
const LocationsPageMobile = ({ LocationData }) => (
  <SubLevelPage
    BgColor={Theme.Color.White}
    PrimaryColor={Theme.Color.Nightsky}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
  >
    <LocationsTemplateStyle>
      <LocationsHero LocationData={LocationData} />
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
          autoplay: false,
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
          autoplay: false,
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
          autoplay: false,
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
          autoplay: false,
          arrows: false,
        }}
      />
      {/* ///////////// */}
    </LocationsTemplateStyle>
  </SubLevelPage>
);

export default LocationsPageMobile;

//////////////////////////////////////////////////////////////////////
// End Component
