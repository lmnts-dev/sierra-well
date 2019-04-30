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

const QuestionListings = ({ Gutter, BgColor }) => (
  <MasonrySection
    Columns={3}
    ColumnGap={0.25}
    BgColor={BgColor ? BgColor : Theme.Color.White}
    TextColor={Theme.Color.Nightsky}
    Gutter={Gutter ? Gutter : [0, 1, 2, 1]}
  >
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
        }
      `}
      render={data =>
        data.allQuestionsJson.edges.map((Question, index) => {
          return (
            <DefaultWidget
              BgColor={Theme.Color.PurpleHaze}
              TextColor={Theme.Color.White}
              Destination={Question.node.slug}
              Subhead={Question.node.category}
              Headline={Question.node.title}
              IconName="rainbow"
              IconColor={Theme.Color.White}
              key={index}
            />
          );
        })
      }
    />
  </MasonrySection>
);

export default QuestionListings;

//////////////////////////////////////////////////////////////////////
// End Component
