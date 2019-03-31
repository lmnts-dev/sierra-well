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

export const MenuContainerHeight = '(100vh - ((' + Root.Nav.Size + ' * 2) + 6px))';

export const MenuContainerStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  height: calc(${MenuContainerHeight});
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
`

//////////////////////////////////////////////////////////////////////
// End Component
