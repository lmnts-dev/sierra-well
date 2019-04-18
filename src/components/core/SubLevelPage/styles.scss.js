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
  display: flex;
  flex-wrap: nowrap;
  color: ${Theme.Color.Background};
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
`;

SubLevelPageStyle.Inner = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default SubLevelPageStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
