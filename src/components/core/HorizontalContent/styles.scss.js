// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const HorizontalContentStyle = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: ${Root.Footer.Size};
  overflow: visible;

  .slick-slider {
    .slick-list {
      overflow: visible;
    }

    .slick-track {
      display: flex;
    }

    /* Arrows */
    .slick-arrow {
      top: calc((${Root.Size}) * -1);
      transform: none;
      right: 0;
      left: unset;
      width: calc(${Root.Size} * 0.75);
      height: calc(${Root.Size} * 0.75);
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background: rgba(0, 0, 0, 0);
      z-index: 1500;

      &.slick-prev {
        transform: rotate(180deg);
        right: calc(
          ((${Root.Size} * 0.75) + (${Root.Size} * 0.25)) +
            ${Root.Grid.Gutter.Right}
        );
      }

      &.slick-next {
        right: calc(${Root.Grid.Gutter.Right});
      }

      &.slick-disabled {
        opacity: 0.4;
        .ico {
          opacity: 0.5;
        }
        &:hover {
          background: rgba(0, 0, 0, 0);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
      }

      &:hover {
        background: rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.03);
      }

      .ico {
        position: absolute;
        left: 54%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:before {
        content: '';
      }
    }
  }
`;

// The Slide Group Wrapper
HorizontalContentStyle.Inner = styled.div`
  width: 100%;
  padding: calc(${Root.Nav.Size} * 2) 0 0 0;

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

  .widget {
    ${FadeIn};
  }
`;

// The Individual Slide Wrapper
HorizontalContentStyle.SlideColumnContainer = styled.div`
  width: 100%;
  padding: 0;
  overflow: visible;
  height: calc(100vh - (${Root.Nav.Size} * 2 + ${Root.Footer.Size}));
`;

// The Individual Slide Inner
HorizontalContentStyle.SlideColumnContainer.Inner = styled.div`
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

  .col-inner {
    min-width: 150px;
  }
`;

HorizontalContentStyle.Column.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
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
          // left: calc(50% - ${Base.Size.Sm / 2 + 'px'});
          left: 50%;
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
