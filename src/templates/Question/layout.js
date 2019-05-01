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
import Bread from 'components/library/Breadcrumb';
import QuestionFooter from 'components/library/QuestionFooter';
import SocialStrip from 'components/library/SocialStrip';
import Btn from 'components/library/Btn';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Slugify Helper

function slugify(string) {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  const b = 'aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

// Post Details Snippet
const PostDetails = ({ Author, Time }) => (
  <span className="post-details">
    Answered <time itemProp="datePublished">{Time}</time> by{' '}
    <span itemProp="author">{Author}</span>
  </span>
);

// Breadcrumb Tag List
const TagList = ({ Tags, CategorySlug }) => {
  // Tag Crumb Function
  function tagCrumbs(baseUrl, categorySlug, list) {
    let crumbs = list.map((tag, index) => {
      if (index == 0) {
        return {
          Destination: '/' + baseUrl + '/' + categorySlug,
          Label: categorySlug + ' Cannabis Questions',
        };
      } else {
        return {
          Destination: '/' + baseUrl + '/' + categorySlug + '/' + slugify(tag),
          Label: tag,
        };
      }
    });

    return crumbs;
  }

  return (
    <>
      <Bread
        Crumbs={tagCrumbs('learn', CategorySlug, Tags)}
        TextColor={Theme.Color.White}
      />
    </>
  );
};

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
            <TagList Tags={QuestionData.tags} CategorySlug={CategorySlug} />

            <h1 itemProp="name">{QuestionData.title}</h1>
            <SocialStrip
              Margin={[0, 0, 0, 0]}
              Location={Location}
              TextColor={Theme.Color.White}
            />
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
