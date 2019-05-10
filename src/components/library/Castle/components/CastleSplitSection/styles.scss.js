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

const CastleSimpleSectionStyle = styled.div`
  appearance: none;

  .btn {
    margin-right: calc(${Root.Size} / 4);
  }
`;

export default CastleSimpleSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
