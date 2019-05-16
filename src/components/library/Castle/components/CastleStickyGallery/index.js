// StickyGallery component:
// slice_type: sticky_gallery

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import StickyScrollSection from 'components/library/Section/StickyScrollSection';

// Elements
import Block from 'components/library/Block';

// Style Overrides
import CastleStickyGalleryStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleSimpleSection Component
const CastleSimpleSection = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items.length > 0 ? data.items : 0;

  // Function to create our GalleryQueries map.
  const galleryImgQueriesTransformer = data => {
    if (data != 0) {
      // Create a new map from Prismic Data.
      let queries = data.map((Query, index) => {
        return {
          Fluid: Query.src.localFile.childImageSharp.fluid
            ? Query.src.localFile.childImageSharp.fluid
            : false,
          Alt: Query.src.alt,
        };
      });

      // Return new map.
      return queries;
    } else {
      // Else, return 0.
      return 0;
    }
  };

  return (
    <CastleStickyGalleryStyle>
      <StickyScrollSection
        BgColor={primaryData.background_color}
        TextColor={primaryData.text_color}
        Content={{
          Subheadline: primaryData.subheadline,
          Headline: primaryData.headline.text,
          Body: primaryData.body_text,
        }}
        Flex={primaryData.direction == 'normal' ? 'row' : 'row-reverse'}
        GalleryQueries={galleryImgQueriesTransformer(repeatableData)}
        Button={{
          Label: primaryData.cta_label,
          BgColor: primaryData.cta_bg_color,
          TextColor: primaryData.cta_text_color,
          Destination: primaryData.cta_destination,
          IconClass: primaryData.cta_icon,
        }}
      />
    </CastleStickyGalleryStyle>
  );
};

export default CastleSimpleSection;

// GraphQL Queries:
// This is where you specify what data you need. It's fragment is
// used in the templated page query and passed into the Castle component.
// Example from the Special.js Template: https://www.dropbox.com/s/7d8hlm7yuqrlyi9/Screenshot%202019-05-08%2019.25.50.png?dl=0
//
// Basic Process:s
// 1. We run createPage() in gatsby-node.js
// 2. Query the needed data and pass it to a specified template.js. In the case
// above, it's Special/index.js. That template holds the GraphQL Query to pass said
// data and our fragment we make below down into the <Castle /> level component
// to identify the elements needed to build out the page content.
// 3. Rejoice.
//
// ///////////////////////////////////////////////////////////////////

export const query = graphql`
  fragment PrismicSpecialElementsStickyGalleryData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsStickyGallery {
          slice_type
          primary {
            headline {
              text
            }
            subheadline
            direction
            body_text
            background_color
            text_color
            cta_label
            cta_destination
            cta_bg_color
            cta_text_color
            cta_icon
          }
          items {
            src {
              alt
              copyright
              url
              localFile {
                id
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment PrismicLocationElementsStickyGalleryData on PrismicLocation {
    data {
      elements {
        ... on PrismicLocationElementsStickyGallery {
          slice_type
          primary {
            headline {
              text
            }
            subheadline
            direction
            body_text
            background_color
            text_color
            cta_label
            cta_destination
            cta_bg_color
            cta_text_color
            cta_icon
          }
          items {
            src {
              alt
              copyright
              url
              localFile {
                id
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
