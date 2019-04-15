// Widget Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

const WidgetContainerStyle = styled.div`
  padding-top: ${Theme.Base.Size.Sm};
  width: 100%;
  flex: ${props => (props.Flex ? props.Flex : '1')};
  display: flex;
  flex-direction: column;
`;

WidgetContainerStyle.Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${Root.Radius};
  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);
  position: relative;
  overflow: hidden;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  cursor: pointer;

  /* Slick Slider Adjustments */

  .slick-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .slick-dots {
      bottom: ${Theme.Base.Size.Sm};
      left: ${Theme.Base.Size.Sm};
      width: auto;
      padding: 0;
      margin: 0;

      li {
        margin: 0;
        padding: 0;
        width: 10px;
        height: 10px;
        margin-right: 5px;

        button {
          margin: 0;
          padding: 0;
          position: relative;
          width: 10px;
          height: 10px;
          margin-right: 5px;

          &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 7px;
            height: 7px;
            border: 1px solid ${Theme.Color.Black};
            border-radius: 50%;
          }
        }
      }
    }
  }

  .slick-slider,
  .slick-list,
  .slick-track {
    flex: 1;
  }

  .slick-list,
  .slick-slider {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0;
  }

  .slick-slide {
    display: flex !important;
    flex-direction: column;
    align-items: stretch;
    flex: 1;

    &:first-child {
      padding: 0;
    }

    div {
      &:first-child {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
    }

    .widget-content {
      flex: 1;

      div {
        &:first-child {
          flex: unset;
          display: unset;
          flex-direction: unset;
          align-items: unset;
        }
      }
    }
  }
`;

export default WidgetContainerStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
