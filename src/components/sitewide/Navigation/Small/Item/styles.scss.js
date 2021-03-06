// Small Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
const ItemStyle = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    position: relative;
    color: ${Theme.Color.Warmsky};
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};

    /* iPhone X Bump  */

    /* iphone XS */
    @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      padding-bottom: 28px;
      padding-top: 15px;
    }

    /* iphone XS Max */
    @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
      padding-bottom: 28px;
      padding-top: 15px;
    }

    i {
      font-size: 1.3rem;
      margin-top: 0px;
      margin-bottom: 8px;
      transition: all ${Theme.Base.Transition.Duration}
        ${Theme.Base.Transition.CssEase};
    }

    .label {
      font-size: 0.7rem;
      line-height: 1.3;
      display: block;
      text-align: center;
      max-height: 100px;
      overflow: hidden;
      opacity: 1;
      transition: all ${Theme.Base.Transition.Duration}
        ${Theme.Base.Transition.CssEase};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      transform: scaleX(0);
      opacity: 0;
      height: 3px;
      background-color: ${Theme.Color.Black};
      transition: all ${Theme.Base.Transition.Duration}
        ${Theme.Base.Transition.CssEase};
    }

    &.active {
      color: ${Theme.Color.Black};
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 1;
        transform: scaleX(1);
        height: 3px;
        background-color: ${Theme.Color.Black};
      }
    }

    &:hover {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.1);
      color: ${Theme.Color.Black};
    }
  }

  &.focus {
    background-color: ${Theme.Color.Primary};
    overflow: hidden;
    border-radius: ${Root.Radius} ${Root.Radius} 0 0;

    a {
      color: ${Theme.Color.White};

      &:before {
        display: none;
      }

      &:hover,
      &:focus {
        &:before {
          display: none;
        }
      }
    }
  }
`;

export default ItemStyle;

//////////////////////////////////////////////////////////////////////
// End Component
