/* eslint-disable */

// Theme.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.

// Usage:
// 1. First import the file.
// import { Theme } from '../../../path/to/Theme'
// 2. Use it in your SC: 'color: ${Theme.Color.Primary}; or simply refer to the object and key when used in functions.'

import { Settings } from './site/Settings';
import { Font } from './styles/Font';
import { Base } from './styles/Base';
import { Color } from './styles/Color';

export const Theme = {
  // General Site Information & Keywords
  Site: {
    Title: Settings.SiteTitle,
    ShortTitle: Settings.SiteTitleShort,
    Description: Settings.SiteDescription,
    Keywords: Settings.SiteBaseKeywords,
    Url: Settings.SiteUrl,
    BaseUrl: Settings.PathPrefix,
    Logo: Settings.Logo,
    LogoLight: Settings.LogoLight,
    LogoDark: Settings.LogoDark,
    OpenGraphImg: Settings.OpenGraphImg,
    Social: {
      Twitter: Settings.Social.Twitter,
      Facebook: Settings.Social.Facebook,
      Instagram: Settings.Social.Instagram,
      FbAppId: Settings.Social.FbAppId,
    },
  },

  // Fonts throughout the app.
  Font: {
    Header: Font.Header,
    Body: Font.Body,
    Code: Font.Code,
  },

  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: Base.Size.Lg + 'px',
      Md: Base.Size.Md + 'px',
      Sm: Base.Size.Sm + 'px',
    },

    // Root Element Measurement
    REM: {
      Lg: Base.REM.Lg + 'px', // px
      Md: Base.REM.Md + 'px', // px
      Sm: Base.REM.Sm + 'px', // px
    },

    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: Base.Media.Width.Lg + 'px',
        Md: Base.Media.Width.Md + 'px',
        Sm: Base.Media.Width.Sm + 'px',
      },
      Height: {
        Lg: Base.Media.Height.Lg + 'px',
        Md: Base.Media.Height.Md + 'px',
        Sm: Base.Media.Height.Sm + 'px',
      },
    },

    // Site Grid
    Grid: {
      SiteWidth: Base.Grid.SiteWidth + 'px',
      Nav: {
        Orientation: Base.Grid.Nav.Orientation,
        Fixed: Base.Grid.Nav.Fixed,
        LogoPosition: Base.Grid.Nav.LogoPosition,
        Size: {
          Lg: Base.Grid.Nav.Size.Lg + 'px',
          Md: Base.Grid.Nav.Size.Md + 'px',
          Sm: Base.Grid.Nav.Size.Sm + 'px',
        },
      },

      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Top: Base.Grid.Gutter.Lg.Top + 'px',
          Bottom: Base.Grid.Gutter.Lg.Bottom + 'px',
          Right: Base.Grid.Gutter.Lg.Right + 'px',
          Left: Base.Grid.Gutter.Lg.Left + 'px',
        },
        Md: {
          Top: Base.Grid.Gutter.Md.Top + 'px',
          Bottom: Base.Grid.Gutter.Md.Bottom + 'px',
          Right: Base.Grid.Gutter.Md.Right + 'px',
          Left: Base.Grid.Gutter.Md.Left + 'px',
        },
        Sm: {
          Top: Base.Grid.Gutter.Sm.Top + 'px',
          Bottom: Base.Grid.Gutter.Sm.Bottom + 'px',
          Right: Base.Grid.Gutter.Sm.Right + 'px',
          Left: Base.Grid.Gutter.Sm.Left + 'px',
        },
      },
    },

    // Buttons
    Button: {
      Lg: Base.Button.Lg + 'px',
      Md: Base.Button.Md + 'px',
      Sm: Base.Button.Sm + 'px',
    },

    // Inputs
    Input: {
      Lg: Base.Input.Lg + 'px',
      Md: Base.Input.Md + 'px',
      Sm: Base.Input.Sm + 'px',
    },

    // Transitions
    Transition: {
      Duration: Base.Transition.Duration + 's', // seconds
      Ease: Base.Transition.Ease, // Cubic Bezier Ease
      Page: Base.Transition.Page + 's', // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
    },

    // Geometry
    Geometry: {
      Radius: Base.Transition.Page + 's', // px
    },
  },

  // Core Palette & Colors
  Color: {
    // Core Colors
    Primary: Color.Primary,
    Secondary: Color.Secondary,
    Background: Color.Background,

    // Grayscale Palette
    Black: Color.Black,
    Nightsky: Color.Nightsky,
    Gunmetal: Color.Gunmetal,
    Slate: Color.Slate,
    Gray: Color.Gray,
    Snow: Color.Snow,
    White: Color.White,

    // Main Palette
    Leaf: Color.Leaf,
    Tahoe: Color.Tahoe,
    Sunset: Color.Sunset,
    Dank: Color.Dank,
    Flower: Color.Flower,

    // Feedback Palette
    Warning: Color.Warning,
    Success: Color.Success,
  },
};
