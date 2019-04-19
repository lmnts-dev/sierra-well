// Default Widget.js:

// Example Usage:
// <Widget
// WidgetContent={WidgetContent}
// BgImage="https://source.unsplash.com/1600x1200/?cannabis"
// TintColor={Theme.Color.Black}
// TintOpacity=".5"
// Subhead="Subhead"
// Headline="Headline"
// TextColor={Theme.Color.White}
// IconColor={Theme.Color.White}
// IconName="graduation-cap"
// Destination="/subpage"
// />;

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import WidgetStyle from './styles.scss';

// Components
import Icon from 'elements/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const DefaultWidget = ({
  BgColor,
  BgImage,
  TextColor,
  TintColor,
  TintOpacity,
  Destination,
  Subhead,
  Headline,
  IconColor,
  IconName,
}) => (
  <WidgetStyle
    BgColor={BgColor}
    BgImage={BgImage}
    TextColor={TextColor}
    TintColor={TintColor}
    TintOpacity={TintOpacity}
    className="widget-content"
  >
    <Link to={Destination}>
      <WidgetStyle.Subhead>{Subhead}</WidgetStyle.Subhead>
      <WidgetStyle.Headline>{Headline}</WidgetStyle.Headline>
      <Icon className="svg-carat" Name="carat" Color={IconColor} />
      <WidgetStyle.Icon className={'fas fa-' + IconName} Color={IconColor} />
    </Link>
  </WidgetStyle>
);

export default DefaultWidget;
