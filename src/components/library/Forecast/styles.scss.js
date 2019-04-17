// Button Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const ForecastStyle = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

ForecastStyle.Top = styled.div`
  font-size: calc(${Root.ViewHeightFontSize} * 5);
  font-family: 'Roboto', 'Helvetica', sans-serif;
  font-weight: 100;
  padding-right: calc(${Root.ViewWidthPadding} * 1.2);
  position: relative;

  &:before,
  &:after {
    position: absolute;
    right: 0;
  }

  &:before {
    content: '';
    top: calc(${Root.ViewWidthPadding} / 2.2);
    width: calc(${Root.ViewWidthPadding} / 1.4);
    height: calc(${Root.ViewWidthPadding} / 1.4);
    border: 1px solid ${Theme.Color.White};
    border-radius: 100%;
  }

  &:after {
    content: 'F';
    color: ${Theme.Color.White};
    font-size: calc(${Root.ViewWidthPadding});
    line-height: 0;
    right: calc(${Root.ViewWidthPadding} / 5.5);
    bottom: calc(${Root.ViewWidthPadding} / 1.1);
  }
`;

ForecastStyle.Bottom = styled.div`
  span {
    display: block;
    line-height: 1.4;
    font-size: calc(${Root.ViewWidthFontSize} / 1.25);
  }
`;

export default ForecastStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
