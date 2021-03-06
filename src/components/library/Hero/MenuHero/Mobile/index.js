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
import { MobileMenuHeroStyle } from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Helpers
import { HeroContent, HeroInner } from './../../../Hero';

// Components
import MenuHeroPromotions from '../MenuHeroPromotions';
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

const MenuWidgets = ({ HeadlineString, LocationData }) => {
  let WidgetMap = [
    {
      // Begin WidgetContent
      Flex: 1,
      WidgetContent: [
        {
          Destination: '',
          Style: 'MenuWidget',
          Meta: {
            MenuWidget: {
              LocationData: '',
              BgColor: hexToRGB(Theme.Color.White, 0.05),
              Subhead: '',
              Headline: HeadlineString ? HeadlineString : 'Headline not found',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.Primary,
              IconName: 'plus',
              TintColor: '',
              TintOpacity: '',
              IconSize: '',
              CallToAction: '',
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
              BgColor: Theme.Color.Mint,
              Subhead: 'No minimums. Ever.',
              Headline:
                // eslint-disable-next-line
                "100% Free Delivery. Because we don't like putting pants on either.",
              TextColor: Theme.Color.Nightsky,
              IconColor: Theme.Color.Nightsky,
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
class MenuHeroMobile extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      maxHeight: '100vh',
      paddingTop: 'calc(' + Root.Size + '* 1.5)',
      paddingBottom: 'calc(' + Root.Size + '/ 6)',
      opacity: '1',
      collapsed: false,
    };

    // Bind base functions to change transition state for
    // collapsing menu hero.
    this.collapseHero = this.collapseHero.bind(this);
    // this.menuScrollCollapse = this.menuScrollCollapse.bind(this);
  }

  // Base functions to change transition state for
  // collapsing menu hero.
  collapseHero() {
    // If currently expanded...
    if (this.state.collapsed == false) {
      this.setState({
        maxHeight: '0vh',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0',
        collapsed: true,
      });
    }

    // If currently collapsed...
    else {
      this.setState({
        maxHeight: '100vh',
        paddingTop: 'calc(' + Root.Size + '* 1.5)',
        paddingBottom: 'calc(' + Root.Size + '/ 6)',
        opacity: '1',
        collapsed: false,
      });
    }
  }

  // Render element.
  render() {
    const LocationData = this.props.LocationData;
    const NearbySlug = this.props.NearbySlug;
    const NearbyName = this.props.NearbyName;
    const OrderContext = this.props.OrderContext;
    const OrderContextSlug = this.props.OrderContext
      ? OrderContext.toLowerCase() + '/'
      : '';

    // Build correct  string for menus:

    let OrderContextString = OrderContext ? ' ' + OrderContext : '';
    let NearbyContextString = NearbyName
      ? ''
      : 'in ' + LocationData.geography.state;
    let StateContextString = NearbyName
      ? ' near ' + NearbyName + ', ' + LocationData.geography.state + '.'
      : '.';
    let MenuHeadline =
      'Order cannabis' +
      OrderContextString +
      ' from our ' +
      LocationData.name +
      ' Dispensary ' +
      NearbyContextString +
      StateContextString;

    // <Link
    //   to={
    //     '/locations/' +
    //     slugify(LocationData.geography.state.toLowerCase()) +
    //     '/' +
    //     LocationData.slug
    //   }
    // >
    //   {LocationData.name}
    //   {NearbyName ? null : ', ' + LocationData.geography.state} Dispensary
    // </Link>

    // Render Menu
    return (
      <Device Query="Mobile">
        <MobileMenuHeroStyle>
          <MobileMenuHeroStyle.Inner
            paddingTop={0}
            paddingBottom={this.state.paddingBottom}
            maxHeight={this.state.maxHeight}
            opacity={this.state.opacity}
            className="hero-inner"
          >
            <HeroContent Flex="row">
              <MobileMenuHeroStyle.LocationSwitch>
                <div className="location-switch-inner">
                  <span className="label">{TimeString()}</span>

                  <LocationList
                    OrderContextSlug={OrderContextSlug}
                    LocationData={LocationData}
                  />
                </div>
              </MobileMenuHeroStyle.LocationSwitch>
            </HeroContent>
            <HeroContent Flex="row">
              <SlideSection
                Widgets={MenuWidgets({
                  HeadlineString: MenuHeadline,
                  LocationData: LocationData,
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
                  autoplay: false,
                  arrows: false,
                  useTransform: false,
                }}
              />
            </HeroContent>
            <HeroContent Flex="row">
              <SuggestionList
                BaseUrl={
                  '/menu' +
                  '/' +
                  OrderContextSlug +
                  slugify(LocationData.geography.state.toLowerCase()) +
                  '/' +
                  LocationData.slug +
                  '/'
                }
                List={LocationData.nearby}
                Label="Nearby"
                TextColor={Theme.Color.White}
                GradientColor={Theme.Color.Nightsky}
                Padding={[1, 0, 0, 0]}
              />
            </HeroContent>
          </MobileMenuHeroStyle.Inner>
        </MobileMenuHeroStyle>
      </Device>
    );
  }
}

export default MenuHeroMobile;

//////////////////////////////////////////////////////////////////////
// End Component

// <Block AlignItems="flex-start">
//   <h1 className="h2">
//     Order cannabis {OrderContext ? OrderContext + ' ' : null}from our{' '}
//     <Link
//       to={
//         '/locations/' +
//         slugify(LocationData.geography.state.toLowerCase()) +
//         '/' +
//         LocationData.slug
//       }
//     >
//       {LocationData.name}
//       {NearbyName ? null : ', ' + LocationData.geography.state} Dispensary
//     </Link>
//     {NearbyName
//       ? ' near ' + NearbyName + ', ' + LocationData.geography.state + '.'
//       : '.'}
//   </h1>
//   <span
//     onClick={this.collapseHero.bind(this)}
//     // These are eslint errors for accessibility below.
//     onKeyPress={this.collapseHero.bind(this)}
//     role="button"
//     tabIndex="0"
//   >
//     <Btn
//       IconClass="expand"
//       Label="Expand Menu"
//       BgColor={Theme.Color.Primary}
//       TextColor={Theme.Color.White}
//       Destination={LocationData.meta.maps}
//       IconPosition="left"
//       Pseudo
//       IconFas
//     />
//   </span>

//   <Btn
//     className="btn-address"
//     IconClass="map-marker-alt"
//     Label={LocationData.contactDetails.location.address}
//     BgColor={Theme.Color.Black}
//     TextColor={Theme.Color.White}
//     Destination={LocationData.meta.maps}
//     IconPosition="left"
//     External
//     IconFas
//   />
// </Block>;
