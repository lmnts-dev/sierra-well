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
import { MobileLocationsHeroStyle } from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Helpers
import { HeroContent, HeroInner } from './../../../Hero';
import slugify from 'helpers/Slugify';

// Components
import Block from 'components/library/Block';
import SuggestionList from 'components/library/SuggestionList';
import Btn from 'components/library/Btn/';
import SlideSection from 'components/library/Section/SlideSection';
import LocationList from 'components/library/Hero/LocationsHero/LocationList';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import hexToRGB from 'helpers/hexToRGB';
import TimeString from 'helpers/timeString';

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
              Subhead: 'Over 63 locations nationwide.',
              Headline: 'View our selection →',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.Primary,
              IconName: 'plus',
              TintColor: Theme.Color.Black,
              TintOpacity: '0.6',
              IconSize: '',
              CallToAction: '',
              BgImageFile: 'placeholder_bg_6.png',
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
              BgColor: Theme.Color.White,
              Subhead: 'Hello Miami.',
              Headline: 'Now serving Miami & the South Beach area.',
              TextColor: Theme.Color.Nightsky,
              IconColor: Theme.Color.Nightsky,
              IconName: 'umbrella-beach',
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
              BgColor: Theme.Color.Sky,
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
class LocationsHeroMobile extends React.Component {
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
        <MobileLocationsHeroStyle>
          <MobileLocationsHeroStyle.Inner className="hero-inner">
            <HeroContent Flex="row">
              <MobileLocationsHeroStyle.LocationSwitch>
                <div className="location-switch-inner">
                  <span className="label">{TimeString()}</span>
                  <LocationList />
                </div>
              </MobileLocationsHeroStyle.LocationSwitch>
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
          </MobileLocationsHeroStyle.Inner>
        </MobileLocationsHeroStyle>
      </Device>
    );
  }
}

export default LocationsHeroMobile;

//////////////////////////////////////////////////////////////////////
// End Component
