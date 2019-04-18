// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Extended Styles
import { HeroInnerStyle } from './../../Hero/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MenuHeroStyle = styled.div`
  width: 100%;
  margin: 0;
`;

MenuHeroStyle.LocationSwitch = styled.div`
  font-size: 2rem;
  span,
  a {
    margin-right: calc(${Root.Size} / 2);
  }

  a {
    color: ${Theme.Color.White};
    font-weight: bold;

    &:hover {
      color: ${Theme.Color.Primary};
      text-decoration: none;
    }

    &.active {
      color: ${Theme.Color.Primary};
    }
  }
`;

///////////////////////////////////////////////////////

// MenuHero Tools
// For expanding / collapsing button on menu as well
// as promotional deals.
MenuHeroStyle.Tools = styled.div`
  width: 100%;
  padding-left: calc(${Root.Grid.Gutter.Left});
`;

// MenuHero Tools Inner
MenuHeroStyle.ToolsInner = styled.div`
  height: calc(${Root.Nav.Size} * 0.65);
  display: flex;
  align-items: stretch;
  background: ${Theme.Color.Primary};
  border-radius: ${Root.Radius} 0 0 0;
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

///////////////////////////////////////////////////////

// Base transition styles for collapsing MenuHero
export const HeroInnerTransition = styled(HeroInnerStyle)`
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom : 'calc(' + Root.Size + '* 2)'};
  padding-top: ${props =>
    props.paddingTop ? props.paddingTop : 'calc(' + Root.Size + '* 2)'};
  max-height: ${props => (props.maxHeight ? props.maxHeight : '100vh')};
  opacity: ${props => (props.opacity ? props.opacity : '1')};
  overflow: hidden;
  transition: all 0.25s ease;
`;

///////////////////////////////////////////////////////

// The styles for our button to collapse the hero
// to show a larger menu.
export const CollapseButtonStyle = styled.button`
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

///////////////////////////////////////////////////////

// The styles for our sidebar locations once the larger
// menu has been expanded.

export const SidebarLocationStyle = styled.div`
  position: fixed;
  top: ${Root.Nav.Size};
  opacity: ${props => (props.collapsedState == true ? '1' : '0')};
  transition: all 0.25s ease;
  z-index: 800;
  font-weight: bold;
  font-size: 1.2rem;
  padding-left: ${Theme.Base.Size.Sm};

  a {
    display: block;
    color: ${Theme.Color.White};
    margin: ${Theme.Base.Size.Sm} 0;
    padding-right: calc(${Theme.Base.Size.Sm} * 2.25);
    cursor: pointer;
    position: relative;
    
    &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      right: calc(${Theme.Base.Size.Sm} / 2);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border: 1px solid ${Theme.Color.Slate};
      background: ${Theme.Color.Nightsky};
      transition: all 0.25s ease;
    }

    &.active, &:hover {
      color: ${Theme.Color.Primary};
      text-decoration: none;

      &:before {
        background: ${Theme.Color.Primary};
        border: 1px solid ${Theme.Color.Primary};
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
