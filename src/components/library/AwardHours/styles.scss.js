// <AwardHoursStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AwardHoursStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  flex: 1;

  .simple-list {
    padding-left: calc(${Root.Size} / 2);
    margin-left: calc(${Root.Size} / 2);
    border-left: 1px solid
      ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
    display: flex;
    align-items: center;
    ul {
      justify-content: center;
    }
  }
`;

AwardHoursStyle.List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
`;

AwardHoursStyle.Item = styled.li`
  display: block;
  position: relative;
  text-transform: capitalize;
  margin-bottom: calc(${Root.Size} / 2);

  span {
    display: block;
    &:first-child {
      opacity: 0.6;
      font-size: 1.2rem;
      padding-bottom: calc(${Theme.Base.Size.Sm} / 2);
    }
    &:last-child {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;

export default AwardHoursStyle;
//////////////////////////////////////////////////////////////////////
