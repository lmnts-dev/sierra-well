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

const BreadCrumb = ({ to, Label, TextColor }) => (
  <BreadCrumbStyle to={to}>
    <BreadCrumbStyle.Label TextColor={TextColor}>
      <Icon className="svg-carat" Name="carat" TextColor={TextColor} />
      {Label}
    </BreadCrumbStyle.Label>
  </BreadCrumbStyle>
);

export default BreadCrumb;

//////////////////////////////////////////////////////////////////////
// End Component
