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

const QuestionCards = ({ Filter, CategorySlug, AllCategories, TagSlug }) => {
  // Assign our strings to build our slugs.
  let CategorySlugString = CategorySlug ? '/' + CategorySlug : '';
  let TagSlugString = TagSlug ? '/' + TagSlug : '';
  let QuestionSlugString = CategorySlugString + TagSlugString;

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
                Slug
                Tags {
                  Name
                  Icon
                  Slug
                }
              }
            }
          }
        }
      `}
      render={data =>
        // Map the Question data we got.
        data.allQuestionsJson.edges.map((Question, index) => {
          // If the Question's Category is the same as the Filter supplied.
          if (Question.node.category == Filter) {
            return (
              <DefaultWidget
                BgColor={Theme.Color.PurpleHaze}
                TextColor={Theme.Color.White}
                Destination={
                  '/learn' + QuestionSlugString + '/' + Question.node.slug
                }
                Subhead={Question.node.category}
                Headline={Question.node.title}
                IconName="rainbow"
                IconColor={Theme.Color.White}
                key={index}
              />
            );
          } else {
            // If we want to display all the Questions, let's make their
            // slug their root category.
            if (Filter == 'all') {
              return (
                <DefaultWidget
                  BgColor={Theme.Color.PurpleHaze}
                  TextColor={Theme.Color.White}
                  Destination={
                    '/learn/' +
                    Question.node.category.toLowerCase() +
                    '/' +
                    Question.node.slug
                  }
                  Subhead={Question.node.category}
                  Headline={Question.node.title}
                  IconName="rainbow"
                  IconColor={Theme.Color.White}
                  key={index}
                />
              );
            } else {
              // If nothing is supplied, don't return anything.
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
  Filter,
}) => (
  <MasonrySection
    Columns={3}
    ColumnGap={0.25}
    BgColor={BgColor ? BgColor : Theme.Color.White}
    TextColor={Theme.Color.Nightsky}
    Gutter={Gutter ? Gutter : [0, 1, 2, 1]}
  >
    {Filter ? (
      <QuestionCards
        CategorySlug={CategorySlug}
        TagSlug={TagSlug ? TagSlug : null}
        Filter={Filter}
        AllCategories={AllCategories}
      />
    ) : (
      <QuestionCards
        CategorySlug={CategorySlug}
        TagSlug={TagSlug ? TagSlug : null}
        Filter="all"
        AllCategories={AllCategories}
      />
    )}
  </MasonrySection>
);

export default QuestionListings;

//////////////////////////////////////////////////////////////////////
// End Component
