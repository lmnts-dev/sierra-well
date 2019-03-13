// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Vendor
// import Img from 'gatsby-image';

// Styles
import NavigationStyle from 'components/sitewide/Navigation/styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Navigation = () => (
  <NavigationStyle>
    <NavigationStyle.Inner>
      <NavigationStyle.Section
        AlignItems="center"
        JustifyContent="space-between"
      >
        <NavigationStyle.Block>
          <Link to={Theme.Site.BaseUrl}>
            <img
              src="https://cdn.dribbble.com/users/1826170/avatars/normal/56c47446d104c3768bbd90d907b1f238.jpg?1518642823"
              alt={Theme.Site.Title}
              height="30px"
            />
          </Link>
        </NavigationStyle.Block>
        <NavigationStyle.Block>
          <ul>
            <Link to="/work">
              <li>Work</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </NavigationStyle.Block>
      </NavigationStyle.Section>
    </NavigationStyle.Inner>
  </NavigationStyle>
);

export default Navigation;

//////////////////////////////////////////////////////////////////////
// End Component
