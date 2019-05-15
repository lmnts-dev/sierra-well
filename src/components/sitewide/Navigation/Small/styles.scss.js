// Small Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { MenuContainerMobileHeight } from 'components/library/OrderMenu/styles.scss';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
export const BottomNavigationStyle = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.Color.Snow};
  border-radius: ${Root.Radius};
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 700;
  transform: translateY(0);
  transition: all 0.55s ease;

  &.scroll {
    i {
      margin-top: 8px;
      margin-bottom: 0;
    }
    .label {
      max-height: 0px;
      opacity: 0;
    }
  }
`;

BottomNavigationStyle.Inner = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: ${Root.Nav.Size};
  position: relative;
  transition: all 0.55s ease;
`;

BottomNavigationStyle.List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  list-style-type: none;
  appearance: none;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;

  /* Individual Item styles in ./Item/styles.scss */
`;

// Top Navigation

export const TopNavigationStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: visible;
  z-index: 700;
  display: flex;
  flex-direction: column;
`;

TopNavigationStyle.Inner = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border-radius: ${Root.Radius};
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

TopNavigationStyle.Tools = styled.div`
  height: ${Root.Nav.Size};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    li {
      display: flex;
      align-items: center;
      margin-right: 5px;
      cursor: pointer;

      span {
        width: ${Theme.Base.Size.Md};
        height: ${Theme.Base.Size.Md};
        background: ${Theme.Color.Black};
        color: ${Theme.Color.White};
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      &.menu {
        span {
          background: rgba(0, 0, 0, 0);
          transition: all 1s ${Theme.Base.Transition.CssEase};

          figure {
            padding: 0;
            margin: 0;
            position: relative;

            &:before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 5px;
              height: 1px;
              width: 30px;
              background: ${Theme.Color.Gunmetal};
            }

            &:after {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: -5px;
              height: 1px;
              width: 30px;
              background: ${Theme.Color.Gunmetal};
            }
          }
        }

        &:hover {
          span {
            background: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
`;

TopNavigationStyle.Branding = styled.div`
  padding: 10px;
  height: ${Root.Nav.Size};
  /* flex: 1; */
  display: flex;
  justify-content: space-between;
  width: auto;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
