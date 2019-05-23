// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Extended Styles
import { HeroInnerStyle } from './../../Hero/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MenuHeroStyle = styled.div`
  width: 100%;
  margin: ${Root.Nav.Size} 0 0 0;

  h1 {
    padding-top: calc(${Root.Size} / 5);
    a {
      text-decoration: none;
      color: ${Theme.Color.Primary};
      &:hover {
        text-decoration: none;
      }
    }
  }

  .btn {
    position: relative;
    margin-right: calc(${Root.Size} / 4);

    .btn-inner {
      font-size: 1.2rem;
    }

    &.btn-address {
      .btn-inner {
        opacity: 0.6;
      }
    }
  }

  .suggestion-list {
    .btn {
      margin-right: 0;
    }
    ul {
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-left: ${Root.Grid.Gutter.Left};
      }
    }
  }

  .award-hours {
    flex: 0.5;
  }
`;

MenuHeroStyle.LocationSwitch = styled.div`
  font-size: 1.2rem;
  display: block;
  width: 100%;
  max-width: 100%;
  word-wrap: none;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: visible;
  touch-action: pan-x;
  -webkit-backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
  height: calc(${Root.Size} * 2);

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding-left: ${Root.Grid.Gutter.Left};
  }

  span {
    opacity: 0.3;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-right: calc(${Root.Size} / 4);
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

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

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      background-color: ${hexToRGB(Theme.Color.White, 0.05)};
      padding: calc(${Root.Size} / 1.5);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      line-height: 0;
      border-radius: 999px;
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
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  background: ${Theme.Color.Primary};
  border-radius: ${Root.Radius} 0 0 0;
  overflow: hidden;

  .collapse-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: none;
  }
`;

///////////////////////////////////////////////////////

// Base transition styles for collapsing MenuHero
export const HeroInnerTransition = styled(HeroInnerStyle)`
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom : 'calc(' + Root.Size + '/ 6)'};
  padding-top: ${props =>
    props.paddingTop ? props.paddingTop : 'calc(' + Root.Size + '* 1.5)'};
  max-height: ${props => (props.maxHeight ? props.maxHeight : '100vh')};
  opacity: ${props => (props.opacity ? props.opacity : '1')};
  overflow: hidden;
  transition: all 0.25s ease;

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding-left: 0;
  }
`;

///////////////////////////////////////////////////////

// The styles for our button to collapse the hero
// to show a larger menu.
export const CollapseButtonStyle = styled.button`
  border: 0;
  outline: 0;
  background: ${Theme.Color.Primary};
  align-self: stretch;
  color: ${Theme.Color.White};
  font-weight: bold;
  width: calc(${Root.Size});
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
