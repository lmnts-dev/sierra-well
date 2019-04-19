// SimpleHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SimpleHeroStyle = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => props.bgColor ? props.bgColor : Theme.Color.Primary};
  color: ${props => props.textColor ? props.textColor : Theme.Color.White};
  align-self: flex-start;
  justify-self: flex-start;
`;

export default SimpleHeroStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
