// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import QuestionTemplate from 'templates/Question';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.PurpleHaze,
    Primary: Theme.Color.Dank,
    Secondary: Theme.Color.White,
    Tertiary: Theme.Color.Black,
  },
};

// The Question Template
const QuestionPage = props => (
  <QuestionTemplate
    PageTheme={PageTheme}
    BgQuery={props.data.imageTwo.childImageSharp.fluid}
    Location={props.location.href}
    AllCategories={props.data.allQuestionCategoriesJson.edges}
    CategorySlug="medical"
  />
);

export default QuestionPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
export const query = graphql`
  query {
    imageTwo: file(relativePath: { eq: "placeholder_bg_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allQuestionCategoriesJson {
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
