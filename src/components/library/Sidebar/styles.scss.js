// Sidebar Component Styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const SidebarStyle = styled.div`
  position: fixed;
  top: ${Root.Nav.Size};
  bottom: 0;
  height: calc(100vh - ${Root.Nav.Size});
  display: flex;
  z-index: 555;

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: none;
  }
`;

SidebarStyle.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${Root.Grid.Gutter.Right};
  width: ${Root.Grid.Gutter.Left};

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: none;
  }
`;

export default SidebarStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
