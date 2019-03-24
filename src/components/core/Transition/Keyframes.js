// Keyframes.js:
// For CSS Keyframes.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Constants 
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Fade In
export const FadeInKeyFrames = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeIn = css`
  animation: ${FadeInKeyFrames} ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase} 1;
`;

// Fade Out
export const FadeOutKeyFrames = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const FadeOut = css`
  animation: ${FadeOutKeyFrames} ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase} 1;
`;

//////////////////////////////////////////////////////////////////////
// End Component
