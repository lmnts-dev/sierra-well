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
const QuestionPage = props => {
  let QuestionCategory = props.data.allQuestionsJson.edges[0].node.category;
  let AllCategories = props.data.allQuestionCategoriesJson.edges;

  return (
    <>
      {AllCategories.map((Category, index) => {
        if (Category.node.Name == QuestionCategory) {
          return (
            <QuestionTemplate
              PageTheme={Category.node.PageTheme}
              BgQuery="placeholder_bg_4.jpg"
              Location={props.location.href}
              AllCategories={AllCategories}
              CategorySlug={Category.node.Slug}
              QuestionData={props.data.allQuestionsJson.edges[0].node}
              key={index}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default QuestionPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
export const query = graphql`
  query($Slug: String!) {
    allQuestionsJson(filter: { slug: { eq: $Slug } }) {
      edges {
        node {
          id
          slug
          coverImage
          date
          author
          title
          category
          tags
          shortAnswer
          longAnswer
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
