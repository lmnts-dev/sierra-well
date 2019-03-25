// Keyframes.js:
// For CSS Keyframes.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Fade In
export const FadeInKeyFrames = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

function Cascade(Keyframes, Duration, DelayBase, Increment) {
  const DelayScale = DelayBase * Increment;

  return css`
    animation: ${Keyframes} ${Duration}s ${Theme.Base.Transition.CssEase} 1;
    animation-delay: ${DelayScale}s;
    animation-fill-mode: forwards;
  `;
}

export const FadeIn = css`
  opacity: 0;
  ${Cascade(FadeInKeyFrames, 1, 1, 1)}
  &:first-child {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.3)}
  }
  &:nth-child(2) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.4)}
  }
  &:nth-child(3) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.5)}
  }
  &:nth-child(4) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.6)}
  }
  &:nth-child(5) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.7)}
  }
  &:nth-child(6) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.8)}
  }
  &:nth-child(7) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 1.9)}
  }
  &:nth-child(8) {
    opacity: 0;
    ${Cascade(FadeInKeyFrames, 1, 1, 2)}
  }
`;

// Fade Out
export const FadeOutKeyFrames = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const FadeOut = css`
  animation: ${FadeOutKeyFrames} ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase} 1;
`;

//////////////////////////////////////////////////////////////////////
// End Component
