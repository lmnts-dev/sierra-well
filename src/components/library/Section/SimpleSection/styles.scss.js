// SimpleHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const SimpleSectionStyle = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
`;

SimpleSectionStyle.Inner = styled(SectionInnerStyle)`
  padding-top: ${props =>
    props.Size ? 'calc(' + Root.Size + ' * ' + props.Size + ')' : Root.Size};
  padding-bottom: ${props =>
    props.Size ? 'calc(' + Root.Size + ' * ' + props.Size + ')' : Root.Size};
  padding: ${props => (props.FluidHeight ? '0 !important' : null)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  .section-bg {
    position: ${props => (props.FluidHeight ? 'relative' : 'absolute')};
    width: ${props => (props.FluidHeight ? '100%' : 'auto')};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    ${props => (props.BgTint ? 'opacity: ' + props.BgTint + ';' : null)}
  }
`;

SimpleSectionStyle.Content = styled(SectionContentStyle)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: stretch;
  z-index: 2;

  /* Hide this section for fluid height of image. */
  display: ${props => (props.FluidHeight ? 'none' : 'flex')};
`;

export default SimpleSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
