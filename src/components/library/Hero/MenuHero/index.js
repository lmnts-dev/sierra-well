// MenuHero Component:
// This is the specialize hero for the Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styles
import MenuHeroStyle from './styles.scss';

// Components
import { HeroInnerStyle } from './../../Hero/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Base transition styles for collapsing MenuHero
const HeroInnerTransition = styled(HeroInnerStyle)`
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom : 'calc(' + Root.Size + '* 2)'};
  padding-top: ${props =>
    props.paddingTop ? props.paddingTop : 'calc(' + Root.Size + '* 2)'};
  max-height: ${props => (props.maxHeight ? props.maxHeight : '100vh')};
  opacity: ${props => (props.opacity ? props.opacity : '1')};
  overflow: hidden;
  transition: all 0.25s ease;
`;

// The styles for our button to collapse the hero
// to show a larger menu.
const CollapseButtonStyle = styled.button`
  border: 0;
  outline: 0;
  background: ${Theme.Color.White};
  align-self: stretch;
  color: ${Theme.Color.Primary};
  font-weight: bold;
  width: calc(${Root.Size} * 3.5);
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;

  span {
    margin-left: 10px;
  }
  i {
    transform: scale(1);
    transform-origin: center center;
    transition: all 0.25s ease;
  }

  &:hover {
    i {
      transform: scale(1.1);
    }
  }
`;

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
    return (
      <MenuHeroStyle>
        <HeroInnerTransition
          height={this.state.height}
          paddingTop={this.state.paddingTop}
          paddingBottom={this.state.paddingBottom}
          maxHeight={this.state.maxHeight}
          opacity={this.state.opacity}
        >
          <MenuHeroStyle.LocationSwitch>
            <span>Show me</span>

            <Link activeClassName="active" to="/menu">
              Reno
            </Link>

            <Link activeClassName="active" to="/menu/carson">
              Carson
            </Link>
          </MenuHeroStyle.LocationSwitch>
          <h1>Order Cannabis Online near Reno, Nevada.</h1>
        </HeroInnerTransition>
        <MenuHeroStyle.Tools>
          <MenuHeroStyle.ToolsInner>
            <div
              onClick={this.collapseHero.bind(this)}
              // These are eslint errors for accessibility below.
              onKeyPress={this.collapseHero.bind(this)}
              role="button"
              tabIndex="0"
            >
              <CollapseButton collapsedState={this.state.collapsed} />
            </div>
          </MenuHeroStyle.ToolsInner>
        </MenuHeroStyle.Tools>
      </MenuHeroStyle>
    );
  }
}

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
