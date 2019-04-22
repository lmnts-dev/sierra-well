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

const Block = ({
  children,
  className,
  Style,
  maxWidth,
  Width,
  Top,
  Bottom,
  AlignItems,
}) => (
  <BlockStyle
    className={className ? className + ' block' : 'block'}
    Width={Width}
    maxWidth={maxWidth}
    Style={Style}
    Top={Top}
    Bottom={Bottom}
    AlignItems={AlignItems ? AlignItems : false}
  >
    {children}
  </BlockStyle>
);

export default Block;

//////////////////////////////////////////////////////////////////////
// End Component
