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

// Transformers
import { questionDataTransformer } from 'templates/Question/Transformer';
import { categoryDataTransformer } from 'templates/Learn/Transformer';

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
      category => category.node.Slug === categoryFilter
    );

    // If it does, return the matched Category.
    if (matchedCategory.length > 0) {
      return matchedCategory[0].node;
    } else {
      return false;
    }
  }

  return (
    // Run the StaticQuery to get the data we need.
    <StaticQuery
      query={graphql`
        query {
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

          allPrismicQuestion {
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
                      childImageSharp {
                        fluid(maxWidth: 1200) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const categoryMap = categoryDataTransformer(
          data.allPrismicQuestionCategory.edges
        );

        const questionsMap = questionDataTransformer(
          data.allPrismicQuestion.edges
        );

        // console.log('categoryMap');
        // console.log(categoryMap);

        // console.log('questionsMap');
        // console.log(questionsMap);

        // Create our PageTheme variables for each Widget.

        // Map the Question data we got.
        return (
          <>
            {questionsMap.map((Question, index) => {
              let QuestionCategory = Question.node.category
                ? Question.node.category
                : 'none';

              // console.log('QuestionCategory');
              // console.log(QuestionCategory);

              // return <h1>Masonry</h1>;
              // If the Question's Category is the same as the Filter supplied:
              if (QuestionCategory == CategoryFilter) {
                // If there isn't a TagFilter applied:
                if (TagFilter == 'all') {
                  // Use our helper function above to find the right Category's Data.
                  let filteredCategory = categoryMatch(
                    categoryMap,
                    CategoryFilter
                  );

                  return (
                    <DefaultWidget
                      BgColor={filteredCategory.PageTheme.Color.Background}
                      TextColor={filteredCategory.PageTheme.Color.Primary}
                      Destination={
                        '/learn' + QuestionSlugString + '/' + Question.node.slug
                      }
                      Subhead={filteredCategory.Name}
                      Headline={Question.node.title}
                      IconName={filteredCategory.Icon}
                      IconColor={filteredCategory.PageTheme.Color.Primary}
                      BgQuery={
                        Question.node.coverImage
                          ? Question.node.coverImage
                          : false
                      }
                      BgImageAltText={
                        QuestionCategory +
                        ' & Cannabis | ' +
                        Question.node.title
                      }
                      TintColor={Theme.Color.Black}
                      TintOpacity={0.6}
                      key={index}
                    />
                  );
                } else {
                  // If there is a TagFilter applied, check the Tags Array
                  // to see if it includes our filter:
                  if (Question.node.tags.includes(TagFilter.toLowerCase())) {
                    // Use our helper function above to find the right Category's Data.
                    let filteredCategory = categoryMatch(
                      categoryMap,
                      CategoryFilter
                    );

                    return (
                      <DefaultWidget
                        BgColor={filteredCategory.PageTheme.Color.Background}
                        TextColor={filteredCategory.PageTheme.Color.Primary}
                        Destination={
                          '/learn' +
                          QuestionSlugString +
                          '/' +
                          Question.node.slug
                        }
                        Subhead={filteredCategory.Name}
                        Headline={Question.node.title}
                        IconName={filteredCategory.Icon}
                        IconColor={filteredCategory.PageTheme.Color.Primary}
                        BgQuery={
                          Question.node.coverImage
                            ? Question.node.coverImage
                            : false
                        }
                        BgImageAltText={
                          QuestionCategory +
                          ' & Cannabis | ' +
                          Question.node.title
                        }
                        TintColor={Theme.Color.Black}
                        TintOpacity={0.6}
                        key={index}
                      />
                    );
                  } else {
                    // If it doesn't match anything, return false. And cry.
                    return null;
                  }
                }
              } else {
                // If we want to display all the Questions, let's make their
                // slug their root category.
                if (CategoryFilter == 'all') {
                  // Use our helper function to match the Category data.
                  let filteredCategory = categoryMatch(
                    categoryMap,
                    QuestionCategory
                  );

                  // console.log('all filteredCategory');
                  // console.log(filteredCategory);
                  // console.log('Question');
                  // console.log(Question);

                  if (filteredCategory) {
                    return (
                      <DefaultWidget
                        BgColor={filteredCategory.PageTheme.Color.Background}
                        TextColor={filteredCategory.PageTheme.Color.Primary}
                        Destination={
                          '/learn/' +
                          filteredCategory.Slug +
                          '/' +
                          Question.node.slug
                        }
                        Subhead={filteredCategory.Name}
                        Headline={Question.node.title}
                        IconName={filteredCategory.Icon}
                        IconColor={filteredCategory.PageTheme.Color.Primary}
                        BgQuery={
                          Question.node.coverImage
                            ? Question.node.coverImage
                            : false
                        }
                        BgImageAltText={
                          QuestionCategory +
                          ' & Cannabis | ' +
                          Question.node.title
                        }
                        TintColor={Theme.Color.Black}
                        TintOpacity={0.6}
                        key={index}
                      />
                    );
                  } else {
                    return (
                      <DefaultWidget
                        BgColor={Theme.Color.Black}
                        TextColor={Theme.Color.Whitee}
                        Destination={'/learn/' + Question.node.slug}
                        Subhead="Cannabis Questions"
                        Headline={Question.node.title}
                        IconName="question"
                        IconColor={Theme.Color.White}
                        BgQuery={
                          Question.node.coverImage
                            ? Question.node.coverImage
                            : false
                        }
                        BgImageAltText={'Cannabis Q&A | ' + Question.node.title}
                        TintColor={Theme.Color.Black}
                        TintOpacity={0.6}
                        key={index}
                      />
                    );
                  }
                } else {
                  // If nothing is supplied, don't return anything. Also, cry.
                  return null;
                }
              }
            })}
          </>
        );
      }}
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
    {/* {console.log('CategoryFilter Passed:')}
    {console.log(CategoryFilter)} */}

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
