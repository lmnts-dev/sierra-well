// HomeHero Component:
// This is the specialize hero for the Home page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Components
import HomeHeroMobile from './Mobile';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HomeHero = ({ LocationData, NearbySlug, NearbyName, OrderContext }) => (
  <>
    <HomeHeroMobile LocationData={LocationData} />
  </>
);

export default HomeHero;

//////////////////////////////////////////////////////////////////////
// End Component