// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import QuestionTemplate from './layout';

// Transformers
import { questionDataTransformer } from 'templates/Question/Transformer';
import { categoryDataTransformer } from 'templates/Learn/Transformer';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Question Template
const QuestionPage = props => {
  let QuestionCategory = questionDataTransformer(
    props.data.allPrismicQuestion.edges[0].node
  ).category;
  let AllCategories = categoryDataTransformer(
    props.data.allPrismicQuestionCategory.edges
  );

  return (
    <>
      {AllCategories.map((Category, index) => {
        if (Category.node.Slug == QuestionCategory) {
          return (
            <QuestionTemplate
              PageTheme={Category.node.PageTheme}
              BgMatch="placeholder_bg_4.jpg"
              Location={props.location.href}
              AllCategories={AllCategories}
              CategorySlug={Category.node.Slug}
              QuestionData={questionDataTransformer(
                props.data.allPrismicQuestion.edges[0].node
              )}
              key={index}
            >
              {console.log('Source:')}
              {console.log(props.data.allPrismicQuestionCategory.edges)}
              {console.log('Goal Categories:')}
              {console.log(props.data.allQuestionCategoriesJson.edges)}
              {console.log('categoryDataTransformer:')}
              {console.log(
                categoryDataTransformer(
                  props.data.allPrismicQuestionCategory.edges
                )
              )}
            </QuestionTemplate>
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
  query($Slug: String!, $Id: String!) {
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

    ## Prismic Sourcing

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

    allPrismicQuestion(filter: { id: { eq: $Id } }) {
      edges {
        node {
          id
          uid
          tags
          data {
            title {
              text
            }
            short_answer
            long_answer
            date
            author {
              id
              document {
                id
                ... on PrismicPerson {
                  data {
                    name {
                      html
                      text
                    }
                  }
                }
              }
            }
            category {
              uid
            }
            cover_image {
              alt
              localFile {
                id
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
