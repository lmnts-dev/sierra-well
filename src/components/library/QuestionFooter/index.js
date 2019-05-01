// QuestionFooter Component:
// The QuestionFooter component.
// Example:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

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

    {HideCategories ? null : (
      <SlideSection
        Widgets={Widgets}
        SectionSize={6}
        Header="All Categories"
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

    {/* ///////////// */}

    {/* ///////////// */}

    <QuestionListings TagFilter={TagFilter} CategoryFilter={CategoryFilter} />

    {/* ///////////// */}
  </>
);

export default QuestionFooter;

//////////////////////////////////////////////////////////////////////
// End Component
