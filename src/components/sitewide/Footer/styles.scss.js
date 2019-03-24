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

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 400;
  font-size: 0.8rem;
  flex: 1;
  flex-shrink: 0;
  position: ${props =>
    props.routes.includes(props.location) ? 'absolute' : 'relative'};
  left: 0;
  bottom: 0;
  right: 0;
  ${props => (props.routes.includes(props.location) ? FadeIn : FadeOut)};
`;

FooterStyle.Section = styled.div`
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${Root.Footer.Size};
  padding: 0 ${Theme.Base.Size.Sm} 0 ${Theme.Base.Size.Sm};
  justify-content: space-between;
  flex: 1;
`;

FooterStyle.Inner = styled.div`
  color: ${Theme.Color.Black};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  span {
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }
`;

export default FooterStyle;
//////////////////////////////////////////////////////////////////////
