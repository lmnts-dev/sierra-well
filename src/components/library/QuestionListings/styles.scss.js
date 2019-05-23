// <SpecialsListings> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Helpers
import { SectionContentStyle } from './../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const QuestionListingsStyles = styled.div`
  appearance: none;
`;

QuestionListingsStyles.Header = styled.div`
  padding-left: ${Root.Grid.Gutter.Left};
  padding-right: ${Root.Grid.Gutter.Right};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.Nightsky)};
`;

export default QuestionListingsStyles;
//////////////////////////////////////////////////////////////////////
