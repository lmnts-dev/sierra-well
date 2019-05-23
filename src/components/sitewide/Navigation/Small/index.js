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
import { OrderMenuMobile } from './../../../library/OrderMenu';
import Brandmark from 'components/core/Branding/Brandmark';
import HamburgerOverlayToggle from 'components/library/ContentOverlay/Hamburger';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Large Device Navigation
class NavigationSmall extends PureComponent {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      scrollClass: 'top',
    };

    // Bind base functions to change transition state for
    // collapsing menu hero.
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Make sure we are listening for scroll once mounted.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove listener when not mounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Base functions to change transition state for
  // navigation on scroll
  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrollClass === 'scroll') {
      this.setState({ scrollClass: 'top' });
    } else if (window.scrollY !== 0 && this.state.scrollClass !== 'scroll') {
      this.setState({ scrollClass: 'scroll' });
    }
  }

  render() {
    const { location } = this.props;

    return (
      <>
        {/* Top Navigation */}
        <TopNavigationStyle
          className={'nav-top nav-top-mobile ' + this.state.scrollClass}
        >
          <TopNavigationStyle.Inner
            className={'nav-top-mobile-inner ' + this.state.scrollClass}
          >
            <TopNavigationStyle.Branding>
              <HamburgerOverlayToggle>
                <figure />
                <figure />
                <figure />
              </HamburgerOverlayToggle>
              <Link to="/">
                <Brandmark />
              </Link>
            </TopNavigationStyle.Branding>
            <TopNavigationStyle.Tools>
              <ul>
                <li>
                  <span className="menu-tool">
                    <i className="fas fa-comment-alt" />
                  </span>
                </li>
                <li>
                  <span className="menu-tool">
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
        <BottomNavigationStyle
          className={'nav-mobile ' + this.state.scrollClass}
        >
          <BottomNavigationStyle.Inner>
            <BottomNavigationStyle.List>
              <Item
                Label="Locations"
                Class="i"
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
                Label="Order"
                Class="focus"
                Destination="/menu"
                Icon="plus"
              />
              <Item
                Label="Company"
                Class="i"
                Destination="/company"
                Icon="theater-masks"
              />
              <Item
                Label="Q&A"
                Class="i"
                Destination="/learn"
                Icon="question"
              />
            </BottomNavigationStyle.List>
            {/* <OrderMenuMobile /> */}
          </BottomNavigationStyle.Inner>
        </BottomNavigationStyle>
      </>
    );
  }
}

export default NavigationSmall;

//////////////////////////////////////////////////////////////////////
// End Component
