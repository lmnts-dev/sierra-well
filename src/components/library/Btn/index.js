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

const Btn = ({
  Label,
  Destination,
  IconClass,
  IconPosition,
  IconFas,
  BgColor,
  TextColor,
  Size,
  AddClass,
}) => {
  return (
    <BtnStyle
      className={AddClass ? 'btn' + AddClass : 'btn'}
      to={Destination ? Destination : '/'}
    >
      <BtnStyle.Inner
        className="btn-inner"
        BgColor={BgColor}
        TextColor={TextColor}
        Size={Size}
        IconPosition={IconPosition ? IconPosition : null}
      >
        <span>{Label}</span>
        {IconClass ? <Icon fas={IconFas} Name={IconClass} /> : null}
      </BtnStyle.Inner>
    </BtnStyle>
  );
};

export default Btn;

//////////////////////////////////////////////////////////////////////
// End Component
