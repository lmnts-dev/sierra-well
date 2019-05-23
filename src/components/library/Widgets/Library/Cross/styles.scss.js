// Cross Widget Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

/* Cross Widget Content */
const CrossWidgetStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(
    (100vh - (${Root.Nav.Size} * 2 + ${Root.Footer.Size})) -
      ((${Root.Size} / 6) * 2)
  );
`;

CrossWidgetStyle.Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr 1fr;
  grid-template-rows: 1fr 0.75fr 1fr;
  grid-gap: calc(${Root.Size} / 4);
  justify-content: stretch;
  justify-items: stretch;
  grid-auto-flow: row;
  align-items: stretch;
  width: calc(
    (100vh - (${Root.Nav.Size} * 2 + ${Root.Footer.Size})) -
      ((${Root.Size} / 6) * 2)
  );
  flex: 1;
`;

export default CrossWidgetStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
