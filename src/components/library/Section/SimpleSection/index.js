// SimpleSection Component:
// This is a basic hero component for a hero
// and a background image.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ImgMatch from 'components/core/ImgMatch';

// Constants
import { Theme, Root } from 'constants/Theme';
import { SectionContent } from './../../Section';

// Styles
import SimpleSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleSection = ({
  BgColor,
  Style,
  TextColor,
  BgMatch,
  BgAlt,
  BgTint,
  FluidHeight,
  Gutter,
  children,
}) => (
  <SimpleSectionStyle Style={Style} BgColor={BgColor} TextColor={TextColor}>
    <SimpleSectionStyle.Inner
      BgTint={BgTint}
      FluidHeight={FluidHeight}
      Gutter={Gutter}
    >
      <SimpleSectionStyle.Content
        FluidHeight={FluidHeight}
        className="simple-section"
      >
        {children}
      </SimpleSectionStyle.Content>
      {BgMatch ? (
        <div className="section-img">
          <ImgMatch src={BgMatch} AltText={BgAlt} />
        </div>
      ) : null}
    </SimpleSectionStyle.Inner>
  </SimpleSectionStyle>
);

export default SimpleSection;

//////////////////////////////////////////////////////////////////////
// End Component
