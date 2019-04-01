// Layout Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const VerticalContentStyle = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: calc(${Root.Nav.Size} + ${Theme.Base.Size.Sm});
  padding-bottom: calc(${Root.Nav.Size} + ${Theme.Base.Size.Sm});
`;

// The Content Inner
VerticalContentStyle.Inner = styled.div`
  width: 100%;
  padding: 0;

  .widget {
    ${FadeIn};
  }
`;

export default VerticalContentStyle;

//////////////////////////////////////////////////////////////////////
// End Styles