// SubLevelPage Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Content Wrapper
const SlideSectionStyle = styled.div`
  width: 100%;
  overflow: visible;

  .slick-slider {
    padding-bottom: ${Theme.Base.Size.Sm};
    margin-bottom: ${Theme.Base.Size.Sm};

    .slick-list {
      overflow: visible;
    }

    .slick-dots {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      padding: 0;
      margin: 0;

      li {
        margin: 0;
        padding: 0;
        width: 10px;
        height: 10px;
        margin-right: 5px;

        button {
          margin: 0;
          padding: 0;
          position: relative;
          width: 10px;
          height: 10px;
          margin-right: 5px;

          &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 7px;
            height: 7px;
            border: 1px solid ${Theme.Color.Black};
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

SlideSectionStyle.Inner = styled.div`
  width: 100%;
`;

SlideSectionStyle.SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Theme.Base.Size.Sm} ${Root.Grid.Gutter.Right} ${Theme.Base.Size.Sm}
    ${Root.Grid.Gutter.Left};
`;

SlideSectionStyle.Headline = styled.div`
  display: flex;
  font-weight: 800;
  font-size: 1.5rem;
  transition: all ${Theme.Base.Transition.Duration}
    ${Theme.Base.Transition.CssEase};
  i {
    margin-right: ${Theme.Base.Size.Sm};
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};
  }
`;

SlideSectionStyle.CallToAction = styled.div`
  display: flex;

  .btn {
    background-color: rgba(0, 0, 0, 0);
    color: ${Theme.Color.Black};

    svg {
      fill: ${Theme.Color.Black};
      border: ${Theme.Color.Black};
    }

    i {
      color: ${Theme.Color.Black};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export default SlideSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
