// SideHeaderWidgetStyle.js:

// Core
import React from 'react';

// Styles
import SideHeaderWidgetStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SideHeaderWidget = ({ Header, IntroCopy, BodyCopy, TextColor }) => (
  <SideHeaderWidgetStyle TextColor={TextColor} className="widget-content">
    <SideHeaderWidgetStyle.Inner>
      <SideHeaderWidgetStyle.Header>{Header}</SideHeaderWidgetStyle.Header>
      <SideHeaderWidgetStyle.Body>
        <SideHeaderWidgetStyle.IntroCopy>
          {IntroCopy}
        </SideHeaderWidgetStyle.IntroCopy>
        <SideHeaderWidgetStyle.BodyCopy>
          {BodyCopy}
        </SideHeaderWidgetStyle.BodyCopy>
      </SideHeaderWidgetStyle.Body>
    </SideHeaderWidgetStyle.Inner>
  </SideHeaderWidgetStyle>
);

export default SideHeaderWidget;
