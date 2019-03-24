// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Blocks
import InnerStyle from 'elements/Inner/styles.scss';
import SectionStyle from 'elements/Section/styles.scss';

// Begin Styles

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${Root.Footer.Size};
  padding: 0 ${Theme.Base.Size.Sm} 0 ${Theme.Base.Size.Sm};
  z-index: 400;
  font-size: 0.8rem;
`;

FooterStyle.Section = styled.div`
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
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
