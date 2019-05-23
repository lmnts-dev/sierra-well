// <AwardHoursStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

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

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      border-left: none;
      padding-left: 0;
      margin-left: 0;
    }

    ul {
      justify-content: center;

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        display: flex;
        flex-direction: row;
        padding: 0;

        li {
          margin-right: calc(${Root.Size} / 2);
          font-size: 0.6rem;
        }
      }
    }
  }

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    flex-direction: row-reverse;
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
      padding-bottom: calc((${Root.Size} / 2) / 2);
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        font-size: 0.5rem;
      }
    }
    &:last-child {
      font-weight: bold;
      font-size: 1.5rem;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        font-size: 0.5rem;
      }
    }
  }
`;

export default AwardHoursStyle;
//////////////////////////////////////////////////////////////////////
