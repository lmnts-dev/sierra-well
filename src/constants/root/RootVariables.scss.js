import { createGlobalStyle } from 'styled-components';
import { Theme, Root } from 'constants/Theme';

// Responsive Measurements:
// We use these to avoid media queries all
// over the place where possible.

export default createGlobalStyle`
  :root {
    /* ----------------------------------- Large Width Viewports */

    /* --------------- Base Measurements*/
    
    /* -------- Base Measurement */
    --Size: ${Theme.Base.Size.Lg};

    /* -------- Root Element Measurement */
    --REM: ${Theme.Base.REM.Lg};

    /* --------- Site Grid */
    --SiteWidth: ${Theme.Base.Grid.SiteWidth};
    --NavSize: ${Theme.Base.Grid.Nav.Size.Lg};

    /* --- Gutters */
    --GutterTop: ${Theme.Base.Grid.Gutter.Lg.Top};
    --GutterRight: ${Theme.Base.Grid.Gutter.Lg.Right};
    --GutterBottom: ${Theme.Base.Grid.Gutter.Lg.Bottom};
    --GutterLeft: ${Theme.Base.Grid.Gutter.Lg.Left};

    /* --------- Buttons */
    --ButtonSize: ${Theme.Base.Button.Lg};

    /* --------- Inputs */
    --InputSize: ${Theme.Base.Input.Lg};

    /* --------- Geometry */
    --Radius: ${Theme.Base.Geometry.Radius};
    
    /* ----------------------------------- Medium Width Viewports */
    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      /* --------------- Base Measurements*/
    
        /* -------- Base Measurement */
        --Size: ${Theme.Base.Size.Md};

        /* -------- Root Element Measurement */
        --REM: ${Theme.Base.REM.Md};

        /* --------- Site Grid */
        --SiteWidth: ${Theme.Base.Grid.SiteWidth};
        --NavSize: ${Theme.Base.Grid.Nav.Size.Md};

        /* --- Gutters */
        --GutterTop: ${Theme.Base.Grid.Gutter.Md.Top};
        --GutterRight: ${Theme.Base.Grid.Gutter.Md.Right};
        --GutterBottom: ${Theme.Base.Grid.Gutter.Md.Bottom};
        --GutterLeft: ${Theme.Base.Grid.Gutter.Md.Left};

        /* --------- Buttons */
        --ButtonSize: ${Theme.Base.Button.Md};

        /* --------- Inputs */
        --InputSize: ${Theme.Base.Input.Md};

        /* --------- Geometry */
        --Radius: ${Theme.Base.Geometry.Radius};
    }

    /* ----------------------------------- Small Width Viewports */
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      /* --------------- Base Measurements*/
    
        /* -------- Base Measurement */
        --Size: ${Theme.Base.Size.Sm};

        /* -------- Root Element Measurement */
        --REM: ${Theme.Base.REM.Sm};

        /* --------- Site Grid */
        --SiteWidth: ${Theme.Base.Grid.SiteWidth};
        --NavSize: ${Theme.Base.Grid.Nav.Size.Sm};

        /* --- Gutters */
        --GutterTop: ${Theme.Base.Grid.Gutter.Sm.Top};
        --GutterRight: ${Theme.Base.Grid.Gutter.Sm.Right};
        --GutterBottom: ${Theme.Base.Grid.Gutter.Sm.Bottom};
        --GutterLeft: ${Theme.Base.Grid.Gutter.Sm.Left};

        /* --------- Buttons */
        --ButtonSize: ${Theme.Base.Button.Sm};

        /* --------- Inputs */
        --InputSize: ${Theme.Base.Input.Sm};

        /* --------- Geometry */
        --Radius: ${Theme.Base.Geometry.Radius};
    }
  }

  html {
    font-size: ${Root.Base.REM};
  }
`;
