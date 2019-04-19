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
  padding-top: calc(${Root.Size} * 2);
  padding-bottom: calc(${Root.Size} * 2);
`;

export const HeroContentStyle = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: ${props => (props.FullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
