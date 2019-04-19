// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';

// Styles
import BtnStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Btn = ({ Label, Destination, IconClass, BgColor }) => {
  if (IconClass) {
    return (
      <BtnStyle className="btn" to={Destination}>
        <span>{Label}</span>
        <Icon Name={IconClass} />
      </BtnStyle>
    );
  } else {
    return (
      <BtnStyle className="btn" to={Destination}>
        {Label}
      </BtnStyle>
    );
  }
};

export default Btn;

//////////////////////////////////////////////////////////////////////
// End Component
