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

// Constants
import { Theme, Root } from 'constants/Theme';

// Components
import Icon from 'elements/Icons';
import ImgMatch from 'components/core/ImgMatch';

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
  BgImageFile,
  BgImageAltText,
}) => (
  <WidgetStyle
    BgColor={BgColor}
    BgImage={BgImage}
    TextColor={BgImageFile ? Theme.Color.White : TextColor}
    TintColor={TintColor}
    TintOpacity={TintOpacity}
    className="widget-content"
  >
    <Link to={Destination}>
      <WidgetStyle.Subhead className="widget-subheadline">
        {Subhead}
      </WidgetStyle.Subhead>
      <WidgetStyle.Headline className="widget-headline">
        {Headline}
      </WidgetStyle.Headline>
      <Icon className="svg-carat" Name="carat" Color={IconColor} />
      <WidgetStyle.Icon className={'fas fa-' + IconName} Color={IconColor} />
    </Link>
    {BgImageFile ? (
      <ImgMatch src={BgImageFile} AltText={BgImageAltText} />
    ) : null}
  </WidgetStyle>
);

export default DefaultWidget;
