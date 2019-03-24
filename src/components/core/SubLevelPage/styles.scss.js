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
const SubLevelPageStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: ${Root.Grid.Gutter.Left};
`;

SubLevelPageStyle.Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: dotted 1px pink;
  background: palevioletred;
  padding-right: ${Root.Grid.Gutter.Right};

  .content-stretch {
    height: 200vh;
    padding: ${Root.Grid.Gutter.Right} ${Root.Grid.Gutter.Right}
      ${Root.Grid.Gutter.Right} 0;
  }
`;

export default SubLevelPageStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
