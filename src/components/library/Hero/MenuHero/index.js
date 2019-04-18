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
import { HeroInner } from './../../Hero';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MenuHero = ({}) => (
  <MenuHeroStyle>
    <HeroInner>
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
    </HeroInner>
  </MenuHeroStyle>
);

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
