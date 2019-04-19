// SimpleSection Component:
// This is a basic hero component for a hero
// and a background image.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { SectionContent } from './../../Section';

// Styles
import SimpleSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleSection = ({ BgColor, Style, TextColor, children }) => (
  <SimpleSectionStyle
    Style={Style}
    BgColor={BgColor}
    TextColor={TextColor}
  >
    <SimpleSectionStyle.Inner>
      <SimpleSectionStyle.Content className="simple-section">{children}</SimpleSectionStyle.Content>
    </SimpleSectionStyle.Inner>
  </SimpleSectionStyle>
);

export default SimpleSection;

//////////////////////////////////////////////////////////////////////
// End Component
