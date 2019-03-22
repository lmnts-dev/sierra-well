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
  padding-left: 0;
  padding-right: 0;
`;

HorizontalContent.Inner = styled.div`
  width: 100vw;
  flex: 1;
  padding: 0;
`;

export default HorizontalContent;

//////////////////////////////////////////////////////////////////////
// End Styles
