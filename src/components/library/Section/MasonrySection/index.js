// MasonrySection Component:
// This is a component for a MasonryGrid of Widgets.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ImgQuery from 'components/core/ImgQuery';

// Constants
import { Theme, Root } from 'constants/Theme';
import { SectionContent } from './../../Section';

// Styles
import MasonrySectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MasonrySection = ({
  BgColor,
  Style,
  TextColor,
  BgQuery,
  BgAlt,
  BgTint,
  PaddingY,
  FluidHeight,
  Gutter,
  Columns,
  ColumnGap,
  children,
}) => (
  <MasonrySectionStyle Style={Style} BgColor={BgColor} TextColor={TextColor}>
    <MasonrySectionStyle.Inner
      Size={PaddingY}
      BgTint={BgTint}
      FluidHeight={FluidHeight}
      Gutter={Gutter}
    >
      <MasonrySectionStyle.Content
        FluidHeight={FluidHeight}
        className="masonry-section"
        Columns={Columns}
        ColumnGap={ColumnGap}
      >
        {children}
      </MasonrySectionStyle.Content>
      {BgQuery ? (
        <div className="section-img">
          <ImgQuery query={BgQuery} alt={BgAlt} />
        </div>
      ) : null}
    </MasonrySectionStyle.Inner>
  </MasonrySectionStyle>
);

export default MasonrySection;

//////////////////////////////////////////////////////////////////////
// End Component
