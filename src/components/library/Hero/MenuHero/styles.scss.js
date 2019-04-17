// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const MenuHeroStyle = styled.div`
  width: 100%;
  margin: 0;
`;

MenuHeroStyle.Inner = styled.div`
  margin: 0;
  padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size});
  padding-right: ${Root.Size};
  padding-top: calc(${Root.Size} * 2);
`;

MenuHeroStyle.LocationSwitch = styled.div`
  font-size: 2rem;
  span,
  a {
    margin-right: calc(${Root.Size} / 2);
  }

  a {
    color: ${Theme.Color.White};
    font-weight: bold;

    &:hover {
      color: ${Theme.Color.Primary};
      text-decoration: none;
    }

    &.active {
      color: ${Theme.Color.Primary};
    }
  }
`;

export default MenuHeroStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
