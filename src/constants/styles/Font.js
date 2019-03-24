/* eslint-disable */
import { createGlobalStyle } from 'styled-components';

// Font.js:
// This is the sitewide font reference.

export const Font = {
  Header: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  Body: `AkzidenzGroteskBE-Regular, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
  Size: {
    Sm: '1rem',
    Md: '1rem',
    Lg: '1rem',
    ViewWidth: {
      Sm: '1.2vw',
      Md: '1.2vw',
      Lg: '1.2vw',
    },
  },
  Icon: {
    Size: {
      Sm: '1.5vw',
      Md: '1.5vw',
      Lg: '1.7vw',
    },
  },
};

// Global Type Styles
export const Typography = createGlobalStyle`
  body {
    line-height: 1;
    font-size: 1rem;
    font-family: ${Font.Body};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  p {
    font-family: ${Font.Body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${Font.Header};
  }

  h1, .h1 {
    font-size: 6rem;
  }
`;
