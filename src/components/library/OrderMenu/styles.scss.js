// Button Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Extended Styles
import { SubLevelInnerStyle } from './../../../templates/SubLevelPage/Helpers/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Mobile Styles
//////////////////////////////////////////////////////////////////////

export const MenuContainerMobileHeight =
  '(100vh - ((' + Root.Nav.Size + ' * 3) + 6px))';

export const MenuContainerMobileStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.Color.White};
  height: calc(${MenuContainerMobileHeight});
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  transform: translateZ(0);
`;

MenuContainerMobileStyle.Inner = styled.div`
  position: relative;
  flex: 1;
  width: 100%;

  iframe {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
  }
`;

// Begin Desktop Styles
//////////////////////////////////////////////////////////////////////

export const MenuContainerDesktopStyle = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
`;

MenuContainerDesktopStyle.Inner = styled(SubLevelInnerStyle)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

MenuContainerDesktopStyle.Wrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;

  iframe {
    position: absolute;
    background-color: ${Theme.Color.White};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
