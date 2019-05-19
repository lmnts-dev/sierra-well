// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTagTemplate from './layout';

// Transformers
import { categoryDataTransformer } from 'templates/Learn/Transformer';

// Data
import { graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnTagPage = props => {
  let CategorySlug = props.pageContext.CategorySlug;
  let PageContextTagSlug = props.pageContext.TagSlug
    ? props.pageContext.TagSlug
    : 'more';
  let PageContextTagName = props.pageContext.TagName
    ? props.pageContext.TagName
    : 'More';
  let TransformedCategories = categoryDataTransformer(
    props.data.allPrismicQuestionCategory.edges
  );

  return (
    <>
      {TransformedCategories.map((Category, index) => {
        // If Category's slug matches this page's context CategorySlug that
        // we specified in gatsby-node.js:
        if (Category.node.Slug == CategorySlug) {
          // Define our correct Data Category Object
          let CategoryData = Category.node;
          let CategoryName = Category.node.Name;
          let CategoryTagList = Category.node.Tags.map((tag, index) => {
            return tag.Slug;
          });

          // Let's first see if the list of Category's Featured tags actually
          // contains the PageContextTagSlug passed from gatsby-node.js
          if (CategoryTagList.includes(PageContextTagSlug)) {
            // Then let's map and match that Category's tag information to
            // assign the right naming and icon for the tag.
            return (
              <div key={index}>
                {Category.node.Tags.map((Tag, i) => {
                  // If the tag slug matches this page's context PageContextTagSlug
                  // that we specified in gatsby-node.js.
                  if (Tag.Slug == PageContextTagSlug) {
                    // Define our correct Data Tag Object
                    let TagData = Tag;

                    return (
                      <LearnTagTemplate
                        key={i}
                        TagSlug={Tag.Slug}
                        TagData={TagData}
                        CategoryName={CategoryName}
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
          // If it isn't in the featured tags, let's make a Tag array based off
          // the data we've got.
          else {
            let TagData = {
              Name: PageContextTagName,
              Icon: CategoryData.Icon,
              Slug: PageContextTagSlug,
            };

            return (
              <LearnTagTemplate
                TagSlug={PageContextTagSlug}
                TagData={TagData}
                CategoryName={CategoryName}
                CategorySlug={CategorySlug}
                CategoryData={CategoryData}
                Location={props.location.href}
              />
            );
          }
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
