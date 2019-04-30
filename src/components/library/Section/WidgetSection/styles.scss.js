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
  flex-wrap: wrap;

  .widget {
    width: 25%;
    padding: calc(${Root.Size} / 6);
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }

    @media (max-width: calc(${Theme.Base.Media.Width.Md} * 1.5)) {
      width: 50%;
      flex: unset;
      &:nth-child(odd) {
        padding-left: 0;
      }
      &:nth-child(even) {
        padding-right: 0;
      }
    }
  }
`;

export default WidgetSection;

//////////////////////////////////////////////////////////////////////
// End Styles
