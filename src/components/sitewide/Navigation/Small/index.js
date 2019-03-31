// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Vendor
// import Img from 'gatsby-image';

// Styles
import { BottomNavigationStyle, TopNavigationStyle } from './styles.scss';

// Components
import Item from './Item';
import MenuContainer from './MenuContainer';

// Constants
import { Theme } from 'constants/Theme';
import logo from '../../../../assets/images/brandmark.png';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Large Device Navigation
class NavigationSmall extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      <>
        {/* Top Navigation */}
        <TopNavigationStyle>
          <TopNavigationStyle.Inner>
            <TopNavigationStyle.Branding>
              <Link to="/">
                <img src={logo} alt={Theme.Site.Title} />
              </Link>
            </TopNavigationStyle.Branding>
            <TopNavigationStyle.Tools>
              <ul>
                <li>
                  <span>
                    <i className="fas fa-comment-alt" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-phone" />
                  </span>
                </li>
                <li className="menu">
                  <span>
                    <figure />
                  </span>
                </li>
              </ul>
            </TopNavigationStyle.Tools>
          </TopNavigationStyle.Inner>
        </TopNavigationStyle>

        {/* Bottom Navigation */}
        <BottomNavigationStyle className="nav-mobile">
          <BottomNavigationStyle.Inner>
            <BottomNavigationStyle.List>
              <Item
                Label="Menu"
                Class="focus"
                Destination="/menu"
                Icon="plus"
              />
              <Item
                Label="Locations"
                Class="i active"
                Destination="/locations"
                Icon="map-marker-alt"
              />
              <Item
                Label="Specials"
                Class="i"
                Destination="/specials"
                Icon="star"
              />
              <Item
                Label="Culture"
                Class="i"
                Destination="/culture"
                Icon="theater-masks"
              />
              <Item
                Label="Outreach"
                Class="i"
                Destination="/outreach"
                Icon="heart"
              />
            </BottomNavigationStyle.List>
            <MenuContainer />
          </BottomNavigationStyle.Inner>
        </BottomNavigationStyle>
      </>
    );
  }
}

export default NavigationSmall;

//////////////////////////////////////////////////////////////////////
// End Component
