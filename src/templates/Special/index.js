// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import SpecialArticleTemplate from './layout';

// Load Castle Fragments
import 'components/library/Castle';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Question Template
const SpecialsArticlePage = props => {
  const node = props.data.allPrismicSpecial.edges[0].node;

  return (
    <>
      <SpecialArticleTemplate
        node={node.data}
        data={props}
        elements={node.data.elements}
      />
    </>
  );
};

export default SpecialsArticlePage;

// GraphQL Queries
// ///////////////////////////////////////////////////////////////////
export const query = graphql`
  query($Id: String!) {
    allPrismicSpecial(filter: { id: { eq: $Id } }) {
      edges {
        node {
          id

          # Load our Castle Component data.
          ...PrismicSpecialElementsHeroData
          ...PrismicSpecialElementsFullSplitSectionData
          ...PrismicSpecialElementsSimpleSectionData
          ...PrismicSpecialElementsSplitSectionData
          ...PrismicSpecialElementsStickyGalleryData
          ...PrismicSpecialElementsSplitImageHeroData
          ...PrismicSpecialElementsPromotionalStripData
          ...PrismicSpecialElementsWidgetRowData

          # Load additional page data.
          data {
            title {
              text
            }
            description
            tags
            color_background
            color_primary
            color_secondary
            color_tertiary
            cover_image {
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

// ////////////////////////////////////////////////////////////////////
// End Component
