// <Block> Component:
// This is the sitewide block style of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';

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
  JustifyContent,
  Flex,
}) => (
  <BlockStyle
    className={className ? className + ' block' : 'block'}
    Width={Width}
    maxWidth={maxWidth}
    Style={Style}
    Padding={Padding}
    AlignItems={AlignItems ? AlignItems : false}
    JustifyContent={JustifyContent ? JustifyContent : false}
    BgTint={BgTint}
    BgColor={BgColor}
    TextColor={TextColor}
    Flex={Flex}
  >
    {/* Block Content */}
    {children ? <div className="block-content">{children}</div> : null}

    {/* For Background Images */}
    {BgQuery ? (
      <div className="block-img-wrap">
        <div className="block-img">
          <ImgMatch src={BgQuery} AltText={BgAlt} />
        </div>
      </div>
    ) : null}
  </BlockStyle>
);

export default Block;

//////////////////////////////////////////////////////////////////////
// End Component
