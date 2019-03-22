// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const HorizontalContentStyle = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  overflow: visible;
  background-color: ${Theme.Color.Background};

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
    }
    &:first-child {
      padding: 0 0 0 ${Theme.Base.Size.Sm};
    }
  }
`;

// The Individual Slide Wrapper
HorizontalContentStyle.Slide = styled.div`
  width: 100%;
  padding: 0;
  overflow: visible;
  height: calc(100vh - (${Root.Nav.Size} + ${Root.Footer.Size}));
`;

// The Individual Slide Inner
HorizontalContentStyle.Slide.Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: visible;
  padding-bottom: ${Theme.Base.Size.Sm};
  height: calc(100vh - (${Root.Nav.Size} + ${Root.Footer.Size}));
`;

// The Column Wrapper
HorizontalContentStyle.Column = styled.div`
  padding: ${Theme.Base.Size.Sm} ${Theme.Base.Size.Sm} ${Theme.Base.Size.Sm} 0;
  height: calc(100vh - (${Root.Nav.Size} + ${Root.Footer.Size}));
  display: flex;
  flex-direction: column;
  width: ${props => (props.ColWidth ? props.ColWidth : 'auto')};
`;

HorizontalContentStyle.Column.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  .widget {
    &:first-child {
      padding-top: 0;
    }
  }
`;

export default HorizontalContentStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
