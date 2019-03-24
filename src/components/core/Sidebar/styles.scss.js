// SubLevelPage Component Styles:

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
  left: 0;
  bottom: 0;
  height: calc(100vh - ${Root.Nav.Size});
  display: flex;
`;

SidebarStyle.Inner = styled.div`
  background-color: blue;
  flex: 1;
  padding: ${Theme.Base.Size.Sm} ${Theme.Base.Size.Sm};
  width: ${Root.Grid.Gutter.Left};
`;

export default SidebarStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
