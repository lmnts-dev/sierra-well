// Default Widget.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';

// Styles
import WidgetStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Widget = ({ children, BgColor }) => (
  <WidgetStyle className="widget">
    <WidgetStyle.Inner BgColor={BgColor}>{children}</WidgetStyle.Inner>
  </WidgetStyle>
);

export default Widget;
