// Small Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
const NavigationSmallStyle = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${Root.Nav.Size};
  background-color: ${Theme.Color.White};
  overflow: hidden;
  border-radius: ${Root.Radius} ${Root.Radius} 0 0;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 700;
`;

NavigationSmallStyle.Inner = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

NavigationSmallStyle.List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  list-style-type: none;
  appearance: none;

  /* Individual Item styles in ./Item/styles.scss */
`;

export default NavigationSmallStyle;

//////////////////////////////////////////////////////////////////////
// End Component
