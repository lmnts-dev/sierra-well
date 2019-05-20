// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Components
import MenuHeroDesktop from './Desktop';
import MenuHeroMobile from './Mobile';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MenuHero = ({ LocationData, NearbySlug, NearbyName, OrderContext }) => (
  <>
    <MenuHeroDesktop
      NearbySlug={NearbySlug}
      NearbyName={NearbyName}
      OrderContext={OrderContext}
      LocationData={LocationData}
    />
    <MenuHeroMobile
      NearbySlug={NearbySlug}
      NearbyName={NearbyName}
      OrderContext={OrderContext}
      LocationData={LocationData}
    />
    {console.log('OrderContext from MenuHero:')}
    {console.log(OrderContext)}
  </>
);

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
