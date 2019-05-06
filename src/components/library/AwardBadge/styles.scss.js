// <AwardBadgeStyle> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AwardBadgeStyle = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(${Root.Size} * 3);
  height: calc(${Root.Size} * 3);
  background: ${Theme.Color.Primary};
  color: ${Theme.Color.White};
  border-radius: 50%;
  box-shadow: 0 0px 8px 0 rgba(6, 10, 92, 0.12);
  position: relative;
  text-align: center;
  padding: ${Theme.Base.Size.Sm};

  .img {
    width: 50%;
  }

  span {
    margin-top: calc(${Theme.Base.Size.Sm} * .75);
    padding-top: calc(${Theme.Base.Size.Sm} * .75);
    text-align: center;
    width: 100%;
    position: relative;
    font-weight: bold;
    font-size: .9rem;
    line-height: 1.3;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      height: 1px;
      width: ${Theme.Base.Size.Md};
      background: ${Theme.Color.White};
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 3%;
    right: 3%;
    top: 3%;
    bottom: 3%;
    border: 1px solid ${Theme.Color.White};
    border-radius: 50%;
  }
`;

export default AwardBadgeStyle;
//////////////////////////////////////////////////////////////////////
