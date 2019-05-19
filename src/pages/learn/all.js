// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SimpleHero from 'components/library/Hero/SimpleHero';
import LearnSection from 'components/library/Section/LearnSection';
import QuestionFooter from 'components/library/QuestionFooter';

//// Misc. Components
import Bread from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Elements
import Block from 'components/library/Block';

// Transformers
import { categoryDataTransformer } from 'templates/Learn/Transformer';

// Constants
import { Theme } from 'constants/Theme';

// Data
import { graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

// PageWrapper component for page theming.
const PageWrapper = ({ children, Data, Category, CategoryTheme }) => {
  // Transform our Prismic data into our initial structure.
  let TransformedCategories = categoryDataTransformer(
    props.data.allPrismicQuestionCategory.edges
  );

  return (
    <Layout
      BgColor={Theme.Color.Gunmetal}
      PrimaryColor={Theme.Color.Gunmetal}
      SecondaryColor={Theme.Color.White}
      TertiaryColor={Theme.Color.Nightsky}
    >
      <SubLevelPage
        BgColor={Theme.Color.Gunmetal}
        PrimaryColor={Theme.Color.Gunmetal}
        SecondaryColor={Theme.Color.White}
        TertiaryColor={Theme.Color.Nightsky}
      >
        {/* ///////////// */}

        <SimpleHero TextColor={Theme.Color.White}>
          <Block maxWidth={0.5}>
            <Bread
              Crumbs={[
                {
                  Destination: '/learn',
                  Label: 'Learn',
                },
              ]}
              TextColor={Theme.Color.White}
            />
            <h1 className="h2">You've got questions. We've got answers.</h1>
            <Btn
              IconClass="intercom"
              Label="Ask a question"
              BgColor={Theme.Color.Nightsky}
              TextColor={Theme.Color.White}
              Destination="/learn/all"
              IconPosition="left"
            />
          </Block>
        </SimpleHero>
        {/* Begin page content. */}
        {/* ///////////// */}
        <SubLevelPageContent
          BgColor={Theme.Color.Snow}
          TextColor={Theme.Color.Nightsky}
        >
          {/* ///////////// */}

          {children}

          {/* ///////////// */}
        </SubLevelPageContent>
        {/* End page content. */}

        {/* The Question / Category / Tag footer. */}
        <SubLevelPageContent
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
        >
          {/* ///////////// */}

          <QuestionFooter HideCategories />

          {/* ///////////// */}
        </SubLevelPageContent>

        {/* ///////////// */}
      </SubLevelPage>
    </Layout>
  );
};

// The Template itself. Where it all begins.
const LearnTemplateAll = ({ data }) => {
  return (
    <PageWrapper>
      {/* Pass our categories GraphQL query to the LearnSection. */}
      <LearnSection
        Filter="all"
        Categories={data.allQuestionCategoriesJson.edges}
      />
    </PageWrapper>
  );
};

export default LearnTemplateAll;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////
export const query = graphql`
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
`;

//////////////////////////////////////////////////////////////////////
// End Component
