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

const Widget = ({ WidgetContent }) => (
  <WidgetStyle className="widget">
    {console.log(WidgetContent[0])}
    <WidgetStyle.Inner
      BgColor={WidgetContent[0].BgColor}
      BgImage={WidgetContent[0].BgImage}
      TextColor={WidgetContent[0].TextColor}
      TintColor={WidgetContent[0].TintColor}
      TintOpacity={WidgetContent[0].TintOpacity}
    >
      <Link to={WidgetContent[0].Destination}>
        <WidgetStyle.Subhead>{WidgetContent[0].Subhead}</WidgetStyle.Subhead>
        <WidgetStyle.Headline>{WidgetContent[0].Headline}</WidgetStyle.Headline>
        <Icon
          className="svg-carat"
          Name="Carat"
          Color={WidgetContent[0].IconColor}
        />

        <WidgetStyle.Icon
          className={'fas fa-' + WidgetContent[0].IconName}
          Color={WidgetContent[0].IconColor}
        />
      </Link>
    </WidgetStyle.Inner>
  </WidgetStyle>
);

export default Widget;
