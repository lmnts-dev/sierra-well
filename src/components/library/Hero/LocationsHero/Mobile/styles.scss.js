// MobileLocationsHeroStyle Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Extended Styles
import { HeroInnerStyle } from './../../../Hero/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const MobileLocationsHeroStyle = styled.div`
  width: 100%;
  margin: ${Root.Nav.Size} 0 0 0;

  h1 {
    padding-top: calc(${Root.Size} / 5);
    a {
      text-decoration: none;
      color: ${Theme.Color.Primary};
      &:hover {
        text-decoration: none;
      }
    }
  }

  .btn {
    position: relative;
    margin-right: calc(${Root.Size} / 4);

    .btn-inner {
      font-size: 1.2rem;
    }

    &.btn-address {
      .btn-inner {
        opacity: 0.6;
      }
    }
  }

  .suggestion-list {
    .btn {
      margin-right: 0;
    }
    ul {
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-left: ${Root.Grid.Gutter.Left};
      }
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-top: 0;
    }
  }

  .award-hours {
    flex: 0.5;
  }
`;

MobileLocationsHeroStyle.LocationSwitch = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;

  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    right: 0;
    top: 0;
    bottom: 0;
    width: calc(${Root.Size} / 2);
    z-index: 3;
    /* background: pink; */
    background-image: linear-gradient(
      -90deg,
      ${hexToRGB(Theme.Color.White, 1)},
      ${hexToRGB(Theme.Color.White, 0.000001)}
    );
  }

  .location-switch-inner {
    font-size: 1.2rem;
    display: block;
    width: 100%;
    max-width: 100%;
    word-wrap: none;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: visible;
    touch-action: pan-x;
    -webkit-backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: calc(${Root.Size} / 4);
    /* height: calc(${Root.Size} * 2); */
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-left: ${Root.Grid.Gutter.Left};
    }
  }

  span {
    opacity: 0.3;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-right: calc(${Root.Size} / 4);
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  span,
  a {
    margin-right: calc(${Root.Size} / 2);
  }

  a {
    color: ${Theme.Color.Nightsky};
    font-weight: bold;

    &:hover {
      color: ${Theme.Color.Primary};
      text-decoration: none;
    }

    &.active {
      color: ${Theme.Color.Primary};
    }

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      background-color: ${hexToRGB(Theme.Color.Nightsky, 0.1)};
      padding: calc(${Root.Size} / 1.5);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      line-height: 0;
      border-radius: 999px;
    }
  }
`;

///////////////////////////////////////////////////////

// LocationsHero Tools
// For expanding / collapsing button on menu as well
// as promotional deals.
MobileLocationsHeroStyle.Tools = styled.div`
  width: 100%;
  padding-left: calc(${Root.Grid.Gutter.Left});
`;

// LocationsHero Tools Inner
MobileLocationsHeroStyle.ToolsInner = styled.div`
  height: calc(${Root.Nav.Size} * 0.65);
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  background: ${Theme.Color.Primary};
  border-radius: ${Root.Radius} 0 0 0;
  overflow: hidden;

  .collapse-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: none;
  }
`;

///////////////////////////////////////////////////////

// Base transition styles for collapsing LocationsHero
MobileLocationsHeroStyle.Inner = styled(HeroInnerStyle)`
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom : 'calc(' + Root.Size + '/ 6)'};
  padding-top: ${props =>
    props.paddingTop ? props.paddingTop : 'calc(' + Root.Size + '* 1.5)'};
  max-height: ${props => (props.maxHeight ? props.maxHeight : '100vh')};
  opacity: ${props => (props.opacity ? props.opacity : '1')};
  overflow: hidden;
  transition: all 0.25s ease;

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding-left: 0;
    padding-right: 0;

    .slide-section {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: ${Root.Grid.Gutter.Left};
      padding-right: ${Root.Grid.Gutter.Right};

      .slide-section-inner {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;

        .widget {
          padding-top: 0;

          .widget-inner {
            box-shadow: 0 10px 17px 0 rgba(0, 0, 0, 0.12);
          }

          .widget-headline,
          .widget-subheadline {
            font-size: 1.7rem;
          }
        }

        .slick-slide {
          &:first-child {
            svg {
              display: none;
            }
          }
        }

        .slick-dots {
          li {
            button {
              &:before {
                border: 1px solid ${Theme.Color.Nightsky};
              }
            }
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
