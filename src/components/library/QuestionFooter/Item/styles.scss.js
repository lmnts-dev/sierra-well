// <Breadcrumb> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BreadCrumb = styled(Link)`
  display: inline-flex;
  width: auto;
  align-items: center;
  transform: translateX(calc(1rem * -1.5));
  color: ${props => (props.Color ? props.Color : Theme.Color.Black)};
  text-decoration: none;

  svg {
    transform: rotate(180deg) translateX(0%);
    transform-origin: center center;
    width: 1rem;
    height: 1rem;
    fill: ${props => (props.Color ? props.Color : Theme.Color.Black)};
    transition: all .25s ease;
  }

  &:hover {
    color: ${props => (props.Color ? props.Color : Theme.Color.Black)};
    text-decoration: none;
    svg {
      transform: rotate(180deg) translateX(50%);
    }
  }
`;

export default BreadCrumb;
//////////////////////////////////////////////////////////////////////
