import { createGlobalStyle } from 'styled-components';
import { Theme } from 'constants/Theme';

// Responsive Measurements:
// We use these to avoid media queries all 
// over the place where possible.

export default createGlobalStyle`
  :root {
    /* Large Viewports */

    /* Medium Viewports */
    @media (max-width: ${Theme.Base.Media.Width.Md}) {

    }

    /* Small Viewports */
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {

    }
  }

  html {
    font-size: ${Theme.Base.FontSize}
  }
`