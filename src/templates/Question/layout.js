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
  QuestionData,
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
          BgAlt={QuestionData.title}
          TextColor={Theme.Color.White}
          Tint="0.5"
        >
          <Block AlignItems="flex-start" Width={1} maxWidth={0.5}>
            <Breadcrumb
              to={'/learn/' + CategorySlug}
              Label={QuestionData.category + ' Cannabis Questions'}
              TextColor={Theme.Color.White}
            />
            <h1 itemProp="name">{QuestionData.title}</h1>
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
              <PostDetails
                Time={QuestionData.date}
                Author={QuestionData.author}
              />
              <h3>{QuestionData.shortAnswer}</h3>
              <p className="p-md">{QuestionData.longAnswer}</p>
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
          Filter={QuestionData.category.toLowerCase()}
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
