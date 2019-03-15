// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

const HorizontalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${Base.Grid.Nav.Size.Lg * 2 + 'px'};
  padding-bottom: ${Root.Nav.Size};
`;

HorizontalContent.Inner = styled.div`
  width: 100vw;
  flex: 1;
  background-color: lightgreen;
  padding: ${Root.Grid.Gutter.Top} ${Root.Grid.Gutter.Right}
    ${Root.Grid.Gutter.Bottom} ${Root.Grid.Gutter.Left};
`;

export default HorizontalContent;

//////////////////////////////////////////////////////////////////////
// End Styles
