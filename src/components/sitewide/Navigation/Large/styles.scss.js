// Large Navigation Component Styles:

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
const NavigationStyle = styled.nav`
  position: relative;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

//// Top Level Navigation

// Top Navigation Wrapper
// className: `nav-top`
NavigationStyle.Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  height: ${Root.Nav.Size};
  position: relative;
  font-weight: bold;

  .btn,
  .ico-intercom {
    transition: all 1s ease;
    .btn-inner {
      transition: all 1s ease;
      i {
        transition: all 1s ease;
      }
    }
    svg,
    .ico {
      transition: all 1s ease;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0%;
    background-color: ${Theme.Color.Snow};
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0);
    transform: translateY(-110%);
    transition: all 0.5s ease;
    z-index: -1;
  }

  &.scroll {
    &:before {
      background-color: ${Theme.Color.Snow};
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.09);
      transform: translateY(0%);
    }

    &.nav-top {
      ul {
        li {
          a {
            color: ${Theme.Color.Nightsky};
            &:before {
              background: ${Theme.Color.Nightsky};
            }
          }
        }
      }

      .btn {
        transition: all 1s ease;
        .btn-inner {
          transition: all 1s ease;
          background-color: ${Theme.Color.Primary};
          color: ${Theme.Color.White};

          .ico {
            i {
              color: ${Theme.Color.White};
            }
          }
        }
      }

      .ico-intercom {
        background-color: ${Theme.Color.Nightsky};
        transition: all 1s ease;

        svg {
          transition: all 1s ease;
          fill: ${Theme.Color.White};
        }
      }
    }
  }
`;

// The Container around the Logo
NavigationStyle.Top.BrandingBlock = styled.div`
  display: flex;
  width: ${Root.Grid.Gutter.Left};
  flex-direction: row;
  padding: 0 ${Theme.Base.Size.Sm} 0 ${Theme.Base.Size.Sm};
  a {
    height: ${Root.Nav.Size};
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

// The Container around the LinkLists
NavigationStyle.Top.LinkListBlock = styled.div`
  display: flex;
  flex: 1;
  padding: 0;
`;

// The Small Link List Container
NavigationStyle.Top.TopLinkListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${Root.Nav.Size};
  transform: ${props =>
    props.routes.includes(props.location)
      ? 'translateY(50%)'
      : 'translateY(0%)'};
  opacity: ${props => (props.routes.includes(props.location) ? '0' : '1')};
  pointer-events: ${props =>
    props.routes.includes(props.location) ? 'none' : 'auto'};
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      height: 100%;
      padding-right: ${Root.Grid.Gutter.Right};
      ${FadeIn};

      a {
        color: ${Theme.Color.Slate};
        text-decoration: none;
        transition: all ${Theme.Base.Transition.Duration}
          ${Theme.Base.Transition.CssEase};
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 0%);
          width: 5px;
          height: 5px;
          background: ${Theme.Color.Nightsky};
          border-radius: 50%;
          opacity: 0;
          transition: all 0.25s ${Theme.Base.Transition.CssEase};
        }

        &.active {
          color: rgba(0, 0, 0, 1);
        }

        &:hover {
          color: ${Theme.Color.Nightsky};
          text-decoration: none;
          &:before {
            opacity: 1;
            transform: translate(-50%, -300%);
          }
        }
      }
    }
  }
`;

// The Container around the Communication Tools,
// like Intercom and the Get in Touch Button
NavigationStyle.Top.CommunicationBlock = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  padding: ${Theme.Base.Size.Sm};
  align-items: center;

  .ico-intercom {
    display: inline-flex;
    align-items: center;
    margin-right: calc(${Root.Size} / 4);
    height: ${Root.Button.Size};
    width: ${Root.Button.Size};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px rgba(${Theme.Color.Nightysky}, 0);
    &:hover {
      text-decoration: none;
      box-shadow: 0px 0px 0px 6px rgba(93, 99, 118, 0.2);
    }
    svg {
      width: calc(${Root.Button.Size} * 0.5);
      height: calc(${Root.Button.Size} * 0.5);
    }
  }
`;

//// Bottom Level Navigation

// The Large Link List Container
// className: `nav-sub`
NavigationStyle.Bottom = styled.div`
  width: 100%;
  padding: 0 ${Theme.Base.Size.Sm} 0 ${Root.Grid.Gutter.Left};
  opacity: ${props => (props.routes.includes(props.location) ? '1' : '0')};
  pointer-events: ${props =>
    props.routes.includes(props.location) ? 'auto' : 'none'};
  transition: opacity ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
`;

// The Sublevel Link List
NavigationStyle.Bottom.LinkListWrapper = styled.div`
  height: ${Root.Nav.Size};
  transform: ${props =>
    props.routes.includes(props.location)
      ? 'translateY(0%)'
      : 'translateY(50%)'};
  max-height: ${props =>
    props.routes.includes(props.location) ? Root.Nav.Size : '0px'};
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 2vw;

    li {
      padding-right: ${Root.Size};
      ${FadeIn};

      a {
        color: rgba(0, 0, 0, 0.2);
        text-decoration: none;
        transition: all ${Theme.Base.Transition.Duration}
          ${Theme.Base.Transition.CssEase};

        &.active {
          color: rgba(0, 0, 0, 1);
        }

        &:hover {
          color: rgba(0, 0, 0, 1);
          text-decoration: none;
        }
      }
    }
  }
`;

export default NavigationStyle;

//////////////////////////////////////////////////////////////////////
// End Component
