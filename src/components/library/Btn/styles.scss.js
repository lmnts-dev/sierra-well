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
  background-color: ${props =>
    props.BgColor ? props.BgColor : 'rgba(0,0,0,0)'};
  height: ${Root.Button.Size};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${Theme.Base.Size.Md};
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  margin: 0;
  box-shadow: 0px 0px 0px 0px rgba(${Theme.Color.Nightysky}, 0);
  transition: all 0s ease;
  line-height: 0;
  border: 0;
  outline: 0;
  text-transform: capitalize;
  ${props =>
    props.BgColor ? 'box-shadow: 0px 0px 0px 6px rgba(0,0,0, 0.00)' : null};

  &:hover {
    text-decoration: none;
    background-color: ${props =>
      props.BgColor ? props.BgColor : 'rgba(0,0,0,.05)'};
    ${props =>
      props.BgColor ? 'box-shadow: 0px 0px 0px 6px rgba(0,0,0, 0.07)' : null};
  }

  .ico {
    margin-left: 5px;
    line-height: 0;
    flex: 1;
    height: ${Theme.Base.Size.Sm};
    width: ${Theme.Base.Size.Sm};
    display: flex;

    i {
      color: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
      font-size: 1rem;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
      border: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};

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
