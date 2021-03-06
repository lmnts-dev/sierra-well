// Castle Builder Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
// Blocks

// Begin Styles
//////////////////////////////////////////////////////////////////////

const CastleHeroStyle = styled.div`
  appearance: none;

  .block {
    .block-content {
      width: 100% !important;
      align-items: stretch;
    }
  }

  .btn {
    margin-right: calc(${Root.Size} / 4);
  }
`;

export default CastleHeroStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
