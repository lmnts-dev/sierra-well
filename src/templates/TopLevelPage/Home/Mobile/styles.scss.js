// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

/* Widget Content */
const HomeTemplateStyle = styled.div`
  .widget-inner {
    box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.12);

    svg {
      display: none;
    }

    i {
      font-size: 4rem;
    }
  }

  .widget-section {
    .widget-subheadline {
      font-size: 1rem;
    }
    .widget-headline {
      font-size: 1rem;
    }

    i {
      font-size: 2rem;
    }
  }
`;

export default HomeTemplateStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
