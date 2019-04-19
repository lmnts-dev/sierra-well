// Widget Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SidebarWidgetStyle = styled.div`
  width: 100%;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: 0;
  margin-top: ${Theme.Base.Size.Sm};
  animation-fill-mode: forwards;
  ${FadeIn};
`;

SidebarWidgetStyle.Inner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.White};
  border-radius: ${Root.Radius};
  box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);
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
    flex: 1;
    width: 100%;
    color: white;
    transform: scale(1.000000001);
    position: relative;
    padding: ${Theme.Base.Size.Sm};
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    text-decoration: none;
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }

  /* The Carat Icon */
  svg {
    position: absolute;
    right: ${Theme.Base.Size.Sm};
    top: ${Theme.Base.Size.Sm};
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    transform: translateX(0%);
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }

  /* Hover Styles */
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
      height: 1.2rem;
      width: 1.2rem;
    }

    /* The Widget Icon */
    .fas {
      color: ${Theme.Color.White};
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
`;

SidebarWidgetStyle.Subhead = styled.div`
  font-size: 1rem;
  line-height: 1.2;
`;

SidebarWidgetStyle.Headline = styled.div`
  font-size: 1.1rem;
  line-height: 1.2;
  font-weight: bold;
`;

SidebarWidgetStyle.Icon = styled.i`
  position: absolute;
  right: ${Theme.Base.Size.Sm};
  top: ${Theme.Base.Size.Sm};
  font-size: 1.2rem;
  transform: scale(1.4);
  transform-origin: top right;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  color: ${props => (props.Color ? props.Color : Theme.Color.Black)};
`;

export default SidebarWidgetStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
