// Widget Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

const WidgetStyle = styled.div`
  padding-top: ${Theme.Base.Size.Sm};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

WidgetStyle.Inner = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.White};
  border-radius: ${Root.Radius};
  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);
  transition: all 0.5s ease;
  cursor: pointer;
  color: ${Theme.Color.White};

  &:hover {
    box-shadow: 0 20px 30px 0 rgba(6, 10, 92, 0.21);
  }
`;

export default WidgetStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
