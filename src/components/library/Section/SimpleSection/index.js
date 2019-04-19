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

// Styles
import SimpleSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleSection = ({ BgColor, TextColor, children }) => (
  <SimpleSectionStyle BgColor={BgColor} TextColor={TextColor}>
    <SimpleSectionStyle.Inner>
      {children}
    </SimpleSectionStyle.Inner>
  </SimpleSectionStyle>
);

export default SimpleSection;

//////////////////////////////////////////////////////////////////////
// End Component
