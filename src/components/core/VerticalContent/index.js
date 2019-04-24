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
import VerticalContentStyle from 'components/core/VerticalContent/styles.scss';

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
];

// Lock Wrapper Scrolls
const WrapperRelease = createGlobalStyle`
  .wrapper {
    @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
      overflow: hidden;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      overflow-y: scroll !important; /* has to be scroll, not auto */
      -webkit-overflow-scrolling: touch;
    }
  }
`;

// The Content Itself
const VerticalContent = ({ children }) => (
  <>
    <WrapperRelease />
    <VerticalContentStyle>
      <VerticalContentStyle.Inner>
        <SlideSection
          Widgets={Widgets}
          SectionSize={7}
          Header="Headline"
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
          Header="Headline"
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
          Header="Headline"
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
          Header="Headline"
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
  </>
);

export default VerticalContent;
