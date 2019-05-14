// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import posed, { PoseGroup } from 'react-pose';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import SlideSection from 'components/library/Section/SlideSection';

// Styles
import { createGlobalStyle } from 'styled-components';
import VerticalContentStyle from './styles.scss';

// Assets
import BgPlaceholder from '../../../assets/images/placeholder_bg.jpg';

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

// The Content Itself
const VerticalContent = ({ children }) => {
  if (children) {
    return (
      <VerticalContentStyle>
        <VerticalContentStyle.Inner>{children}</VerticalContentStyle.Inner>
      </VerticalContentStyle>
    );
  } else {
    return (
      <VerticalContentStyle>
        <VerticalContentStyle.Inner>
          <SlideSection
            Widgets={Widgets}
            SectionSize={7}
            Header="Learn"
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
            SectionSize={7}
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
            SectionSize={7}
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
            SectionSize={7}
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
        </VerticalContentStyle.Inner>
      </VerticalContentStyle>
    );
  }
};

export default VerticalContent;
