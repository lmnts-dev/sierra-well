// <HeroStrip> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Helpers
import { SectionContentStyle } from './../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const HeroStripStyle = styled.div`
  padding-top: calc(${Root.Size} / 4);
  padding-bottom: calc(${Root.Size} / 4);
  padding-left: calc(${Root.Grid.Gutter.Left});
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.White)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};

  a {
    color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Black)};
  }
`;

HeroStripStyle.Inner = styled(SectionContentStyle)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  .hero-strip-item {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    padding: calc(${Root.Size} / 4) ${Root.Size};

    span {
      display: block;
      padding-bottom: 3px;
      &:first-child {
        opacity: 0.4;
        font-size: calc(${Root.ViewWidthFontSize} * 1);
      }
      &:last-child {
        font-weight: bold;
        font-size: calc(${Root.ViewWidthFontSize} * 1.3);
      }
    }

    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1px;
      opacity: 0.09;
      background: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.Black};
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
      padding-left: ${Root.Size};

      &:before {
        display: none;
      }
    }

    &.focus {
      a {
        &:hover {
          text-decoration: none;
        }
        span {
          &:last-child {
            color: ${Theme.Color.Primary};
          }
        }
      }
    }
  }
`;

export default HeroStripStyle;
//////////////////////////////////////////////////////////////////////
