// SubLevelPage.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import SubLevelPageStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The SubLevel Page Itself
const SubLevelPage = ({ children, BgColor }) => (
  <SubLevelPageStyle BgColor={BgColor}>
    <SubLevelPageStyle.Inner>{children}</SubLevelPageStyle.Inner>
  </SubLevelPageStyle>
);

export default SubLevelPage;
