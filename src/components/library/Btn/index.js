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
  BgColor,
  TextColor,
  Size,
  AddClass,
}) => {
  if (IconClass) {
    return (
      <BtnStyle
        className={AddClass ? 'btn' + AddClass : 'btn'}
        BgColor={BgColor}
        TextColor={TextColor}
        Size={Size}
        IconPosition={IconPosition ? IconPossition : 'right'}
        to={Destination ? Destination : '/'}
      >
        <span>{Label}</span>
        <Icon Name={IconClass} />
      </BtnStyle>
    );
  } else {
    return (
      <BtnStyle
        className="btn"
        BgColor={BgColor}
        TextColor={TextColor}
        Size={Size}
        to={Destination ? Destination : '/'}
      >
        {Label}
      </BtnStyle>
    );
  }
};

export default Btn;

//////////////////////////////////////////////////////////////////////
// End Component
