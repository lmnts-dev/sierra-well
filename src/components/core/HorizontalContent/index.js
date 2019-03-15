// ScrollWrapper.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Styles
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>{children}</HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent;
