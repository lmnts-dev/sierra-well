// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import SpecialArticleTemplate from './layout';

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
      {console.log(node.data)}
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
          data {
            title {
              text
            }
            description
            category
            tags
            color_background
            color_primary
            color_secondary
            color_tertiary
            cover_image {
              dimensions {
                width
                height
              }
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
            elements {
              ... on PrismicSpecialElementsHero {
                slice_type
                primary {
                  headline {
                    text
                  }
                  body_text
                  text_alignment
                  background_color
                  text_color
                  tint_color
                  tint_opacity
                  cta_label
                  cta_bg_color
                  cta_text_color
                  cta_destination
                  padding
                  social_sharing
                  breadcrumb_url
                  breadcrumb_label
                  background_image {
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
              ... on PrismicSpecialElementsSimpleSection {
                slice_type
                primary {
                  headline {
                    text
                  }
                  subheadline
                  text_color
                  background_color
                  text_alignment
                  padding
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
