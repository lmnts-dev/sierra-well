// ScrollWrapper.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import posed, { PoseGroup } from 'react-pose';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import SlideSection from 'components/library/SlideSection';

// Styles
import { createGlobalStyle } from 'styled-components';
import VerticalContentStyle from 'components/core/VerticalContent/styles.scss';

// Assets
import BgPlaceholder from '../../../assets/images/placeholder_bg.jpg';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Widgets = [
  {
    BgColor: Theme.Color.White,
    BgImage: BgPlaceholder,
    Subhead: 'Subhead',
    Headline: 'Headline',
    TextColor: Theme.Color.White,
    IconColor: Theme.Color.White,
    IconName: 'rocket', // FontAwesome Icon Name
    Destination: '/subpage',
    TintColor: '#000000',
    TintOpacity: '.4',
    WidgetStyle: 'default',
  },
  {
    BgColor: Theme.Color.Dank,
    BgImage: 'none',
    Subhead: 'Subhead',
    Headline: 'Headline',
    TextColor: Theme.Color.Black,
    IconColor: Theme.Color.Black,
    IconName: 'rocket',
    Destination: '/subpage',
    TintColor: '',
    TintOpacity: '',
    WidgetStyle: 'default',
  },
  {
    BgColor: Theme.Color.Tahoe,
    BgImage: 'none',
    Subhead: 'Subhead',
    Headline: 'Headline',
    TextColor: Theme.Color.White,
    IconColor: Theme.Color.White,
    IconName: 'rocket',
    Destination: '/subpage',
    TintColor: '',
    TintOpacity: '',
    WidgetStyle: 'default',
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
        <SlideSection Widgets={Widgets} SectionSize="Large" />
        <SlideSection Widgets={Widgets} SectionSize="Medium" />
        <SlideSection Widgets={Widgets} SectionSize="Small" />
      </VerticalContentStyle.Inner>
    </VerticalContentStyle>
  </>
);

export default VerticalContent;
