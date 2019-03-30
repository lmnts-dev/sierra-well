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
import NavigationStyle from './styles.scss';

// Components
import Button from 'components/library/Button/';
import LinkList from 'components/core/LinkList/';

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
      <div>
        Small Nav
      </div>
    );
  }
}

export default NavigationSmall;

//////////////////////////////////////////////////////////////////////
// End Component
