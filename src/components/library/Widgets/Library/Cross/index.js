// CrossWidget.js:

// Visual:
// https://www.dropbox.com/s/474d6mc15w2q1vk/Screenshot%202019-04-16%2012.41.23.png?dl=0

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import CrossWidgetStyle from './styles.scss';
import WidgetContainerStyle from './../../Container/styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Components
import DefaultWidget from './../Default';

// Begin Component
//////////////////////////////////////////////////////////////////////

const CrossWidget = ({}) => (
  <CrossWidgetStyle>
    <CrossWidgetStyle.Inner>
      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Nightsky}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/menu"
          Subhead=""
          Headline="View Our Menu"
          IconColor={Theme.Color.Primary}
          IconName="plus"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Primary}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/company"
          Subhead="We've reinvented Cannabis Retail."
          Headline="Learn more."
          IconColor={Theme.Color.White}
          IconName="cannabis"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.White}
          BgImage=""
          TextColor={Theme.Color.Nightsky}
          TintColor=""
          TintOpacity=""
          Destination="/company"
          Subhead="Outreach"
          Headline="How we raised $5,000 for the Children’s Leukemia Foundation."
          IconColor={Theme.Color.Nightsky}
          IconName="heart"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Primary}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/menu/"
          Subhead="No minimums."
          Headline="100% Free Delivery."
          IconColor={Theme.Color.White}
          IconName="car"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Primary}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/subpage"
          Subhead=""
          Headline="Order by Phone."
          IconColor={Theme.Color.White}
          IconName="phone"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Primary}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/company"
          Subhead="Leafly 2018"
          Headline="Voted Best Boutique Dispensary"
          IconColor={Theme.Color.White}
          IconName="trophy"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Slate}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/learn"
          Subhead="Questions?"
          Headline="We've got answers."
          IconColor={Theme.Color.White}
          IconName="map-marker-alt"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Primary}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/company"
          Subhead="Values"
          Headline="Discover a new type of Cannabis Store."
          IconColor={Theme.Color.White}
          IconName="heart"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Gunmetal}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor={Theme.Color.Black}
          TintOpacity="0.6"
          BgImageFile="be14.png"
          Destination="/locations"
          Subhead="63 locations"
          Headline="View our locations"
          IconColor={Theme.Color.White}
          IconName="map-marker-alt"
        />
      </WidgetContainerStyle.Inner>
    </CrossWidgetStyle.Inner>
  </CrossWidgetStyle>
);

export default CrossWidget;
