// BreadCrumb Component:
// The breadcrumb component, typically used in Hero components.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';

// Styles
import BreadCrumbStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroStripItem = ({ to, Label, Color }) => (
  <HeroStripItemStyle Color={Color} to={to}>
    <Icon className="svg-carat" Name="carat" Color={Color} />
    <span>{Label}</span>
  </HeroStripItemStyle>
);

export default HeroStripItem;

//////////////////////////////////////////////////////////////////////
// End Component
