// <SuggestionListStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SuggestionListStyle = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    right: 0;
    top: 0;
    bottom: 0;
    width: calc(${Root.Size} / 2);
    z-index: 3;
    background-image: ${props =>
      props.GradientColor
        ? 'linear-gradient(-90deg, ' +
          hexToRGB(props.GradientColor, 1) +
          ',' +
          hexToRGB(props.GradientColor, 0.000001) +
          ')'
        : 'pink'};

    /* hexToRGB(props.GradientColor, 1) */

    /* background-image: linear-gradient(
      -90deg,
      rgba(25d5,255,0, 1) 20%,
      rgba(25d5,255,0, 0) 100%
    ); */
  }

  /* Array-based Padding utilizing Css Variable Multiples. */
  ${props =>
    props.Padding
      ? 'padding-top: calc(' + Root.Size + ' * ' + props.Padding[0] + ')'
      : null};
  ${props =>
    props.Padding
      ? 'padding-right: calc(' + Root.Size + ' * ' + props.Padding[1] + ')'
      : null};
  ${props =>
    props.Padding
      ? 'padding-bottom: calc(' + Root.Size + ' * ' + props.Padding[2] + ')'
      : null};
  ${props =>
    props.Padding
      ? 'padding-left: calc(' + Root.Size + ' * ' + props.Padding[3] + ')'
      : null};

  ul {
    display: block;
    width: 100%;
    max-width: 100%;
    word-wrap: none;
    white-space: nowrap;
    overflow-x: auto;
    padding: calc(${Root.Size} / 4) 0;

    li {
      display: inline-block;
      margin-right: calc(${Root.Size} / 4);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;

      &:first-child {
        opacity: 0.3;
      }

      .btn {
        position: relative;
        left: 0;
        .btn-inner {
          height: calc(${Root.Button.Size} * 0.7);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: normal;
          padding: 0 calc(${Root.Size} / 4);
        }
      }
    }
  }
`;

export default SuggestionListStyle;
//////////////////////////////////////////////////////////////////////
