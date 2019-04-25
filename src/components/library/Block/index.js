// <Block> Component:
// This is the sitewide block style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgQuery from 'components/core/ImgQuery';

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
  Padding,
  AlignItems,
  BgQuery,
  BgAlt,
  BgTint,
  BgColor,
  TextColor,
}) => (
  <BlockStyle
    className={className ? className + ' block' : 'block'}
    Width={Width}
    maxWidth={maxWidth}
    Style={Style}
    Padding={Padding}
    AlignItems={AlignItems ? AlignItems : false}
    BgTint={BgTint}
    BgColor={BgColor}
    TextColor={TextColor}
  >
    {/* Block Content */}
    {children ? <div className="block-content">{children}</div> : null}

    {/* For Background Images */}
    {BgQuery ? (
      <div className="block-img-wrap">
        <div className="block-img">
          <ImgQuery query={BgQuery} alt={BgAlt} />
        </div>
      </div>
    ) : null}
  </BlockStyle>
);

export default Block;

//////////////////////////////////////////////////////////////////////
// End Component
