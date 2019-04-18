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
      collapseLabel: 'Collapse',
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
        collapseLabel: 'Expand',
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
        collapseLabel: 'Collapse',
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
            <button onClick={this.collapseHero.bind(this)}>
              {this.state.collapseLabel}
            </button>
          </MenuHeroStyle.ToolsInner>
        </MenuHeroStyle.Tools>
      </MenuHeroStyle>
    );
  }
}

export default MenuHero;

//////////////////////////////////////////////////////////////////////
// End Component
