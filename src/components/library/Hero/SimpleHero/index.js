// SimpleHero Component:
// This is a basic hero component for a hero
// and a background image.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Helpers
import { HeroInner } from './../../Hero';

// Styles
import SimpleHeroStyle from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SimpleHero = ({
  Background,
  imgRight,
  imgLeft,
  imgBottom,
  imgTop,
  imgWidth,
  TextColor,
  Size,
  children,
}) => (
  <SimpleHeroStyle Background={Background} TextColor={TextColor}>
    <HeroInner
      Size={Size ? Size : false}
      imgRight={imgRight ? imgRight : false}
      imgLeft={imgLeft ? imgLeft : false}
      imgBottom={imgBottom ? imgBottom : false}
      imgTop={imgTop ? imgTop : false}
      imgWidth={imgWidth ? imgWidth : false}
    >
      {children}
    </HeroInner>
  </SimpleHeroStyle>
);

export default SimpleHero;

//////////////////////////////////////////////////////////////////////
// End Component
