// <Block> Component:
// This is the sitewide column style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import BlockStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Block = ({ children, className, Style, Width, Top, Bottom }) => (
  <BlockStyle
    className={className ? className + ' block' : 'block'}
    Width={Width}
    Style={Style}
    Top={Top}
    Bottom={Bottom}
  >
    {children}
  </BlockStyle>
);

export default Block;

//////////////////////////////////////////////////////////////////////
// End Component
