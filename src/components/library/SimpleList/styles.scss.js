// <SimpleListStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SimpleListStyle = styled.div`
  display: flex;
`;

SimpleListStyle.List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
`;

SimpleListStyle.Item = styled.li`
  display: block;
  position: relative;
  text-transform: capitalize;
  margin-bottom: calc(${Root.Size} / 2);
  &:last-child {
    margin-bottom: 0;
  }

  span {
    display: block;
    &:first-child {
      opacity: 0.6;
      font-size: 1.2rem;
      padding-bottom: calc(${Root.Size} / 4);
    }
    &:last-child {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

export default SimpleListStyle;
//////////////////////////////////////////////////////////////////////
