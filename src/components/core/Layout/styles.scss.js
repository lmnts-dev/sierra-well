// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Blocks
import InnerStyle from 'elements/Inner/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SiteGrid = styled.div`
  width: 100%;
  background-color: ${Theme.Color.Background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

SiteGrid.Inner = styled(InnerStyle)`
  /* Core styles */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: ${Theme.Color.Background};
`;

export default SiteGrid;

//////////////////////////////////////////////////////////////////////
// End Styles
