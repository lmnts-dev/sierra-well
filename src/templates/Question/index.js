// templates/Question.js:
// This is the Question template of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/core/Layout';

// Components
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';

// Hero Components
import SimpleHero from 'components/library/Hero/SimpleHero';

//// Section Components
import SimpleSection from 'components/library/Section/SimpleSection';
import LearnSection from 'components/library/Section/LearnSection';
import SplitSection from 'components/library/Section/SplitSection';

//// Misc. Components
import Breadcrumb from 'components/library/Breadcrumb';
import QuestionFooter from 'components/library/QuestionFooter';
import SocialStrip from 'components/library/SocialStrip';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Post Details Snippet
const PostDetails = ({ Author, Time }) => (
  <span className="post-details">
    Answered <time itemProp="datePublished">{Time}</time> by{' '}
    <span itemProp="author">{Author}</span>
  </span>
);

// The Question Template
const QuestionTemplate = ({
  BgQuery,
  PageTheme,
  Location,
  CategorySlug,
  AllCategories,
}) => (
  <Layout
    BgColor={PageTheme.Color.Background}
    PrimaryColor={PageTheme.Color.Primary}
    SecondaryColor={PageTheme.Color.Secondary}
    TertiaryColor={PageTheme.Color.Tertiary}
  >
    <SubLevelPage
      BgColor={PageTheme.Color.Background}
      PrimaryColor={PageTheme.Color.Primary}
      SecondaryColor={PageTheme.Color.Secondary}
      TertiaryColor={PageTheme.Color.Tertiary}
    >
      {/* Schema.org BlogPosting */}
      {/* Read more: https://schema.org/BlogPosting */}

      <article itemScope itemType="http://schema.org/BlogPosting">
        {/* ///////////// */}

        <SimpleHero
          Size="2"
          BgQuery={BgQuery}
          BgAlt="What are qualifying conditions for a medical cannabis card?"
          TextColor={Theme.Color.White}
          Tint="0.5"
        >
          <Block AlignItems="flex-start" Width={1} maxWidth={0.5}>
            <Breadcrumb
              to="/learn/medical/"
              Label="Medical Cannabis Questions"
              TextColor={Theme.Color.White}
            />
            <h1 itemProp="name">
              What are qualifying conditions for a medical cannabis card?
            </h1>
            <SocialStrip Location={Location} TextColor={Theme.Color.White} />
          </Block>
        </SimpleHero>

        {/* Begin page content. */}
        {/* ///////////// */}
        <SubLevelPageContent
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.White}
          ItemProp="articleBody"
        >
          {/* ///////////// */}

          <SimpleSection
            BgColor={Theme.Color.Snow}
            TextColor={Theme.Color.Nightsky}
          >
            <Block Padding={[1, 0, 1, 0]} maxWidth={0.5}>
              <PostDetails Time="12-23-19" Author="Wes McQuillen" />
              <h3>
                In order to qualify for a medical marijuana card, you must
                suffer from one of the conditions listed and have a doctor’s
                recommendation that marijuana will help relieve that condition.
                The complete list of qualifying conditions can be found in the
                Nevada Revised Statutes, Chapter 453A, Section 050.
              </h3>
              <p className="p-md">
                Free delivery available within 15 miles of our Reno and Carson
                City stores, Nevada addresses only.
              </p>
            </Block>
          </SimpleSection>

          {/* ///////////// */}
        </SubLevelPageContent>
        {/* End page content. */}
        {/* ///////////// */}
      </article>

      {/* The Related Categories. */}
      <SubLevelPageContent
        BgColor={Theme.Color.Snow}
        TextColor={Theme.Color.Nightsky}
      >
        <LearnSection
          Prefix="More from "
          Categories={AllCategories}
          Filter={CategorySlug}
        />
      </SubLevelPageContent>

      {/* The Question / Category / Tag footer. */}
      <SubLevelPageContent
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
      >
        {/* ///////////// */}

        <QuestionFooter />

        {/* ///////////// */}
      </SubLevelPageContent>
    </SubLevelPage>
  </Layout>
);

export default QuestionTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
