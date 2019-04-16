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
          Headline="View Menu"
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
          Destination="/subpage"
          Subhead=""
          Headline="Speak to a Real Human"
          IconColor={Theme.Color.White}
          IconName="comment-alt"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.White}
          BgImage=""
          TextColor={Theme.Color.Nightsky}
          TintColor=""
          TintOpacity=""
          Destination="/subpage"
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
          Destination="/subpage"
          Subhead=""
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
          Destination="/subpage"
          Subhead="2018"
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
          Destination="/subpage"
          Subhead="Delivery Available"
          Headline="Reno, NV"
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
          Destination="/subpage"
          Subhead="May 16th"
          Headline="Fundraiser for Ronald McDonald House"
          IconColor={Theme.Color.White}
          IconName="calendar"
        />
      </WidgetContainerStyle.Inner>

      <WidgetContainerStyle.Inner>
        <DefaultWidget
          BgColor={Theme.Color.Gunmetal}
          BgImage=""
          TextColor={Theme.Color.White}
          TintColor=""
          TintOpacity=""
          Destination="/subpage"
          Subhead="Delivery Available"
          Headline="Carson City, NV"
          IconColor={Theme.Color.White}
          IconName="map-marker-alt"
        />
      </WidgetContainerStyle.Inner>
    </CrossWidgetStyle.Inner>
  </CrossWidgetStyle>
);

export default CrossWidget;
