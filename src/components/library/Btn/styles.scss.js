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

const BtnStyle = styled(Link)`
  background-color: ${Theme.Color.Nightsky};
  height: ${Root.Button.Size};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${Theme.Base.Size.Md};
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

  .ico {
    margin-left: 5px;
    line-height: 0;
    flex: 1;
    height: ${Theme.Base.Size.Sm};
    width: ${Theme.Base.Size.Sm};
    display: flex;

    i {
      color: ${Theme.Color.White};
      font-size: 1rem;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      fill: ${Theme.Color.White};
      border: ${Theme.Color.White};

      @media (max-width: ${Theme.Base.Media.Width.Sm}) {
        transform: scale(0.5);
        transform-origin: center center;
      }
    }
  }
`;

export default BtnStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
