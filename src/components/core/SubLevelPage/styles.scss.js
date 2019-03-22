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
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
  background-color: ${props => (props.BgColor ? props.BgColor : 'none')};
  min-height: 100vh;
`;

SubLevelPageStyle.Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .content-stretch {
    height: 200vh;
    color: white;
    background: ${Theme.Color.Nightsky};
    padding: ${Root.Grid.Gutter.Right} ${Root.Grid.Gutter.Right}
      ${Root.Grid.Gutter.Right} 0;
  }
`;

export default SubLevelPageStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
