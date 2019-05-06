// Sidebar.js:
// This is the sitewide sidebar component.

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
        BgColor={Theme.Color.Primary}
        BgImage="none"
        Headline="Delivery Available"
        TextColor={Theme.Color.White}
        IconColor={Theme.Color.White}
        IconName="car"
        Destination="/menu/delivery/nevada/reno/"
      />
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Reserve Spot"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="users"
        Destination="/menu/pick-up/nevada/reno/"
      />
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Visit"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="map-marker-alt"
        Destination="/"
      />
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Chat"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="comment-alt"
        Destination="/culture"
      />
      <SidebarWidget
        BgColor={SecondaryColor}
        BgImage="none"
        Headline="Phone"
        TextColor={TertiaryColor}
        IconColor={TertiaryColor}
        IconName="phone"
        Destination="/contact"
      />
    </SidebarStyle.Inner>
  </SidebarStyle>
);

export default Sidebar;
