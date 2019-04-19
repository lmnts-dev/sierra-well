// SimpleHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SimpleSectionStyle = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
`;

SimpleSectionStyle.Inner = styled(SectionInnerStyle)`
  padding-top: ${Root.Size};
  padding-bottom: ${Root.Size};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    flex: 1;
  }
`;

SimpleSectionStyle.Content = styled(SectionContentStyle)`
  margin: 0 auto;
`;

export default SimpleSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
