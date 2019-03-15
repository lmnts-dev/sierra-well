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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${Root.Nav.Size};
`;

FooterStyle.Section = styled(SectionStyle)`
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

FooterStyle.Inner = styled(InnerStyle)`
  color: ${Theme.Color.Black};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export default FooterStyle;
//////////////////////////////////////////////////////////////////////
