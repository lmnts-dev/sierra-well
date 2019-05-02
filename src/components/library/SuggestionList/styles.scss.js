// <SuggestionListStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SuggestionListStyle = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

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
    word-wrap: none;
    white-space: nowrap;
    padding: calc(${Root.Size} / 4) 0;

    li {
      display: inline-block;
      margin-right: calc(${Root.Size} / 4);
      font-size: 1.2rem;

      .btn {
        position: relative;
        left: 0;
        .btn-inner {
          height: calc(${Root.Button.Size} * .7);
          font-size: 1.2rem;
          font-weight: normal;
          padding: 0 calc(${Root.Size} / 4);
        }
      }
    }
  }
`;

export default SuggestionListStyle;
//////////////////////////////////////////////////////////////////////
