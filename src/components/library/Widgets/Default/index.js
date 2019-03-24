// Default Widget.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import WidgetStyle from './styles.scss';

// Components
import Icon from 'elements/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Widget = ({
  BgColor,
  BgImage,
  Subhead,
  Headline,
  TextColor,
  IconName,
  IconColor,
  Destination,
  TintColor,
  TintOpacity
}) => (
  <WidgetStyle className="widget">
    <WidgetStyle.Inner
      BgColor={BgColor}
      BgImage={BgImage}
      TextColor={TextColor}
      TintColor={TintColor}
      TintOpacity={TintOpacity}
    >
      <Link to={Destination}>
        <WidgetStyle.Subhead>{Subhead}</WidgetStyle.Subhead>
        <WidgetStyle.Headline>{Headline}</WidgetStyle.Headline>
        <Icon className='svg-carat' Name="Carat" Color={IconColor} />

        {/* Pass Icon value using FontAwesome */}
        {/* Read more: https://fontawesome.com/how-to-use/on-the-web/setup/getting-started */}
        <WidgetStyle.Icon className={'fas fa-' + IconName} Color={IconColor} />
      </Link>
    </WidgetStyle.Inner>
  </WidgetStyle>
);

export default Widget;
