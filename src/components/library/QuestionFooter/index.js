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

// Constants
import { Theme } from 'constants/Theme';

// Styles
import QuestionFooterStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////
const Widgets = [
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/all/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Nightsky,
            BgImage: '',
            Subhead: '',
            Headline: 'All Questions',
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
    // End WidgetContent
  },
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/recreational/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Mint,
            BgImage: '',
            Subhead: '',
            Headline: 'Recreational',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
            TintColor: '',
            TintOpacity: '',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/medical/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Tahoe,
            BgImage: '',
            Subhead: '',
            Headline: 'Medical',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'leaf', // FontAwesome Icon Name
            TintColor: '',
            TintOpacity: '',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/safety/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Dank,
            BgImage: '',
            Subhead: '',
            Headline: 'Safety',
            TextColor: Theme.Color.Black,
            IconColor: Theme.Color.Black,
            IconName: 'leaf', // FontAwesome Icon Name
            TintColor: '',
            TintOpacity: '',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/industry/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.Sunset,
            BgImage: '',
            Subhead: '',
            Headline: 'Industry',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'leaf', // FontAwesome Icon Name
            TintColor: '',
            TintOpacity: '',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
  {
    // Begin WidgetContent
    Flex: 1,
    WidgetContent: [
      {
        Destination: '/learn/california/',
        Style: 'Generic',
        Meta: {
          Generic: {
            BgColor: Theme.Color.PurpleHaze,
            BgImage: '',
            Subhead: '',
            Headline: 'California',
            TextColor: Theme.Color.White,
            IconColor: Theme.Color.White,
            IconName: 'leaf', // FontAwesome Icon Name
            TintColor: '',
            TintOpacity: '',
            IconSize: '',
          },
        },
      },
    ],
    // End WidgetContent
  },
];

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
        }
      `}
      render={data => (
        <SlideSection
          Widgets={categoryWidgets(data.allQuestionCategoriesJson.edges)}
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
      )}
    />
  );
};

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
