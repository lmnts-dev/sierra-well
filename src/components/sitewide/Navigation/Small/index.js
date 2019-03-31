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
import NavigationSmallStyle from './styles.scss';

// Components
import Item from './Item';

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
      <NavigationSmallStyle>
        <NavigationSmallStyle.Inner>
          <NavigationSmallStyle.List>
            <Item Label="Menu" Class="focus" Destination="/menu" Icon="plus" />
            <Item Label="Locations" Class="i active" Destination="/locations" Icon="map-marker-alt" />
            <Item Label="Specials" Class="i" Destination="/specials" Icon="star" />
            <Item Label="Culture" Class="i" Destination="/culture" Icon="theater-masks" />
            <Item Label="Outreach" Class="i" Destination="/outreach" Icon="heart" />
          </NavigationSmallStyle.List>
        </NavigationSmallStyle.Inner>
      </NavigationSmallStyle>
    );
  }
}

export default NavigationSmall;

//////////////////////////////////////////////////////////////////////
// End Component
