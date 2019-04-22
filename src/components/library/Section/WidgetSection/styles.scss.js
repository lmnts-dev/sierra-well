// WidgetSection Styles:

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

const WidgetSection = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
`;

WidgetSection.Inner = styled(SectionInnerStyle)`
  padding-top: ${Root.Size};
  padding-bottom: ${Root.Size};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 400px;
`;

WidgetSection.Content = styled(SectionContentStyle)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: stretch;

  .widget {
    padding: calc(${Root.Size} / 6);
  }
`;

export default WidgetSection;

//////////////////////////////////////////////////////////////////////
// End Styles
