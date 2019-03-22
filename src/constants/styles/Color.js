// Color.js:
// This is the sitewide palette.

// Imports
//////////////////////////////////////////////////////////////////////

import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Color = {
  // Core Colors
  Primary: '#40DA33',
  Secondary: '#5D6376',
  Background: '#F2F3F3',

  // Grayscale Palette
  Black: '#000000',
  Nightsky: '#262222',
  Gunmetal: '#5D6376',
  Slate: '#AEB9C4',
  Gray: '#CCD0D6',
  Snow: '#F2F3F3',
  White: '#ffffff',

  // Main Palette
  Leaf: '#40DA33',
  Tahoe: '#2984FD',
  Sunset: '#FC6376',
  Dank: '#F8E71C',
  Flower: '#E17E00',

  // Feedback Palette
  Warning: '#FC6376',
  Success: '#40DA33',
};

export const Palette = createGlobalStyle`
  body {
    color: ${Color.Black};
    background-color: ${Color.Background};
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
