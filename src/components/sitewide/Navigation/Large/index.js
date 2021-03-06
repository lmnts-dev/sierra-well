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
import Btn from 'components/library/Btn/';
import LinkList from 'components/core/LinkList/';
import Brandmark from 'components/core/Branding/Brandmark';
import Icon from 'elements/Icons';
import HamburgerOverlayToggle from 'components/library/ContentOverlay/Hamburger';

// Constants
import { Theme } from 'constants/Theme';
import logo from 'assets/images/brandmark.png';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Large Device Navigation
class NavigationLarge extends React.Component {
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
    const Location = this.props.Location;
    const Routes = this.props.Routes;

    return (
      <NavigationStyle>
        <NavigationStyle.Top className={'nav-top ' + this.state.scrollClass}>
          <NavigationStyle.Top.BrandingBlock>
            <HamburgerOverlayToggle>
              <figure />
              <figure />
              <figure />
            </HamburgerOverlayToggle>
            <Link to="/">
              <Brandmark />
            </Link>
          </NavigationStyle.Top.BrandingBlock>

          <NavigationStyle.Top.LinkListBlock>
            <NavigationStyle.Top.TopLinkListWrapper
              location={Location}
              routes={Routes}
            >
              <LinkList />
            </NavigationStyle.Top.TopLinkListWrapper>
          </NavigationStyle.Top.LinkListBlock>

          <NavigationStyle.Top.CommunicationBlock>
            <Icon Name="intercom" />
            <Btn
              Label="View Our Menu"
              Destination="/menu"
              BgColor={Theme.Color.Primary}
              TextColor={Theme.Color.White}
              IconClass="plus"
              IconFas
              IconPosition="left"
            />
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
            <LinkList ActiveclassName="active" />
          </NavigationStyle.Bottom.LinkListWrapper>
        </NavigationStyle.Bottom>
      </NavigationStyle>
    );
  }
}

export default NavigationLarge;

//////////////////////////////////////////////////////////////////////
// End Component
