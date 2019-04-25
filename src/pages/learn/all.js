// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTemplate from 'templates/Learn';

// Data
import { graphql } from 'gatsby';
import { QuestionsData } from 'data/questions';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnPage = ({ data }) => (
  <>
    {data.allLearnJson.edges.map((Content, index) => {
      return (
        <LearnTemplate key={index} Filter="all" Data={Content.node}>
          {console.log(Content.node)}
        </LearnTemplate>
      );
    })}
  </>
);

export default LearnPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
export const query = graphql`
  query {
    allLearnJson {
      edges {
        node {
          id
          Slug
          Headline
          Breadcrumb {
            Destination
            Label
          }
          PageTheme {
            Color {
              Background
              Secondary
              Primary
              Tertiary
            }
          }
          Categories {
            Name
            Icon
            Headline
            Slug
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
            Tags {
              Name
              Icon
              Slug
            }
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
