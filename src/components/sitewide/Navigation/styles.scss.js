// Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { easeIn } from '@popmotion/easing';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
const NavigationStyle = styled.nav`
  position: relative;
`;

//// Top Level Navigation

NavigationStyle.Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 800;
  height: ${Root.Nav.Size};
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
  opacity: ${props => (props.location != '/subpage' ? '0' : '1')};
  transition: opacity 0.5s ease;

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

      a {
        color: ${Theme.Color.Slate};
        text-decoration: none;
        transition: all 0.25s ease;
        display: flex;
        align-items: center;
        height: 100%;

        &:hover {
          color: ${Theme.Color.Nightsky};
          text-decoration: none;
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
`;

//// Bottom Level Navigation

// The Large Link List Container

NavigationStyle.Bottom = styled.div`
  width: 100%;
  padding: 0 ${Theme.Base.Size.Sm} 0 ${Root.Grid.Gutter.Left};
  opacity: ${props => (props.location == '/subpage' ? '0' : '1')};
  transition: opacity .5s ease;
`;

NavigationStyle.Bottom.LinkListWrapper = styled.div`
  height: ${Root.Nav.Size};

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 2vw;

    li {
      padding-right: ${Root.Size};

      a {
        color: rgba(0, 0, 0, 0.2);
        text-decoration: none;
        transition: all 0.25s ease;

        &:hover {
          color: rgba(0, 0, 0, 1);
          text-decoration: none;
        }
      }
    }
  }
`;

export const ActiveTab = {
  color: 'rgba(0,0,0, 1)',
};

export default NavigationStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
