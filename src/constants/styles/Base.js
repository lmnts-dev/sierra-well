/* eslint-disable */

// Base.js:
// Core measurements throughout the app.

export const Base = {
  // Core Base Measurement
  Size: {
    Lg: 60,
    Md: 60,
    Sm: 60
  },
  
  // Root Element Measurement
  REM: {
    Lg: 14, // px
    Md: 14, // px
    Sm: 14 // px
  },

  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: 992, // px
      Md: 768, // px
      Sm: 376, // px
    },
    Height: {
      Lg: 828, // px
      Md: 640, // px
      Sm: 568, // px
    },
  },

  // Site Grid
  Grid: {
    SiteWidth: 1680, // px
    Nav: {
      Orientation: `top`,
      Fixed: true,
      LogoPosition: null,
      Size: {
        Lg: 55, // px
        Md: 150, // px
        Sm: 40, // px
      },
    },

    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Lg: {
        Top: 0, // px
        Bottom: 0, // px
        Right: 20, // px
        Left: 20, // px
      },
      Md: {
        Top: 0, // px
        Bottom: 0, // px
        Right: 20, // px
        Left: 20, // px
      },
      Sm: {
        Top: 0, // px
        Bottom: 0, // px
        Right: 20, // px
        Left: 20, // px
      },
    },
  },

  // Buttons
  Button: {
    Lg: 44, // px
    Md: 35, // px
    Sm: 35, // px
  },

  // Inputs
  Input: {
    Lg: 44, // px
    Md: 35, // px
    Sm: 35, // px
  },

  // Transitions
  Transition: {
    Duration: 0.25, // seconds
    Ease: [1,.01,.49,1], // Cubic Bezier Ease
    Page: 2000, // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
  },

  // Geometry
  Geometry: {
    Radius: 10, // px
  }
};