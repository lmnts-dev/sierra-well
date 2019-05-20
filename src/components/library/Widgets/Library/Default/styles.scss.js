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

/* Widget Content */
const WidgetStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.White};
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  cursor: pointer;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  min-width: 100px
  /* Background Images */

  ${props => {
    if (props.BgImage)
      return (
        `
        background-image: url(` +
        props.BgImage +
        `);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        `
      );
  }};

  /* For when using ImgMatch.js as background image: */
  .img {
    &.gatsby-image-wrapper {
      position: absolute !important;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
    }
  }

  /* Tint */

  ${props => {
    if (props.TintColor || props.TintOpacity)
      return (
        `
        .tint {
          position: absolute;
          margin: 0;
          padding: 0;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 5;
          background-color:` +
        props.TintColor +
        `;
          opacity:` +
        props.TintOpacity +
        `;
          transition: opacity ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
        }
    `
      );
  }};

  /* Links */
  a {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    z-index: 10;
    width: 100%;
    color: white;
    z-index: 5;
    transform: scale(1.000000001);
    position: relative;
    padding: ${Root.ViewWidthPadding};
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    text-decoration: none
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }

  /* The Carat Icon */
  svg {
    position: absolute;
    right: ${Root.ViewWidthPadding};
    top: ${Root.ViewWidthPadding};
    transform: translateX(0%) translateZ(0);
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }

  /* The Widget Icon */

  }

  /* Hover Styles */
  @media (min-width: ${Theme.Base.Media.Width.Md}) {
    &:hover {
      background-color: ${Theme.Color.Black};
      color: ${Theme.Color.White};
      box-shadow: 0 20px 30px 0 rgba(6, 10, 92, 0.21);

      a {
        text-decoration: none;
        color: ${Theme.Color.White};
      }

      /* The Carat Icon */
      svg {
        transform: translateX(50%) translateZ(0);
        fill: ${Theme.Color.White};
      }

      /* The Widget Icon */
      .fas {
        color: ${Theme.Color.White};
        transform: scale(1.3) translateZ(0);
      }

      /* Tint */
      ${props => {
        if (props.TintColor || props.TintOpacity)
          return `
        .tint {
          opacity: 1
        }
    `;
      }};
    }
  }
`;

WidgetStyle.Subhead = styled.div`
  font-size: ${Root.ViewWidthFontSize};
  line-height: 1.2;
  padding-right: 20px;
`;

WidgetStyle.Headline = styled.div`
  font-size: ${Root.ViewWidthFontSize};
  line-height: 1.2;
  font-weight: bold;
  padding-right: 20px;
`;

WidgetStyle.Icon = styled.i`
  position: absolute;
  right: ${Root.ViewWidthPadding};
  bottom: ${Root.ViewWidthPadding};
  font-size: ${Root.IconSize};
  transform: scale(1.000000001);
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  color: ${props => (props.Color ? props.Color : Theme.Color.Black)};
`;

export default WidgetStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
