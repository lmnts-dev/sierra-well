// Layout Component:
// This is the sitewide wrapper of all the content on the site.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';

// Styles
import BtnStyle, { BtnStyleExternal, BtnStylePseudo } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const BtnInner = ({
  BgColor,
  TextColor,
  Size,
  IconPosition,
  Label,
  IconFas,
  IconClass,
}) => (
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
);

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
  External,
  Pseudo,
}) => {
  if (External) {
    return (
      <BtnStyleExternal
        className={AddClass ? 'btn ' + AddClass : 'btn'}
        href={Destination ? Destination : '/'}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <BtnInner
          BgColor={BgColor}
          TextColor={TextColor}
          Size={Size}
          IconPosition={IconPosition}
          Label={Label}
          IconFas={IconFas}
          IconClass={IconClass}
        />
      </BtnStyleExternal>
    );
  } else {
    if (Pseudo) {
      return (
        <BtnStylePseudo className={AddClass ? 'btn ' + AddClass : 'btn'}>
          <BtnInner
            BgColor={BgColor}
            TextColor={TextColor}
            Size={Size}
            IconPosition={IconPosition}
            Label={Label}
            IconFas={IconFas}
            IconClass={IconClass}
          />
        </BtnStylePseudo>
      );
    } else {
      return (
        <BtnStyle
          className={AddClass ? 'btn ' + AddClass : 'btn'}
          to={Destination ? Destination : '/'}
        >
          <BtnInner
            BgColor={BgColor}
            TextColor={TextColor}
            Size={Size}
            IconPosition={IconPosition}
            Label={Label}
            IconFas={IconFas}
            IconClass={IconClass}
          />
        </BtnStyle>
      );
    }
  }
};

export default Btn;

//////////////////////////////////////////////////////////////////////
// End Component
