// SideWidgetStyle.js:

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import SideWidgetStyle from './styles.scss';

// Components
import Icon from 'elements/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SideWidget = ({
  BgColor,
  BgImage,
  Header,
  Subhead,
  TextColor,
  TintColor,
  TintOpacity,
  Destination,
  IconName,
  IconColor,
}) => (
  <SideWidgetStyle
    BgColor={BgColor}
    BgImage={BgImage}
    TextColor={TextColor}
    TintColor={TintColor}
    TintOpacity={TintOpacity}
    className="widget-content"
  >
    <Link to={Destination}>
      <SideWidgetStyle.Header>{Header}</SideWidgetStyle.Header>
      <SideWidgetStyle.Body>
        <SideWidgetStyle.Subhead>{Subhead}</SideWidgetStyle.Subhead>
      </SideWidgetStyle.Body>
      <SideWidgetStyle.Icon
        className={'fas fa-' + IconName}
        Color={IconColor}
      />
    </Link>
  </SideWidgetStyle>
);

export default SideWidget;
