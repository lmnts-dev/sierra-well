// StickyScrollSection Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const LocationPageWrapperStyles = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  appearance: none;

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    .simple-hero {
      flex-direction: column;

      .hero-content {
        flex-direction: column;

        .block {
          padding: 0;
        }
      }

      .hero-inner {
        padding-top: calc(${Root.Nav.Size} + ${Root.Size});

        .award-badge {
          position: absolute;
          right: calc(${Root.Size} * -1.2);
          bottom: calc(${Root.Size} * -1);
        }
      }

      /* Our Page Tabs */
      &:nth-child(2) {
        .hero-inner {
          padding-top: 0;
          padding-left: calc(${Root.Grid.Gutter.Left});
          padding-right: calc(${Root.Grid.Gutter.Right});

          .page-tabs {
            ul {
              display: flex;
              justify-content: space-between;
              li {
                margin: 0;
              }
            }
          }
        }
      }

      /* Our Suggestion List */
      &:nth-child(3) {
        .hero-inner {
          padding-top: calc(${Root.Size} / 2);
          padding-left: calc(${Root.Grid.Gutter.Left});
          padding-right: calc(${Root.Grid.Gutter.Right});

          .page-tabs {
            ul {
              display: flex;
              justify-content: space-between;
              li {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
`;

export default LocationPageWrapperStyles;

//////////////////////////////////////////////////////////////////////
// End Styles
