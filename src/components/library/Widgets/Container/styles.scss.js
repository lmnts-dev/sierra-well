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

const WidgetContainerStyle = styled.div`
  padding-top: ${Theme.Base.Size.Sm};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

WidgetContainerStyle.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-radius: ${Root.Radius};
  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);
  position: relative;
  overflow: hidden;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  cursor: pointer;
`;

export default WidgetContainerStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
