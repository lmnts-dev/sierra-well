// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';

// Vendor
import { StaticQuery, graphql } from 'gatsby';

// Styles
import ButtonStyle from 'components/library/Button/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Button = ({ Label, To, IconClass, Color }) => {
  if (IconClass) {
    return (
      <ButtonStyle className="btn" To={To} Color={Color}>
        <span>{Label}</span>
        <Icon Name={IconClass} />
      </ButtonStyle>
    );
  } else {
    return (
      <ButtonStyle className="btn" To={To} Color={Color}>
        {Label}
      </ButtonStyle>
    );
  }
};

export default Button;

//////////////////////////////////////////////////////////////////////
// End Component
