// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import MenuHeroStyle from './styles.scss';

// Components
// import Icon from 'elements/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MenuHero = ({}) => (
  <MenuHeroStyle>
    <MenuHeroStyle.Inner>
      <MenuHeroStyle.LocationSwitch>
        <span>Show me</span>

        <Link activeClassName="active" to="/menu">
          Reno
        </Link>

        <Link activeClassName="active" to="/menu/carson">
          Carson
        </Link>
      </MenuHeroStyle.LocationSwitch>
      <h1>Order Cannabis Online near Reno, Nevada.</h1>
    </MenuHeroStyle.Inner>
  </MenuHeroStyle>
);

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
