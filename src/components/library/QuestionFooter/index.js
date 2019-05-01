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

// Constants
import { Theme } from 'constants/Theme';

// Styles
import QuestionFooterStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

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
      <WidgetSection
        BgColor={Theme.Color.White}
        Gutter={[1, 1, 0.15, 1]}
        Widgets={[
          {
            // Begin WidgetContent
            Flex: 1,
            WidgetContent: [
              {
                Destination: '/learn/all',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: Theme.Color.Gunmetal,
                    BgImage: '',
                    Subhead: '',
                    Headline: 'All Questions',
                    TextColor: Theme.Color.White,
                    IconColor: Theme.Color.White,
                    IconName: 'rainbow', // FontAwesome Icon Name
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
                Destination: '/learn/recreational',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: Theme.Color.Mint,
                    BgImage: '',
                    Subhead: '',
                    Headline: 'Recreational',
                    TextColor: Theme.Color.Nightsky,
                    IconColor: Theme.Color.Nightsky,
                    IconName: 'cannabis', // FontAwesome Icon Name
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
                Destination: '/learn/safety',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: Theme.Color.Dank,
                    BgImage: '',
                    Subhead: '',
                    Headline: 'Safety',
                    TextColor: Theme.Color.Nightsky,
                    IconColor: Theme.Color.Nightsky,
                    IconName: 'book-open', // FontAwesome Icon Name
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
                Destination: '/learn/industry',
                Style: 'Generic',
                Meta: {
                  Generic: {
                    BgColor: Theme.Color.Sunset,
                    BgImage: '',
                    Subhead: '',
                    Headline: 'Industry',
                    TextColor: Theme.Color.White,
                    IconColor: Theme.Color.White,
                    IconName: 'star', // FontAwesome Icon Name
                    TintColor: '',
                    TintOpacity: '',
                    IconSize: '',
                  },
                },
              },
            ],
            // End WidgetContent
          },
        ]}
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
