// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks
import InnerStyle from 'elements/Inner/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SiteGrid = styled.main`
  width: 100%;
  background-color: ${Theme.Color.Background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

SiteGrid.Inner = styled(InnerStyle)`
  /* Core styles */
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${Theme.Color.White};

  /* Gutters */
  padding-top: ${Theme.Base.Grid.Nav.Fixed
    ? Base.Grid.Nav.Size.Lg + Base.Grid.Gutter.Top + 'px'
    : Theme.Base.Grid.Gutter.Lg.Top};
  padding-bottom: ${Theme.Base.Grid.Gutter.Lg.Bottom};
`;

export default SiteGrid;

//////////////////////////////////////////////////////////////////////
// End Styles
