// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTemplate from 'templates/Learn/Layout';

// Data
import { graphql } from 'gatsby';
import { QuestionsData } from 'data/questions';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnPage = ({ data }) => (
  <LearnTemplate Data={data.allQuestionCategoriesJson.edges} />
);

export default LearnPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
export const query = graphql`
  query {
    allQuestionCategoriesJson(filter: { Slug: { eq: "medical" } }) {
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
  }
`;
//////////////////////////////////////////////////////////////////////
// End Component
