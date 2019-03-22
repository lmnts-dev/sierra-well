// PageTheme.js:
// This is for individual Page theming.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { createGlobalStyle } from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const PageThemeStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.BgColor ? props.BgColor : Theme.Color.Background};
    transition: background-color 1s ease;
  }
`;

const PageTheme = ({ BgColor }) => <PageThemeStyle BgColor={BgColor} />;

export default PageTheme;

//////////////////////////////////////////////////////////////////////
// End Component
