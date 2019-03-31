// ScrollWrapper.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import posed, { PoseGroup } from 'react-pose';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import { createGlobalStyle } from 'styled-components';
import VerticalContentStyle from 'components/core/VerticalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Wrapper Scrolls
const WrapperLock = createGlobalStyle`
  .wrapper {
    overflow-y: auto;
  }
`;

// The Content Itself
const VerticalContent = ({ children }) => (
  <VerticalContentStyle>
    <VerticalContentStyle.Inner>Vertical Content</VerticalContentStyle.Inner>
  </VerticalContentStyle>
);

export default VerticalContent;
