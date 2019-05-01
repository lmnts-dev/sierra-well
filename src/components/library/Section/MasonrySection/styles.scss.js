// MasonrySecction Styles:

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

const MasonrySectionStyle = styled.div`
  width: 100%;
  margin: 0;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
  overflow: visible;
`;

MasonrySectionStyle.Inner = styled(SectionInnerStyle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow: visible;

  /* Array-based gutters utilizing root variable multiple. */
  ${props =>
    props.Gutter
      ? 'padding-top: calc(' + Root.Size + ' * ' + props.Gutter[0] + ')'
      : 'padding-top: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-right: calc(' + Root.Size + ' * ' + props.Gutter[1] + ')'
      : null};
  ${props =>
    props.Gutter
      ? 'padding-bottom: calc(' + Root.Size + ' * ' + props.Gutter[2] + ')'
      : 'padding-bottom: ' + Root.Size};
  ${props =>
    props.Gutter
      ? 'padding-left: calc(' +
        Root.Grid.Gutter.Left +
        ' + (' +
        Root.Size +
        ' * ' +
        props.Gutter[3] +
        '))'
      : null};
`;

MasonrySectionStyle.Content = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: visible;
  max-width: ${Theme.Base.Grid.SiteWidth};

  /* Performance fixes on Chrome & Safari */
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  /* Performance fixes on Chrome & Safari */
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;

  /* CSS Masonry */
  /* Read more: https://w3bits.com/css-masonry/ */
  column-width: 33%;
  column-count: ${props => (props.Columns ? props.Columns : 3)};
  column-gap: ${props =>
    props.ColumnGap
      ? ' calc(' + Root.Size + ' * ' + props.ColumnGap + ')'
      : 'calc(' + Root.Size + '* .25)'};

  .widget-content {
    border-radius: ${Root.Radius};
    box-shadow: 0 10px 17px 0 rgba(6, 10, 92, 0.12);
    position: relative;
    overflow: hidden;
    width: 100%;
    display: inline-block;
    margin-bottom: ${props =>
      props.ColumnGap
        ? ' calc(' + Root.Size + ' * ' + props.ColumnGap + ')'
        : 'calc(' + Root.Size + '* .25)'};

    .widget-headline {
      margin-bottom: calc(${Root.Size} * 2);
    }
  }
`;

export default MasonrySectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
