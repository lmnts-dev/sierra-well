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

const FooterLargeStyle = styled.footer`
  width: 100%;
  display: ${props => (props.location == '/menu' ? 'none' : 'flex')};
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
  margin-top: ${props =>
    props.routes.includes(props.location)
      ? '0'
      : 'calc(-1 * ' + Root.Footer.Size + ')'};
  ${props => (props.routes.includes(props.location) ? FadeIn : FadeIn)};
`;

FooterLargeStyle.Section = styled.div`
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${Root.Footer.Size};
  padding: 0 calc(${Root.Size} / 6) 0 0;
  justify-content: space-between;
  flex: 1;
`;

FooterLargeStyle.Inner = styled.div`
  color: ${Theme.Color.Black};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  justify-content: ${props =>
    props.routes.includes(props.location) ? 'space-between' : 'flex-end'};
  flex-direction: row;
  span {
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};

    /* Lock in Copyright text with Sidebar component */
    &.copyright {
      padding-left: calc(${Root.Size} / 6);
      position: ${props =>
        props.routes.includes(props.location) ? 'unset' : 'fixed'};
      opacity: ${props => (props.routes.includes(props.location) ? '1' : '.6')};
      left: 0;
      bottom: 0;
      height: ${Root.Footer.Size};
      display: flex;
      align-items: center;
    }
  }
`;

export default FooterLargeStyle;
//////////////////////////////////////////////////////////////////////
