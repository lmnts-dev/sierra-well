// QuestionFooter Component:
// The QuestionFooter component.
// Example:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Data
import { StaticQuery, graphql } from 'gatsby';

// Components
import Icon from 'elements/Icons';
import { Link } from 'gatsby';
import SimpleSection from 'components/library/Section/SimpleSection';
import MasonrySection from 'components/library/Section/MasonrySection';
import Block from 'components/library/Block';
import WidgetSection from 'components/library/Section/WidgetSection';
import DefaultWidget from 'components/library/Widgets/Library/Default/';
import QuestionListings from 'components/library/QuestionListings';
import SlideSection from 'components/library/Section/SlideSection';
import Btn from 'components/library/Btn';

// Transformers
import { categoryDataTransformer } from 'templates/Learn/Transformer';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import QuestionFooterStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Create our Categories array.
const BrowseCategories = () => {
  // Helper function to dissect the data into a usable map
  function categoryWidgets(data) {
    let widgetArray = data.map((category, index) => {
      return {
        Flex: 1,
        WidgetContent: [
          {
            Destination: '/learn/' + category.node.Slug,
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: category.node.PageTheme.Color.Background,
                BgImage: '',
                Subhead: '',
                Headline: category.node.Name,
                TextColor: category.node.PageTheme.Color.Primary,
                IconColor: category.node.PageTheme.Color.Primary,
                IconName: category.node.Icon, // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
        ],
      };
    });

    // Define our 'View All Widget'
    let viewAll = {
      Flex: 1,
      WidgetContent: [
        {
          Destination: '/learn/all',
          Style: 'Generic',
          Meta: {
            Generic: {
              BgColor: Theme.Color.Nightsky,
              BgImage: '',
              Subhead: '',
              Headline: 'All Categories',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: 'question', // FontAwesome Icon Name
              TintColor: '',
              TintOpacity: '',
              IconSize: '',
            },
          },
        },
      ],
    };

    // Add our 'View All Widget' to the beginning of the array with unshift().
    widgetArray.unshift(viewAll);

    // Return our new array.
    return widgetArray;
  }

  // Return Slider with Categories
  return (
    <StaticQuery
      query={graphql`
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
        }
      `}
      render={data => {
        const categoryMap = categoryDataTransformer(
          data.allPrismicQuestionCategory.edges
        );

        return (
          <SlideSection
            Widgets={categoryWidgets(categoryMap)}
            SectionSize={6}
            Header="Browse Categories"
            Gutter={[0, 1, 1, 1]}
            Theme={{
              TextColor: Theme.Color.Slate,
              BgColor: 'none',
            }}
            SliderSettings={{
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: false,
              arrows: true,
            }}
          />
        );
      }}
    />
  );
};

// Return our footer.
const QuestionFooter = ({ CategoryFilter, TagFilter, HideCategories }) => (
  <>
    {/* ///////////// */}

    <SimpleSection
      BgColor={Theme.Color.White}
      TextColor={Theme.Color.Nightsky}
      Style="centered"
    >
      <Block Style="centered" Padding={[1, 0, 0, 0]} maxWidth={0.5}>
        <h2>Not seeing your question?</h2>
        <p className="p-md">
          Chat with an expert now or sumbit your own question
        </p>
        <Btn
          IconClass="intercom"
          Label="Ask a question"
          BgColor={Theme.Color.Primary}
          TextColor={Theme.Color.White}
          Destination="/learn/all"
          IconPosition="left"
        />
      </Block>
    </SimpleSection>

    {/* ///////////// */}

    {HideCategories ? null : <BrowseCategories />}

    {/* ///////////// */}

    {/* ///////////// */}

    <QuestionListings TagFilter={TagFilter} CategoryFilter={CategoryFilter} />

    {/* ///////////// */}
  </>
);

export default QuestionFooter;

//////////////////////////////////////////////////////////////////////
// End Component
