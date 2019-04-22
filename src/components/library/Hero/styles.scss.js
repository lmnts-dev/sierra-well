// MenuHero Styles:
// These are nearly identical to the Section base styles.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeroInnerStyle = styled.div`
  width: 100%;
  margin: 0;
  padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size});
  padding-right: ${Root.Size};
  padding-top: calc(${Root.Size} * ${props => (props.Size ? props.Size : '2')});
  padding-bottom: calc(
    ${Root.Size} * ${props => (props.Size ? props.Size : '2')}
  );
  position: relative;

  .hero-img {
    pointer-events: none;
    ${props =>
      props.imgRight || props.imgLeft || props.imgTop || props.imgBottom
        ? 'position: absolute'
        : null};
    ${props => (props.imgRight ? 'right: ' + props.imgRight : null)};
    ${props => (props.imgLeft ? 'left: ' + props.imgLeft : null)};
    ${props => (props.imgBottom ? 'bottom: ' + props.imgBottom : null)};
    ${props => (props.imgTop ? 'top: ' + props.imgTop : null)};
    ${props => (props.imgWidth ? 'width: ' + props.imgWidth : null)};
  }
`;

export const HeroContentStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
