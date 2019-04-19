// Hero Component:
// This is a helper component containing base
// Hero styles shared across all Hero components.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { HeroInnerStyle, HeroContentStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const HeroInner = ({
  imgRight,
  imgLeft,
  imgBottom,
  imgTop,
  imgWidth,
  Size,
  children,
}) => (
  <HeroInnerStyle
    Size={Size ? Size : false}
    imgRight={imgRight ? imgRight : false}
    imgLeft={imgLeft ? imgLeft : false}
    imgBottom={imgBottom ? imgBottom : false}
    imgTop={imgTop ? imgTop : false}
    imgWidth={imgWidth ? imgWidth : false}
  >
    <HeroContentStyle>{children}</HeroContentStyle>
  </HeroInnerStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component
