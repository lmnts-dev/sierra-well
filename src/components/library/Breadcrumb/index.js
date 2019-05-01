// <Bread Crumbs=""> Component:
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

const Bread = ({ Crumbs, TextColor }) => (
  <BreadCrumbStyle>
    {Crumbs.map((crumb, index) => {
      return (
        <BreadCrumbStyle.Label
          to={crumb.Destination}
          key={index}
          TextColor={TextColor}
        >
          {/* // Hide back button if nested item. */}
          {index == 0 ? (
            <Icon className="svg-carat" Name="carat" TextColor={TextColor} />
          ) : null}

          {crumb.Label}
        </BreadCrumbStyle.Label>
      );
    })}
  </BreadCrumbStyle>
);

export default Bread;

//////////////////////////////////////////////////////////////////////
// End Component
