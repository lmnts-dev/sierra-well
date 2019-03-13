/* eslint-disable */

// Theme.js:
// This file is primarily used to create naming and can also be '
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
    Social: {
      Twitter: Settings.Social.Twitter,
      Facebook: Settings.Social.Facebook,
      Instagram: Settings.Social.Instagram,
      FbAppId: Settings.Social.FbAppId,
    },
  },
  Font: {
    Header: Font.Header,
    Body: Font.Body,
    Code: Font.Code,
  },
  Base: {
    Size: Base.Size + 'px',
    Radius: Base.Radius + 'px',
    SiteWidth: Base.SiteWidth + 'px',
    FontSize: Base.FontSize + 'px',
    Transition: Base.Transition + 's',
    Ease: Base.Ease,
    PageTransition: Base.PageTransition, // milliseconds
    Media: {
      Lg: Base.Media.Lg + 'px',
      Md: Base.Media.Md + 'px',
      Sm: Base.Media.Sm + 'px',
    },
    Grid: {
      Nav: {
        Fixed: Base.Grid.Nav.Fixed,
        LogoPosition: Base.Grid.Nav.LogoPosition,
        Orientation: Base.Grid.Nav.Orientation,
        Size: {
          Lg: Base.Grid.Nav.Size.Lg + 'px',
          Md: Base.Grid.Nav.Size.Md + 'px',
          Sm: Base.Grid.Nav.Size.Sm + 'px',
        },
      },
      Gutter: {
        Lg: {
          Top: Base.Grid.Gutter.Top + 'px',
          Bottom: Base.Grid.Gutter.Bottom + 'px',
          Right: Base.Grid.Gutter.Right + 'px',
          Left: Base.Grid.Gutter.Left + 'px',
        },
        Md: {
          Top: Base.Grid.Gutter.Top / 1.5 + 'px',
          Bottom: Base.Grid.Gutter.Bottom / 1.5 + 'px',
          Right: Base.Grid.Gutter.Right / 1.5 + 'px',
          Left: Base.Grid.Gutter.Left / 1.5 + 'px',
        },
        Sm: {
          Top: Base.Grid.Gutter.Top / 2 + 'px',
          Bottom: Base.Grid.Gutter.Bottom / 2 + 'px',
          Right: Base.Grid.Gutter.Right / 2 + 'px',
          Left: Base.Grid.Gutter.Left / 2 + 'px',
        },
      },
    },
  },
  Color: {
    Primary: Color.Primary,
    Secondary: Color.Secondary,
    Background: Color.Background,
    White: Color.White,
    Black: Color.Black,
    Gray: Color.Gray,
    Warning: Color.Warning,
    Success: Color.Success,
  },
};
