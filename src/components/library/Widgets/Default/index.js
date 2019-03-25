// Default Widget.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

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

// const WidgetContent = {
//   Content: {
//     BgColor: '',
//     BgImage: '',
//     Subhead: '',
//     Headline: '',
//     TextColor: '',
//     IconName: '',
//     IconColor: '',
//     Destination: '',
//     TintColor: '',
//     TintOpacity: '',
//   },
// };

// {/* Pass Icon value using FontAwesome */}
//         {/* Read more: https://fontawesome.com/how-to-use/on-the-web/setup/getting-started */}

const WidgetIndex = 1;

const WidgetInner = ({
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
      <Icon className="svg-carat" Name="Carat" Color={IconColor} />
      <WidgetStyle.Icon className={'fas fa-' + IconName} Color={IconColor} />
    </Link>
  </WidgetStyle.Inner>
);

// Widget Itself
const Widget = ({ WidgetContent }) => (
  <WidgetStyle className="widget">
    <WidgetInner
      BgColor={WidgetContent[WidgetIndex].BgColor}
      BgImage={WidgetContent[WidgetIndex].BgImage}
      TextColor={WidgetContent[WidgetIndex].TextColor}
      TintColor={WidgetContent[WidgetIndex].TintColor}
      TintOpacity={WidgetContent[WidgetIndex].TintOpacity}
      Destination={WidgetContent[WidgetIndex].Destination}
      Subhead={WidgetContent[WidgetIndex].Subhead}
      Headline={WidgetContent[WidgetIndex].Headline}
      IconName={WidgetContent[WidgetIndex].IconName}
      IconColor={WidgetContent[WidgetIndex].IconColor}
    />
  </WidgetStyle>
);

export default Widget;
