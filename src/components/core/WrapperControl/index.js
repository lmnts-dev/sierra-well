// WrapperControl.js:
// For controlling our `.wrapper` class app-wide.

// Core
import React from 'react';

// Constants
import { Base } from 'constants/styles/Base';

// Styles
import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Wrapper Scroll
export const WrapperLock = createGlobalStyle`

  html, body {
    overflow: hidden;

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      overflow: auto; 
      -webkit-overflow-scrolling: touch;
    }
  }

  .wrapper {
    @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
      overflow: hidden;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      overflow: hidden;
    }
  }

  .slick-slider {
    touch-action: none !important;
  }
`;

// Release Wrapper Scroll
export const WrapperRelease = createGlobalStyle`
  html, body {
      overflow: unset;
  }

  .wrapper {
    @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
      overflow-y: hidden;
      height: auto;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      overflow-y: hidden; /* has to be scroll, not auto */
      -webkit-overflow-scrolling: touch;
    }
  }
`;

// Wrapper Flex Reseet
export const WrapperFlexStart = createGlobalStyle`
  .wrapper {
    @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
      justify-content: flex-start;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      justify-content: space-between;
    }
  }
`;
