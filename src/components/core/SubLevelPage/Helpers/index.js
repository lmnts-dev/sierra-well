// SubLevel Helpers Component:
// This is a helper component containing base 
// SubLevel styles shared across all SubLevel components.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import { SubLevelInnerStyle } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SubLevelInner = ({ children, GutterCancel }) => (
  <SubLevelInnerStyle GutterCancel={GutterCancel}>
    { children }
  </SubLevelInnerStyle>
);

//////////////////////////////////////////////////////////////////////
// End Component
