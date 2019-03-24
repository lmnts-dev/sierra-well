// SubLevelPage Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const SubLevelPageStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
`;

SubLevelPageStyle.Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: ${Root.Grid.Gutter.Right};

  .content-stretch {
    height: 200vh;
    padding: ${Root.Size};
  }
`;

export default SubLevelPageStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
