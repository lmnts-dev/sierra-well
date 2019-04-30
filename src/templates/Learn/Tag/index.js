// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTagTemplate from './layout';

// Data
import { graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnTagPage = props => {
  // Define our Slugs
  let CategorySlug = props.pageContext.CategorySlug;
  let TagSlug = props.pageContext.TagSlug;

  // Define our Data Objects
  let CategoryData = {};
  let TagData = {};

  return (
    <>
      {props.data.allQuestionCategoriesJson.edges.map((Category, index) => {
        // If Category's slug matches this page's context CategorySlug that
        // we specified in gatsby-node.js:
        if (Category.node.Slug == CategorySlug) {
          // Define our correct Data Category Object
          let CategoryData = Category.node;

          // Then let's map that Category's tags.
          return (
            <div key={index}>
              {Category.node.Tags.map((Tag, i) => {
                // If the tag slug matches this page's context TagSlug
                // that we specified in gatsby-node.js.
                if (Tag.Slug == props.pageContext.TagSlug) {
                  // Define our correct Data Tag Object
                  let TagData = Tag;

                  return (
                    <LearnTagTemplate
                      key={i}
                      TagSlug={Tag.Slug}
                      TagData={TagData}
                      CategorySlug={CategorySlug}
                      CategoryData={CategoryData}
                      Location={props.location.href}
                    />
                  );
                }
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default LearnTagPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

// The post template's GraphQL query. Notice the slug
// variable which is passed in. We set this on the page
// context in gatsby-node.js.

// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const tagQuery = graphql`
  query {
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
