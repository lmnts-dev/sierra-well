// Button Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const ButtonStyle = styled(Link)`
  background-color: ${Theme.Color.Nightsky};
  height: ${Root.Button.Size};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${Theme.Base.Size.Sm};
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: ${Theme.Color.White};
  margin: 0;
  box-shadow: 0px 0px 0px 0px rgba(${Theme.Color.Nightysky}, 0);
  transition: all ${Theme.Base.Transition.Duration} ease;
  line-height: 0;
  border: 0;
  outline: 0;
  text-transform: capitalize;

  &:hover {
    text-decoration: none;
  }
`;

export default ButtonStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
