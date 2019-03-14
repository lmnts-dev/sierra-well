/* eslint-disable */
import { createGlobalStyle } from 'styled-components';

// Font.js:
// This is the sitewide font reference.

export const Font = {
  Header: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  Body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  Code: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
};

export const Typography = createGlobalStyle`
  body {
    font-family: ${Font.Body};
  }

  p {
    font-family: ${Font.Body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${Font.Header};
  }
`
