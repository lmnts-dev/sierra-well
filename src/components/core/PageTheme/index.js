// PageTheme.js:
// This is for individual Page theming.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { createGlobalStyle } from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const PageThemeStyle = createGlobalStyle`
  body {
    /* -webkit-transform-style: preserve-3d; */
    /* -webkit-backface-visibility: hidden; */
    background-color: ${props =>
      props.BgColor ? props.BgColor : Theme.Color.Background};
    transition: background-color ${Theme.Base.Transition.Duration} ${
  Theme.Base.Transition.CssEase
};
  /* Color */
  ${props => (props.SecondaryColor ? 'color: ' + props.SecondaryColor : null)};
};

/* Navigation */
nav {

  /* Top Navigation */
  .nav-top {

    /* Linklist */
    .linklist {
      li {
        /* Update Link Colors */
        a {
          /* Color */
          ${props =>
            props.SecondaryColor ? 'color: ' + props.SecondaryColor : null};

          /* Opacity */
          ${props => (props.SecondaryColor ? 'opacity: 1' : null)};
          
          /* Pseudo Elements */ 


          &:before {
            ${props =>
              props.SecondaryColor
                ? 'background: ' + props.SecondaryColor
                : null};
          }

          /* Hover */
          &:hover {
            ${props => (props.SecondaryColor ? 'opacity: 1' : null)};
          }

          /* Active */
          &.active {
          opacity: 1;
          }
        }
      }
    }

    /* Communication / Focus Block */
    .btn {
      .btn-inner {
        ${props =>
          /* Background */
          props.SecondaryColor
            ? 'background-color: ' + props.SecondaryColor
            : null};

      /* Color */
      ${props =>
        props.TertiaryColor ? 'color: ' + props.TertiaryColor : null};
            
      /* Hover */
      &:hover {
              ${props =>
                props.SecondaryColor
                  ? 'background-color: ' + props.SecondaryColor
                  : null};
            }
      }
    }
  }

  /* Bottom Navigation */
  .nav-bottom {
    /* Linklist */
    .linklist {
      li {
        /* Update Link Colors */
        a {
          /* Color */
          ${props =>
            props.SecondaryColor ? 'color: ' + props.SecondaryColor : null};

          /* Opacity */
          ${props => (props.SecondaryColor ? 'opacity: .5' : null)};
          
          /* Hover */
          &:hover {
            ${props => (props.SecondaryColor ? 'opacity: 1' : null)};
          }

          /* Active */
          &.active {
          opacity: 1;
          }
        }
      }
    }
  }
};

/* Footer */
footer {
    span {
      /* Color */
      ${props =>
        props.SecondaryColor
          ? 'color: ' + props.SecondaryColor + ' !important'
          : null};
    }
  }

  /* Sublevel Page */
  .sub {
    /* Color */
    ${props =>
      props.SecondaryColor
        ? 'color: ' + props.SecondaryColor + ' !important'
        : null};
  }

  /* Slide Dividers */
  .divider {
    div {
      &:before {

        /* Divider Color */
        ${props =>
          props.SecondaryColor
            ? 'background-color: ' + props.SecondaryColor + ' !important'
            : null};
      }
    }
  }

  }
`;

const PageTheme = ({
  BgColor,
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
}) => (
  <PageThemeStyle
    BgColor={BgColor}
    PrimaryColor={PrimaryColor}
    SecondaryColor={SecondaryColor}
    TertiaryColor={TertiaryColor}
  />
);

export default PageTheme;

//////////////////////////////////////////////////////////////////////
// End Component
