// Widgets/Container.js
// This is the holder / wrapper around Widget Content.

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import WidgetContainerStyle from './styles.scss';

// Components
import Widget from './../Library/Default/';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Widget Itself
const WidgetContainer = ({ WidgetContent }) => (
  <WidgetContainerStyle className="widget">
    <WidgetContainerStyle.Inner>
      {WidgetContent.map((Content, index) => (
        <Widget
          BgColor={Content.BgColor}
          BgImage={Content.BgImage}
          TextColor={Content.TextColor}
          TintColor={Content.TintColor}
          TintOpacity={Content.TintOpacity}
          Destination={Content.Destination}
          Subhead={Content.Subhead}
          Headline={Content.Headline}
          IconName={Content.IconName}
          IconColor={Content.IconColor}
          key={index}
        />
      ))}
    </WidgetContainerStyle.Inner>
  </WidgetContainerStyle>
);

export default WidgetContainer;
