// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Begin Styles

const FooterSmallStyle = styled.footer`
  ${props => (props.routes.includes(props.location) ? FadeIn : FadeIn)};
`;


export default FooterSmallStyle;
//////////////////////////////////////////////////////////////////////
