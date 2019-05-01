// QuestionListings Component:
// The QuestionListings component.
// Example:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';
import MasonrySection from 'components/library/Section/MasonrySection';
import DefaultWidget from 'components/library/Widgets/Library/Default/';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import QuestionListingsStyle from './styles.scss';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

const QuestionCards = ({
  CategoryFilter,
  TagFilter,
  CategorySlug,
  AllCategories,
  TagSlug,
}) => {
  // Assign our strings to build our slugs.
  const CategorySlugString = CategorySlug ? '/' + CategorySlug : '';
  const TagSlugString = TagSlug ? '/' + TagSlug : '';
  const QuestionSlugString = CategorySlugString + TagSlugString;

  // Helper Function to match the CategoryFilter to the right Category
  function categoryMatch(categoryData, categoryFilter) {
    // See  if our categoryData matches our supplied categoryFilter:
    let matchedCategory = categoryData.filter(
      category => category.node.Name === categoryFilter
    );

    // If it does, return the matched Category.
    if (matchedCategory) {
      return matchedCategory[0].node;
    }
  }

  return (
    // Run the StaticQuery to get the data we need.
    <StaticQuery
      query={graphql`
        query {
          allQuestionsJson {
            edges {
              node {
                id
                slug
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
                Name
                Icon
                Slug
                Tags {
                  Name
                  Icon
                  Slug
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
      `}
      render={data =>
        // Create our PageTheme variables for each Widget.

        // Map the Question data we got.
        data.allQuestionsJson.edges.map((Question, index) => {
          // If the Question's Category is the same as the Filter supplied:
          if (Question.node.category == CategoryFilter) {
            // If there isn't a TagFilter applied:
            if (TagFilter == 'all') {
              // Use our helper function above to find the right Category's Data.
              let filteredCategory = categoryMatch(
                data.allQuestionCategoriesJson.edges,
                CategoryFilter
              );

              console.log(CategoryFilter);

              return (
                <DefaultWidget
                  BgColor={filteredCategory.PageTheme.Color.Background}
                  TextColor={filteredCategory.PageTheme.Color.Primary}
                  Destination={
                    '/learn' + QuestionSlugString + '/' + Question.node.slug
                  }
                  Subhead={Question.node.category}
                  Headline={Question.node.title}
                  IconName={filteredCategory.Icon}
                  IconColor={filteredCategory.PageTheme.Color.Primary}
                  key={index}
                />
              );
            } else {
              // If there is a TagFilter applied, check the Tags Array
              // to see if it includes our filter:
              if (Question.node.tags.includes(TagFilter.toLowerCase())) {
                // Use our helper function above to find the right Category's Data.
                let filteredCategory = categoryMatch(
                  data.allQuestionCategoriesJson.edges,
                  CategoryFilter
                );

                return (
                  <DefaultWidget
                    BgColor={filteredCategory.PageTheme.Color.Background}
                    TextColor={filteredCategory.PageTheme.Color.Primary}
                    Destination={
                      '/learn' + QuestionSlugString + '/' + Question.node.slug
                    }
                    Subhead={Question.node.category}
                    Headline={Question.node.title}
                    IconName={filteredCategory.Icon}
                    IconColor={filteredCategory.PageTheme.Color.Primary}
                    key={index}
                  />
                );
              } else {
                // If it doesn't match anything, return false. And cry.
                return false;
              }
            }
          } else {
            // If we want to display all the Questions, let's make their
            // slug their root category.
            if (CategoryFilter == 'all') {
              // Use our helper function to match the Category data.
              let filteredCategory = categoryMatch(
                data.allQuestionCategoriesJson.edges,
                Question.node.category
              );

              return (
                <DefaultWidget
                  BgColor={filteredCategory.PageTheme.Color.Background}
                  TextColor={filteredCategory.PageTheme.Color.Primary}
                  Destination={
                    '/learn/' + filteredCategory.Slug + '/' + Question.node.slug
                  }
                  Subhead={Question.node.category}
                  Headline={Question.node.title}
                  IconName={filteredCategory.Icon}
                  IconColor={filteredCategory.PageTheme.Color.Primary}
                  key={index}
                />
              );
            } else {
              // If nothing is supplied, don't return anything. Also, cry.
              return null;
            }
          }
        })
      }
    />
  );
};

const QuestionListings = ({
  Gutter,
  CategorySlug,
  AllCategories,
  TagSlug,
  BgColor,
  CategoryFilter,
  TagFilter,
}) => (
  <MasonrySection
    Columns={3}
    ColumnGap={0.25}
    BgColor={BgColor ? BgColor : Theme.Color.White}
    TextColor={Theme.Color.Nightsky}
    Gutter={Gutter ? Gutter : [0, 1, 2, 1]}
  >
    {/* If the CategoryFilter is supplied */}
    {CategoryFilter ? (
      <QuestionCards
        CategorySlug={CategorySlug}
        TagSlug={TagSlug ? TagSlug : null}
        CategoryFilter={CategoryFilter}
        TagFilter={TagFilter ? TagFilter : 'all'}
        AllCategories={AllCategories}
      />
    ) : (
      // If it isn't, revert to 'all'
      <QuestionCards
        CategorySlug={CategorySlug}
        TagSlug={TagSlug ? TagSlug : null}
        CategoryFilter="all"
        TagFilter={TagFilter}
        AllCategories={AllCategories}
      />
    )}
  </MasonrySection>
);

export default QuestionListings;

//////////////////////////////////////////////////////////////////////
// End Component
