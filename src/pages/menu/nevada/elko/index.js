// menu/:
// The default menu.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Constants
import MenuTemplate from 'templates/Menu';

// Data
import { MenuData } from 'data/menu';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const DefaultMenu = ({ data }) => (
  <MenuTemplate State={MenuData.State[0]} City={MenuData.State[0].City[3]} />
);

export default DefaultMenu;

//////////////////////////////////////////////////////////////////////
// End Component
