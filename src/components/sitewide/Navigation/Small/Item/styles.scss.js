// Small Navigation Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
const ItemStyle = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    position: relative;
    color: ${Theme.Color.Gunmetal};
    transition: all ${Theme.Base.Transition.Duration}
      ${Theme.Base.Transition.CssEase};

    span {
      font-size: 0.7rem;
    }

    &.active {
    }

    &:hover, &:focus {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.1);
      color: ${Theme.Color.Black};
    }
  }

  &.focus {
    background-color: ${Theme.Color.Primary};

    a {
      color: ${Theme.Color.White};
    }
  }
`;

export default ItemStyle;

//////////////////////////////////////////////////////////////////////
// End Component
