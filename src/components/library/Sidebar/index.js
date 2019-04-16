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

// Components
import SidebarWidget from 'components/library/Widgets/Sidebar/Default';

// Styles
import SidebarStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The SubLevel Page Itself
const Sidebar = ({
  children,
  BgColor,
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
}) => (
  <SidebarStyle>
    <SidebarStyle.Inner>
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Locations"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="rocket"
        Destination="/"
      />
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Culture"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="rocket"
        Destination="/culture"
      />
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Contact"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="rocket"
        Destination="/contact"
      />
    </SidebarStyle.Inner>
  </SidebarStyle>
);

export default Sidebar;