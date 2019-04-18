// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const PromotionSliderStyle = styled.div`
  margin: 0;
  flex: 1;
  height: calc(${Root.Nav.Size} * 0.65);
  position: relative;
  width: 100%;

  .slick-slider {
    position: absolute !important;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  .slick-slider,
  .slick-list,
  .slick-track {
    height: calc(${Root.Nav.Size} * 0.65);
    position: relative;
  }

  .slick-slider {
    .slick-dots {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${Theme.Base.Size.Sm};
      bottom: unset;
      text-align: left;
      width: auto;
      display: flex !important;
      align-items: center;
      li {
        height: 4px;
        width: 4px;
        button {
          height: 4px;
          width: 4px;
          padding: 0;
          &:before {
            content: '';
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 4px;
            width: 4px;
            border-radius: 50%;
            border: 1px solid ${Theme.Color.White};
            opacity: 1;
          }
        }

        &.slick-active {
          button {
            height: 4px;
            width: 4px;
            padding: 0;
            &:before {
              content: '';
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              height: 4px;
              width: 4px;
              border-radius: 50%;
              background: ${Theme.Color.White};
              opacity: 1;
              border: 1px solid ${Theme.Color.White};
            }
          }
        }
      }
    }
  }
`;

PromotionSliderStyle.Slide = styled.div`
  margin: 0;
  width: 100%;
  height: calc(${Root.Nav.Size} * 0.65);
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${Theme.Base.Size.Sm} 0 ${Root.Size};
  font-size: 1.2rem;

  span {
    &:first-child {
      font-weight: bold;
      margin-right: 10px;
    }
  }

  div {
    height: calc(${Root.Nav.Size} * 0.65);
    display: flex !important;
    align-items: center;
    width: 100%;
    padding: 0 ${Theme.Base.Size.Sm};
  }

  .promo-button {
    display: flex;
    justify-content: flex-end;

    a {
      display: inline-block;
      border-radius: 999px;
      padding: calc(${Theme.Base.Size.Sm} * 0.75) ${Theme.Base.Size.Md}
        calc(${Theme.Base.Size.Sm} * 0.75) ${Theme.Base.Size.Sm};
      color: ${Theme.Color.White};
      position: relative;
      z-index: 400;

      &:hover {
        background-color: rgba(0, 0, 0, 0.09);
        text-decoration: none;
      }

      &:before {
        content: '⮀';
        line-height: 0;
        font-size: 12px;
        position: absolute;
        top: 50%;
        right: calc(${Theme.Base.Size.Sm} * 1.2);
      }
    }
  }
`;

export default PromotionSliderStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
