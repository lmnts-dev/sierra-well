// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import QuestionTemplate from './layout';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Question Template
const SpecialsArticlePage = props => {

  const node = props.data.allPrismicSpecial.edges[0].node;

  return (
    <>
      <h1>{node.data.title.text}</h1>
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
            elements {
              ... on PrismicSpecialElementsHero {
                slice_type
                primary {
                  body_text
                  text_alignment
                  background_color
                  text_color
                  tint_color
                  tint_opacity
                  breadcrumb
                  cta_label
                  cta_bg_color
                  cta_text_color
                  cta_destination
                  padding
                }
              }
              ... on PrismicSpecialElementsSimpleSection {
                slice_type
                primary {
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
