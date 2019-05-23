// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Styles
import { MobileHomeHeroStyle } from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Helpers
import { HeroContent, HeroInner } from './../../../Hero';

// Components
import Block from 'components/library/Block';
import SuggestionList from 'components/library/SuggestionList';
import Btn from 'components/library/Btn/';
import SlideSection from 'components/library/Section/SlideSection';
import LocationList from 'components/library/Hero/MenuHero/LocationList';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import hexToRGB from 'helpers/hexToRGB';
import TimeString from 'helpers/timeString';
import slugify from 'helpers/Slugify';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MenuWidgets = ({ LocationData }) => {
  let WidgetMap = [
    {
      // Begin WidgetContent
      Flex: 1,
      WidgetContent: [
        {
          Destination: '/menu',
          Style: 'Generic',
          Meta: {
            Generic: {
              LocationData: '',
              BgColor: Theme.Color.Nightsky,
              Subhead: 'A new kind of Cannabis Store.',
              Headline: 'View our menu →',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.Primary,
              IconName: 'plus',
              TintColor: Theme.Color.Black,
              TintOpacity: '0.6',
              IconSize: '',
              CallToAction: '',
              BgImageFile: 'placeholder_bg_5.png',
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
              BgColor: Theme.Color.Nightsky,
              Subhead: 'No minimums. Ever.',
              Headline:
                // eslint-disable-next-line
                "100% Free Delivery. Because we don't like putting pants on either.",
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: 'car',
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
              Subhead: 'Best in class.',
              Headline:
                'Order cannabis online from over 63 different locations nation-wide.',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: 'cannabis',
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

  return WidgetMap;
};

// MenuHero Component & Logic
class HomeHeroMobile extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  // Render element.
  render() {
    let LocationData = this.props.LocationData;

    // Render Menu
    return (
      <Device Query="Mobile">
        <MobileHomeHeroStyle>
          <MobileHomeHeroStyle.Inner className="hero-inner">
            <HeroContent Flex="row">
              <MobileHomeHeroStyle.LocationSwitch>
                <div className="location-switch-inner">
                  <span className="label">{TimeString()}</span>
                  <LocationList />
                </div>
              </MobileHomeHeroStyle.LocationSwitch>
            </HeroContent>
            <HeroContent Flex="row">
              <SlideSection
                Widgets={MenuWidgets({
                  HeadlineString: 'MenuHeadline',
                })}
                SectionSize={5}
                Theme={{
                  TextColor: Theme.Color.Black,
                  BgColor: 'none',
                }}
                SliderSettings={{
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  // autoplay: true,
                  autoplay: true,
                  arrows: false,
                  infinite: true,
                  useTransform: false,
                }}
              />
            </HeroContent>
            <HeroContent Flex="row">
              <SuggestionList
                BaseUrl={
                  '/menu' +
                  '/' +
                  slugify(LocationData.geography.state.toLowerCase()) +
                  '/' +
                  LocationData.slug +
                  '/'
                }
                List={LocationData.nearby}
                Label="Nearby"
                TextColor={Theme.Color.Nightsky}
                GradientColor={Theme.Color.White}
                Padding={[1, 0, 0, 0]}
              />
            </HeroContent>
          </MobileHomeHeroStyle.Inner>
        </MobileHomeHeroStyle>
      </Device>
    );
  }
}

export default HomeHeroMobile;

//////////////////////////////////////////////////////////////////////
// End Component
