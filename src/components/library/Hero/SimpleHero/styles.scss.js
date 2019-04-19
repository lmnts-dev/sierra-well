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
  background: ${props => (props.Background ? props.Background : 'none')};
  color: ${props => (props.TextColor ? props.TextColor : 'inherit')};
  align-self: flex-start;
  justify-self: flex-start;

  .block {
    &:first-child {
      padding-right: calc(${Root.Size} / 2);
    }
    &:second-child {
      padding-left: calc(${Root.Size} / 2);
    }
  }
`;

export default SimpleHeroStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
