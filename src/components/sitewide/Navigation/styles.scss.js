// Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
const NavigationStyle = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 800;
  height: ${Root.Nav.Size};
`;

// The Container around the Logo
NavigationStyle.BrandingBlock = styled.div`
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
NavigationStyle.LinkListBlock = styled.div`
  display: flex;
  flex: 1;
  padding: 0;
`;

// The Small Link List Container
NavigationStyle.TopLinkListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${Root.Nav.Size};
  opacity: 1;

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

// The Large Link List Container
// NavigationStyle.TabListWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   height: ${Root.Nav.Size};
//   opacity: 1;ss

//   ul {
//     list-style-type: none;
//     display: flex;
//     font-size: 2vw;

//     li {
//       padding-right: ${Root.Size};

//       a {
//         color: ${Theme.Color.Slate};
//         text-decoration: none;
//         transition: all 0.25s ease;

//         &:hover {
//           color: ${Theme.Color.Nightsky};
//           text-decoration: none;
//         }
//       }
//     }
//   }
// `;

// The Container around the Communication Tools,
// like Intercom and the Get in Touch Button
NavigationStyle.CommunicationBlock = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  padding: ${Theme.Base.Size.Sm};
`;

export const ActiveTab = {
  color: Theme.Color.Nightsky,
  borderBottom: Theme.Color.Nightsky + '2px solid',
};

export default NavigationStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
