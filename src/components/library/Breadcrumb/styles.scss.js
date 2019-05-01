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

export const BreadCrumb = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  transform: translateX(calc(1rem * -1.5));
  text-decoration: none;
`;

BreadCrumb.Label = styled(Link)`
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  display: inline-flex;
  width: auto;
  align-items: center;
  margin-left: calc(${Theme.Base.Size.Sm});
  position: relative;
  text-transform: capitalize;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc((${Theme.Base.Size.Sm} / 2) * -1);
    transform: translateY(-50%);
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${props =>
      props.TextColor ? props.TextColor : Theme.Color.Black};
  }

  &:first-child {
    margin-left: 0;
    position: relative;

    &:before {
      display: none;
    }
  }

  svg {
    transform: rotate(180deg) translateX(0%);
    transform-origin: center center;
    width: 1rem;
    height: 1rem;
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    transition: all 0.25s ease;
    fill: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  }

  &:hover {
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    text-decoration: none;
    svg {
      transform: rotate(180deg) translateX(50%);
    }
  }
`;

export default BreadCrumb;
//////////////////////////////////////////////////////////////////////
