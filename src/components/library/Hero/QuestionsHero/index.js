// LocationsHero Component:
// This is the specialize hero for the Home page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Device from 'components/core/DeviceQuery';

// Components
import QuestionsHeroMobile from './Mobile';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationsHero = ({
  LocationData,
  NearbySlug,
  NearbyName,
  OrderContext,
}) => (
  <>
    <QuestionsHeroMobile LocationData={LocationData} />
  </>
);

export default LocationsHero;

//////////////////////////////////////////////////////////////////////
// End Component
