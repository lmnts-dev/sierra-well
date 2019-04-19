// <Block> Styles:
// This is the primary column component.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
export const BlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  /* Centered Style */
  ${props =>
    props.Style == 'centered' &&
    css`
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        text-align: center;
        width: 100%;
      }
    `}

  /* Width Multiple */
    width: 100%;
  max-width: ${props =>
    props.Width
      ? 'calc(' + Theme.Base.Grid.SiteWidth + ' * ' + props.Width + ')'
      : Theme.Base.Grid.SiteWidth};

  /* Top/Bottom Padding */
  padding-top: ${props =>
    props.Top ? 'calc(' + Root.Size + ' * ' + props.Top + ')' : '0'};
  padding-bottom: ${props =>
    props.Bottom ? 'calc(' + Root.Size + ' * ' + props.Bottom + ')' : '0'};
`;

export default BlockStyle;
//////////////////////////////////////////////////////////////////////
