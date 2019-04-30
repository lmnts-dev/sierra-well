// <SocialStripStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SocialStripStyle = styled.div`
  display: inline-flex;
  width: auto;
  align-items: center;
  text-decoration: none;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  a {
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    text-decoration: none;
    margin-right: calc(${Root.Size} / 4);
    i {
      color: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
    }
  }
`;

SocialStripStyle.Label = styled.span`
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  display: inline-flex;
  width: auto;
  align-items: center;
  svg {
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  }
`;

export default SocialStripStyle;
//////////////////////////////////////////////////////////////////////
