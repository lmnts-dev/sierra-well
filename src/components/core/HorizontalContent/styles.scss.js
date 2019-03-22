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

const HorizontalContentStyle = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

HorizontalContentStyle.Inner = styled.div`
  width: 100%;
  padding: 0;
`;

HorizontalContentStyle.Slide = styled.div`
  width: 100%;
  height: calc(100vh - (${Root.Nav.Size} + ${Root.Footer.Size}));
  background-color: ${props => props.bg};
`;

export default HorizontalContentStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
