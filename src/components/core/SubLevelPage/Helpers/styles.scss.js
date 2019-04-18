// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SubLevelInnerStyle = styled.div`
  width: 100%;
  margin: 0;
  padding-left: calc(${Root.Grid.Gutter.Left});
  padding-right: ${props =>
    props.GutterCancel == 'right' ? '0' : Root.Grid.Gutter.Right};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
