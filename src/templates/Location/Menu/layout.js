// menu.js:
// The desktop menu.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';
import { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Mobile Components
import VerticalContent from 'components/core/VerticalContent';

// Desktop Components
import { MenuContainerMobileHeight } from 'components/library/OrderMenu/styles.scss';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import MenuHero from 'components/library/Hero/MenuHero';
import {
  OrderMenuDesktop,
  OrderMenuMobile,
} from 'components/library/OrderMenu';
import WidgetSection from 'components/library/Section/WidgetSection';

// Styles
import MenuTemplateStyle from './styles.scss';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SublevelInnerLock = createGlobalStyle`
.sublevel-inner {
  min-height: calc(100vh) !important;
  height: calc(100vh) !important;

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    height: auto !important;
  }
}
`;

// Large Device Content
const LargeContent = ({
  LocationData,
  OrderContext,
  NearbySlug,
  NearbyName,
}) => (
  <SubLevelPage
    BgColor={Theme.Color.Nightsky}
    PrimaryColor={Theme.Color.White}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
  >
    <SublevelInnerLock />
    {/* {console.log("NearbyName:")}
    {console.log(NearbyName)} */}
    <MenuHero
      NearbySlug={NearbySlug}
      NearbyName={NearbyName}
      OrderContext={OrderContext}
      LocationData={LocationData}
    />
    <OrderMenuDesktop LocationData={LocationData} />
  </SubLevelPage>
);

// Small Device Options

//// Mobile Menu
const MobileMenuTransform = createGlobalStyle`
  .nav-mobile {
    border-radius: var(--Radius) var(--Radius) 0 0;
    transform: translateY(calc(0px - ${MenuContainerMobileHeight}));

    li {
      a {
        padding: 10px !important;
      }
    }
  }
`;

//// Small Device Content
const SmallContent = ({
  LocationData,
  OrderContext,
  NearbySlug,
  NearbyName,
}) => (
  <SubLevelPage
    BgColor={Theme.Color.Nightsky}
    PrimaryColor={Theme.Color.White}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
  >
    <MenuTemplateStyle>
      <MenuHero
        NearbySlug={NearbySlug}
        NearbyName={NearbyName}
        OrderContext={OrderContext}
        LocationData={LocationData}
      />
      {/* ///////////// */}

      <WidgetSection
        BgColor={Theme.Color.Nightsky}
        Gutter={[1, 0, 10, 0]}
        Widgets={[
          {
            // Begin WidgetContent
            Flex: 1,
            WidgetContent: [
              {
                Destination: '/menu',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: hexToRGB(Theme.Color.White, 0.05),
                    BgImage: '',
                    Subhead: '',
                    Headline: 'Delivery',
                    TextColor: Theme.Color.White,
                    IconColor: Theme.Color.White,
                    IconName: 'car', // FontAwesome Icon Name
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
                Destination: '/locations',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: hexToRGB(Theme.Color.White, 0.05),
                    BgImage: '',
                    Subhead: '775-800-WELL',
                    Headline: 'Call Anytime',
                    TextColor: Theme.Color.White,
                    IconColor: Theme.Color.White,
                    IconName: 'phone', // FontAwesome Icon Name
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
                Destination: '/learn',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: hexToRGB(Theme.Color.White, 0.05),
                    BgImage: '',
                    Subhead: '',
                    Headline: 'Visit Us',
                    TextColor: Theme.Color.White,
                    IconColor: Theme.Color.White,
                    IconName: 'map-marker-alt', // FontAwesome Icon Name
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
                    BgColor: hexToRGB(Theme.Color.White, 0.05),
                    BgImage: '',
                    Subhead: '',
                    Headline: 'Open Chat',
                    TextColor: Theme.Color.White,
                    IconColor: Theme.Color.White,
                    IconName: 'comment-alt', // FontAwesome Icon Name
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
    </MenuTemplateStyle>
    {/* {console.log("NearbyName:")}
    {console.log(NearbyName)} */}

    {/* <OrderMenuMobile LocationData={LocationData} /> */}
  </SubLevelPage>
);

// Render Page
const MenuTemplate = ({
  LocationData,
  OrderContext,
  NearbySlug,
  NearbyName,
}) => (
  <Layout
    BgColor={Theme.Color.Nightsky}
    PrimaryColor={Theme.Color.White}
    SecondaryColor={Theme.Color.White}
    TertiaryColor={Theme.Color.Nightsky}
    MenuLocationData={LocationData}
  >
    <Device Query="Desktop">
      <LargeContent
        NearbySlug={NearbySlug}
        NearbyName={NearbyName}
        LocationData={LocationData}
        OrderContext={OrderContext}
      />
    </Device>

    <Device Query="Mobile">
      <SmallContent
        NearbySlug={NearbySlug}
        NearbyName={NearbyName}
        LocationData={LocationData}
        OrderContext={OrderContext}
      />
    </Device>
  </Layout>
);

export default MenuTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
