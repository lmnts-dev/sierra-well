// Layout Component Styles:

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
const HorizontalContentStyle = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  overflow: visible;

  .slick-list {
    overflow: visible;
  }
`;

// The Slide Group Wrapper
HorizontalContentStyle.Inner = styled.div`
  width: 100%;
  padding: 0;

  /* Padding on first slide */
  .slick-slide {
    padding: 0;
    overflow: visible;
    div {
      outline: 0;
      &:focus {
        outline: 0;
      }
      .col {
        &:first-child {
          padding-left: ${Theme.Base.Size.Sm};
        }
      }
    }
    &:first-child {
      padding: 0 0 0 ${Theme.Base.Size.Sm};
      .col {
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
`;

// The Individual Slide Wrapper
HorizontalContentStyle.Slide = styled.div`
  width: 100%;
  padding: 0;
  overflow: visible;
  height: calc(100vh - (${Root.Nav.Size} * 2 + ${Root.Footer.Size}));
`;

// The Individual Slide Inner
HorizontalContentStyle.Slide.Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: visible;
  padding-bottom: ${Theme.Base.Size.Sm};
  height: calc(100vh - (${Root.Nav.Size} * 2 + ${Root.Footer.Size}));
`;

// The Column Wrapper
HorizontalContentStyle.Column = styled.div`
  padding: ${Theme.Base.Size.Sm} ${Theme.Base.Size.Sm} ${Theme.Base.Size.Sm} 0;
  height: calc(100vh - (${Root.Nav.Size} * 2 + ${Root.Footer.Size}));
  display: flex;
  flex-direction: column;
  flex: ${props => (props.Divider ? 'unset' : '1')};
  width: ${props =>
    props.ColWidth
      ? props.ColWidth
      : props.Divider
      ? Theme.Base.Size.Md
      : 'auto'};
`;

HorizontalContentStyle.Column.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  .widget {
    &:first-child {
      padding-top: 0;
    }
  }

  ${props => {
    if (props.Divider)
      return `
        width: ${Theme.Base.Size.Md};
        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(50% - ${Base.Size.Sm / 2 + 'px'});
          width: 1px;
          opacity: .05;
          background-color: { Theme.Color.Indigo };
        }
    `;
  }}
`;

export default HorizontalContentStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
