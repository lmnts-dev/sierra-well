// Small Navigation Item Component:
// This is an individual item of the
// Small Navigation component.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Vendor
// import Img from 'gatsby-image';

// Styles
import ItemStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Item = ({ Destination, Label, Class, Icon }) => (
  <ItemStyle className={Class}>
    <Link to={Destination}>
      <i className={'fas fa-' + Icon} />
      <span>{Label}</span>
    </Link>
  </ItemStyle>
);

export default Item;

//////////////////////////////////////////////////////////////////////
// End Component
