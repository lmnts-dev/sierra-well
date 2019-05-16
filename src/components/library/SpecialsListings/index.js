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

const SpecialCards = ({
  CategoryFilter,
  TagFilter,
  CategorySlug,
  AllCategories,
  TagSlug,
}) => {
  return (
    // Run the StaticQuery to get the data we need.
    <StaticQuery
      query={graphql`
        query {
          allPrismicSpecial {
            edges {
              node {
                id
                uid
                data {
                  title {
                    text
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
        data.allPrismicSpecial.edges.map((Special, index) => {
          return <h1>{Special.node.data.title.text}</h1>;
        })
      }
    />
  );
};

// <DefaultWidget
//                   BgColor={filteredCategory.PageTheme.Color.Background}
//                   TextColor={filteredCategory.PageTheme.Color.Primary}
//                   Destination={
//                     '/learn' + QuestionSlugString + '/' + Question.node.slug
//                   }
//                   Subhead={Question.node.category}
//                   Headline={Question.node.title}
//                   IconName={filteredCategory.Icon}
//                   IconColor={filteredCategory.PageTheme.Color.Primary}
//                   BgImageFile={Question.node.coverImage}
//                   BgImageAltText={
//                     Question.node.category +
//                     ' & Cannabis | ' +
//                     Question.node.title
//                   }
//                   TintColor={Theme.Color.Black}
//                   TintOpacity={0.6}
//                   key={index}
//                 />

const SpecialListings = ({ Gutter, BgColor }) => (
  <MasonrySection
    Columns={3}
    ColumnGap={0.25}
    BgColor={BgColor ? BgColor : Theme.Color.White}
    TextColor={Theme.Color.Nightsky}
    Gutter={Gutter ? Gutter : [0, 1, 2, 1]}
  >
    <SpecialCards />
  </MasonrySection>
);

export default SpecialListings;

//////////////////////////////////////////////////////////////////////
// End Component
