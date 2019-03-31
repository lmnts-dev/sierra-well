// Small Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { MenuContainerHeight } from 'components/sitewide/Navigation/Small/MenuContainer/styles.scss';

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
  background-color: ${Theme.Color.White};
  border-radius: ${Root.Radius} ${Root.Radius} 0 0;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 700;
  transform: translateY(0);
  transition: all ${Theme.Base.Transition.Duration} ease;
`;

BottomNavigationStyle.Inner = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: ${Root.Nav.Size};
  position: relative;
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
          transition: all ${Theme.Base.Transition.Duration}
            ${Theme.Base.Transition.CssEase};

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
