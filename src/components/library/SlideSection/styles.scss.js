// SubLevelPage Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const SlideSectionStyle = styled.div`
  width: 100%;
  overflow: visible;
  
  .slick-list {
    overflow: visible;
  }
`;

SlideSectionStyle.Inner = styled.div`
  width: 100%;
`;

SlideSectionStyle.Headline = styled.div`
  display: flex;
`;

SlideSectionStyle.CallToAction = styled.div`
  display: flex;
`;

SlideSectionStyle.SectionHeader = styled.div`
  display: flex;
`;

export default SlideSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
