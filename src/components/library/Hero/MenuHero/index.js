// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styles
import {
  MenuHeroStyle,
  CollapseButtonStyle,
  HeroInnerTransition,
  SidebarLocationStyle,
} from './styles.scss';

// Components
import MenuHeroPromotions from './MenuHeroPromotions';
import Block from 'components/library/Block';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Our list of locations in relation to the State.
class LocationList extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  // Render
  render() {
    const Cities = this.props.State.City;
    const State = this.props.State;

    return (
      <>
        {Cities.map((City, index) => (
          <Link
            activeClassName="active"
            to={'/_menu/' + State.Slug + '/' + City.Slug}
            key={index}
          >
            {City.Name}
          </Link>
        ))}
      </>
    );
  }
}

// Sidebar location switching
const SidebarLocation = ({ collapsedState, State }) => (
  <SidebarLocationStyle collapsedState={collapsedState}>
    <LocationList State={State} />
  </SidebarLocationStyle>
);

// Our button to collapse the hero to show a larger menu.
class CollapseButton extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // If the menu isn't collapsed...
    if (this.props.collapsedState == false) {
      return (
        <CollapseButtonStyle>
          <i className="fas fa-expand" />
          <span>Fullscreen Menu</span>
        </CollapseButtonStyle>
      );
    }

    // If the menu is collapsed...
    else {
      return (
        <CollapseButtonStyle>
          <i className="fas fa-compress" />
          <span>Collapse Menu</span>
        </CollapseButtonStyle>
      );
    }
  }
}

// MenuHero Component & Logic
class MenuHero extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // Base styles to change transition state for
    // collapsing menu hero.
    this.state = {
      maxHeight: '100vh',
      paddingTop: 'calc(' + Root.Size + '* 2)',
      paddingBottom: 'calc(' + Root.Size + '* 2)',
      opacity: '1',
      collapsed: false,
    };

    // Bind base functions to change transition state for
    // collapsing menu hero.
    this.collapseHero = this.collapseHero.bind(this);
  }

  // Base functions to change transition state for
  // collapsing menu hero.
  collapseHero() {
    // If currently expanded...
    if (this.state.collapsed == false) {
      this.setState({
        maxHeight: '0vh',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: '0',
        collapsed: true,
      });
    }

    // If currently collapsed...
    else {
      this.setState({
        maxHeight: '100vh',
        paddingTop: 'calc(' + Root.Size + '* 2)',
        paddingBottom: 'calc(' + Root.Size + '* 2)',
        opacity: '1',
        collapsed: false,
      });
    }
  }

  // Render element.
  render() {
    const City = this.props.City;
    const State = this.props.State;

    return (
      <MenuHeroStyle>
        <SidebarLocation State={State} collapsedState={this.state.collapsed} />
        <HeroInnerTransition
          height={this.state.height}
          paddingTop={this.state.paddingTop}
          paddingBottom={this.state.paddingBottom}
          maxHeight={this.state.maxHeight}
          opacity={this.state.opacity}
        >
          <Block AlignItems="flex-start" Width={1} maxWidth={0.75}>
            <MenuHeroStyle.LocationSwitch>
              <span>Show me</span>

              <LocationList State={State} />
            </MenuHeroStyle.LocationSwitch>
            <h1 className="h2">
              Order Cannabis Online from our {City.Name}, {City.State} Store
              near Spanish Springs, Nevada.
            </h1>
          </Block>
        </HeroInnerTransition>
        <MenuHeroStyle.Tools>
          <MenuHeroStyle.ToolsInner>
            <div
              onClick={this.collapseHero.bind(this)}
              // These are eslint errors for accessibility below.
              onKeyPress={this.collapseHero.bind(this)}
              role="button"
              tabIndex="0"
              className="collapse-button"
            >
              <CollapseButton collapsedState={this.state.collapsed} />
            </div>
            <MenuHeroPromotions />
          </MenuHeroStyle.ToolsInner>
        </MenuHeroStyle.Tools>
      </MenuHeroStyle>
    );
  }
}

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
