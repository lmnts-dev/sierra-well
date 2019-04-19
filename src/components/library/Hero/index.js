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

export const HeroInner = ({ children }) => (
  <HeroInnerStyle>
    <HeroContentStyle>{children}</HeroContentStyle>
  </HeroInnerStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component
