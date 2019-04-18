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

MenuHeroStyle.Tools = styled.div`
  width: 100%;
  padding-left: calc(${Root.Grid.Gutter.Left});
`;

MenuHeroStyle.ToolsInner = styled.div`
  height: calc(${Root.Nav.Size} * .75);
  display: flex;
  align-items: center;
  background: pink;
  border-radius: ${Root.Radius} 0 0 0;
  overflow: hidden;
`;

export default MenuHeroStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
