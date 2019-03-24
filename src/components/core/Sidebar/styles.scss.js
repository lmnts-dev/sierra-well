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
  position: sticky;
  top: ${Root.Nav.Size};
  height: calc(100vh - ${Root.Nav.Size});
  display: flex;
  z-index: 555;
`;

SidebarStyle.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${Theme.Base.Size.Sm} ${Theme.Base.Size.Sm} ${Root.Footer.Size} ${Theme.Base.Size.Sm};
  width: ${Root.Grid.Gutter.Left};
`;

export default SidebarStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
