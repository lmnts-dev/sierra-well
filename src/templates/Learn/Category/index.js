// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnCategoryTemplate from './layout';

// Transformers
import { categoryDataTransformer } from 'templates/Learn/Transformer';

// Data
import { graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnCategoryPage = props => (
  <LearnCategoryTemplate
    Data={props.data.allQuestionCategoriesJson.edges}
    Location={props.location.href}
  >
    {console.log('Source:')}
    {console.log(props.data.allPrismicQuestionCategory.edges)}
    {console.log('Goal Categories:')}
    {console.log(props.data.allQuestionCategoriesJson.edges)}
    {console.log('categoryDataTransformer:')}
    {console.log(
      categoryDataTransformer(props.data.allPrismicQuestionCategory.edges)
    )}
  </LearnCategoryTemplate>
);

export default LearnCategoryPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

// The post template's GraphQL query. Notice the slug
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const query = graphql`
  query($Slug: String!) {
    allQuestionCategoriesJson(filter: { Slug: { eq: $Slug } }) {
      edges {
        node {
          id
          Name
          Icon
          Headline
          Slug
          Tags {
            Name
            Icon
            Slug
          }
          Breadcrumb {
            Destination
            Label
          }
          PageTheme {
            Color {
              Background
              Primary
              Secondary
              Tertiary
            }
          }
        }
      }
    }

    ## Prismic Data

    allPrismicQuestionCategory {
      edges {
        node {
          id
          uid
          data {
            name {
              text
            }
            icon
            headline
            color_background
            color_primary
            color_secondary
            color_tertiary
            tags {
              tag_name
              tag_slug
              tag_icon
            }
          }
        }
      }
    }
  }
`;
//////////////////////////////////////////////////////////////////////
// End Component
