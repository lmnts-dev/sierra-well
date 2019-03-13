// Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks
import InnerStyle from 'elements/Inner/styles.scss';
import BlockStyle from 'elements/Block/styles.scss';
import Section from 'elements/Section';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const NavigationStyle = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  ${Theme.Base.Grid.Nav.Fixed
    ? `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 800;
  `
    : `
  position: relative;
  `};
`;

NavigationStyle.Inner = styled(InnerStyle)`
  background-color: ${Theme.Color.Primary};
  height: ${Theme.Base.Grid.Nav.Size.Lg};
  color: ${Theme.Color.Black};
`;

NavigationStyle.Block = styled(BlockStyle)`
  align-items: center;
  ul {
    display: flex;
    li {
      padding: 0 ${Base.Size / 4 + 'px'};
      &:last-child {
        padding: 0 0 0 ${Base.Size / 4 + 'px'};
      }
    }
    a {
      color: ${Theme.Color.Black};
    }
  }
`;

NavigationStyle.Section = Section;

export default NavigationStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
