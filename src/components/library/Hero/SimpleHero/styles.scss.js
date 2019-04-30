// SimpleHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SimpleHeroStyle = styled.div`
  width: 100%;
  margin: 0;
  z-index: 1;
  position: relative;
  /* margin-top: calc(${Root.Nav.Size} * -1); */
  background: ${props => (props.Background ? props.Background : 'none')};
  background-size: cover;
  background-position: center center;
  color: ${props => (props.TextColor ? props.TextColor : 'inherit')};
  align-self: flex-start;
  justify-self: flex-start;
  overflow: hidden;

  /* Background Tint */
  ${props =>
    props.Tint
      ? `
  &.tint {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0,0,0, 0.5);
    }
    .inner {
      z-index: 500;
    }
  }
  `
      : null}

  /* Block Spacing */
  .block {
    &:first-child {
      padding-right: calc(${Root.Size} / 2);
    }
    &:second-child {
      padding-left: calc(${Root.Size} / 2);
    }
  }

  /* Gatsby-image based background images. */
  .section-img {
    position: ${props => (props.FluidHeight ? 'relative' : 'absolute')};
    width: ${props => (props.FluidHeight ? '100%' : 'auto')};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    ${props => (props.BgTint ? 'opacity: ' + props.BgTint + ';' : null)}
    img {
      height: 100%;
    }
  }
`;

export default SimpleHeroStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
