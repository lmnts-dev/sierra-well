// WrapperLock.js:
// For locking the .wrapper class in the event
// it's a Horizontal Scrolling Section.

// Core
import React from 'react';

// Constants
import { Base } from 'constants/styles/Base';

// Styles
import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Wrapper Scroll
const WrapperLock = createGlobalStyle`
  .wrapper {
    @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
      overflow: hidden;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      overflow-y: scroll; /* has to be scroll, not auto */
      -webkit-overflow-scrolling: touch;
    }
  }

  .slick-slider {
    touch-action: none !important;
  }
`;

export default WrapperLock;
