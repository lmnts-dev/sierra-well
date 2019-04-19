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

/* Widget Content */
const SideHeaderWidgetStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: none;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
`;

SideHeaderWidgetStyle.Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${Root.ViewWidthPadding};
  flex: 1;
  width: 100%;
  position: relative;
`;

SideHeaderWidgetStyle.Header = styled.h1`
  position: absolute;
  top: ${Root.ViewWidthPadding};
  left: ${Root.ViewWidthPadding};
  transform: rotate(90deg) translateY(-100%);
  display: flex;
  font-weight: light;
  font-size: calc(${Root.ViewHeightFontSize} * 4);
  justify-content: flex-end;
  transform-origin: top left;
  opacity: 0.3;
  white-space: nowrap;
  word-break: none;
  pointer-events: none;
  width: auto;
  line-height: .8;
`;

SideHeaderWidgetStyle.Body = styled.div``;

SideHeaderWidgetStyle.IntroCopy = styled.p`
  font-size: calc(${Root.ViewWidthFontSize} * 1.3);
  padding-bottom: ${Root.ViewWidthPadding};
  line-height: 1.2;
  font-weight: light;
`;

SideHeaderWidgetStyle.BodyCopy = styled.p`
  font-size: ${Root.ViewWidthFontSize};
  padding-top: ${Root.ViewWidthPadding};
  line-height: 1.2;
  font-weight: regular;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(${Root.ViewWidthFontSize} * 1.5);
    height: 1px;
    background-color: ${props =>
      props.TextColor ? props.TextColor : Theme.Color.Black};
  }
`;

export default SideHeaderWidgetStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
