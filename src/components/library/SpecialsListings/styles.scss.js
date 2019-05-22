// <SpecialListingsStyle> Styles:

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

export const SpecialListingsStyle = styled.div`
  appearance: none;
  position: relative;
  background-color: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.White}

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: ${Theme.Color.Black};
    opacity: 0.1;
  }

  .masonry-section {
    .widget-content {
      z-index: 100;

      &:first-child {
        width: 100%;
        flex: 100%;
        display: block;
      }
      &:nth-child(2) {
        width: 100%;
        flex: 100%;
        display: block;
      }

      .tag {
        text-transform: capitalize;
        display: inline-block;
        font-size: 1rem;
        margin-right: calc(${Root.Size} / 6);
        position: relative;

        &:before {
          content: '';
          position: absolute;
          right: calc(((${Root.Size} / 6) / 1.7) * -1);
          top: 50%;
          transform: translateY() (-50%);
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background-color: ${Theme.Color.White};
        }

        &:last-child {
          margin-right: 0;
          &:before {
            display: none;
          }
        }
      }
    }
  }

  .hero-strip {
    position: sticky;
    top: ${Root.Nav.Size};
    z-index: 400;
    /* background-color: rgba(255, 255, 255, 0.1) !important;
    span {
      color: ${props =>
        props.TextColor ? props.TextColor : Theme.Color.White} !important;      
    } */
  }
`;

SpecialListingsStyle.SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: calc(${Root.Size} / 6);
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};

  h2 {
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: ${Root.Size};
  }
`;

SpecialListingsStyle.Headline = styled.div`
  display: flex;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Nightsky)}
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
`;

export default SpecialListingsStyle;
//////////////////////////////////////////////////////////////////////
