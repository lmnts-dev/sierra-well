// StickyScrollSection Component:
// Desired outcome: https://www.dropbox.com/s/brll80qg306ywmk/Screenshot%202019-05-06%2015.01.12.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Components
import ImgMatch from 'components/core/ImgMatch';
import Block from 'components/library/Block';

// Constants
import { Theme, Root } from 'constants/Theme';
import { SectionContent } from './../../Section';

// Styles
import StickyScrollSectionStyle from './styles.scss';
import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Enable Overflows
export const ReleaseOverflow = createGlobalStyle`
  html, body {
    overflow: visible;
  }

  .wrapper {
    overflow: visible;
  }
`;

// Render Element
const StickyScrollSection = ({
  BgColor,
  Style,
  TextColor,
  Content,
  Gallery,
  Gutter,
  children,
}) => (
  <StickyScrollSectionStyle
    Style={Style}
    BgColor={BgColor}
    TextColor={TextColor}
  >
    <ReleaseOverflow />
    <StickyScrollSectionStyle.Inner Gutter={Gutter}>
      <StickyScrollSectionStyle.Content className="sticky-section">
        <Block Padding={[0, 1, 0, 1]} className="sticky-block">
          <span class="txt-caption">{Content.Subheadline}</span>
          <h2>{Content.Headline}</h2>
          <p class="p-md">{Content.Body}</p>
        </Block>
        <Block Padding={[0, 1, 0, 1]}>
          {Gallery
            ? Gallery.map((Img, index) => {
                return (
                  <div className="gallery-img">
                    <ImgMatch src={Img.Src} AltText={Img.Alt} />
                  </div>
                );
              })
            : null}
        </Block>
      </StickyScrollSectionStyle.Content>
    </StickyScrollSectionStyle.Inner>
  </StickyScrollSectionStyle>
);

export default StickyScrollSection;

//////////////////////////////////////////////////////////////////////
// End Component
