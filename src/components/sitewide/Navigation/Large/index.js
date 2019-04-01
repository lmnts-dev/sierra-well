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
const NavigationLarge = ({ Location, Routes }) => (
  <NavigationStyle>
    <NavigationStyle.Top className="nav-top">
      <NavigationStyle.Top.BrandingBlock>
        <Link to="/">
          <img src={logo} alt={Theme.Site.Title} height="30px" />
        </Link>
      </NavigationStyle.Top.BrandingBlock>

      <NavigationStyle.Top.LinkListBlock>
        <NavigationStyle.Top.TopLinkListWrapper
          location={Location}
          routes={Routes}
        >
          <LinkList ActiveClass="active" />
        </NavigationStyle.Top.TopLinkListWrapper>
      </NavigationStyle.Top.LinkListBlock>

      <NavigationStyle.Top.CommunicationBlock>
        <Button Label="Get in Touch" To="/contact" Color="nightsky" />
      </NavigationStyle.Top.CommunicationBlock>
    </NavigationStyle.Top>

    <NavigationStyle.Bottom
      location={Location}
      routes={Routes}
      className="nav-bottom"
    >
      <NavigationStyle.Bottom.LinkListWrapper
        location={Location}
        routes={Routes}
      >
        <LinkList ActiveClass="active" />
      </NavigationStyle.Bottom.LinkListWrapper>
    </NavigationStyle.Bottom>
  </NavigationStyle>
);

export default NavigationLarge;

//////////////////////////////////////////////////////////////////////
// End Component
