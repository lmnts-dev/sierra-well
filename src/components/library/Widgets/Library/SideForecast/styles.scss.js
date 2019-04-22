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
const SideForecastStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.White};
  position: relative;
  overflow: hidden;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  cursor: pointer;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};

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

  /* Tint */

  ${props => {
    if (props.TintColor || props.TintOpacity)
      return (
        `
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          background-color:` +
        props.TintColor +
        `;
          opacity:` +
        props.TintOpacity +
        `;
          transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
        }
    `
      );
  }};

  /* Links */
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    flex: 1;
    width: 100%;
    color: white;
    transform: scale(1.000000001);
    padding: ${Root.ViewWidthPadding};
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    text-decoration: none;
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }

  /* The Carat Icon */
  svg {
    position: absolute;
    right: ${Root.ViewWidthPadding};
    top: ${Root.ViewWidthPadding};
    transform: translateX(0%);
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
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
        transform: translateX(50%);
        fill: ${Theme.Color.White};
      }

      /* The Widget Icon */
      .fas {
        color: ${Theme.Color.White};
        transform: scale(1.3);
      }

      /* Tint */
      ${props => {
        if (props.TintColor || props.TintOpacity)
          return `
        &:before {
          opacity: 1
        }
    `;
      }};
    }
  }
`;

SideForecastStyle.Header = styled.h1`
  position: absolute;
  top: ${Root.ViewWidthPadding};
  left: ${Root.ViewWidthPadding};
  transform: rotate(90deg) translateY(-100%);
  display: flex;
  font-weight: light;
  font-size: calc(${Root.ViewHeightFontSize} * 4);
  justify-content: flex-end;
  transform-origin: top left;
  white-space: nowrap;
  word-break: none;
  pointer-events: none;
  width: auto;
  line-height: 0.8;
`;

SideForecastStyle.Body = styled.div``;

SideForecastStyle.Subhead = styled.div`
  font-size: ${Root.ViewWidthFontSize};
  line-height: 1.2;
`;

SideForecastStyle.Icon = styled.i`
  position: absolute;
  right: ${Root.ViewWidthPadding};
  bottom: ${Root.ViewWidthPadding};
  font-size: ${Root.IconSize};
  transform: scale(1.000000001);
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  color: ${props => (props.Color ? props.Color : Theme.Color.Black)};
`;

export default SideForecastStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
