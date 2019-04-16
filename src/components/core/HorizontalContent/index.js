// HorizontalContent.js:
// For building out
// Horizontally focused pages, like top-level
// navigation pages.

// Core
import React from 'react';

// Styles
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Horizontal Content Itself
export const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>{children}</HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent;
