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
import SimpleHero from 'components/library/Hero/SimpleHero';
import SocialStrip from 'components/library/SocialStrip';
import WidgetSection from 'components/library/Section/WidgetSection';
import Bread from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Castle.js by L&M
import Castle from 'components/library/Castle';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const DefaultTemplate = ({ node, data }) => (
  <>
    <SimpleHero
      Padding={[4, 0, 4, 0]}
      BgQuery={
        node.cover_image.localFile
          ? node.cover_image.localFile.childImageSharp.fluid
          : false
      }
      Background={
        node.color_background ? node.color_background : Theme.Color.Background
      }
      BgAlt={node.title.text ? node.title.text : 'Hero Image'}
      TextColor={node.color_primary ? node.color_primary : Theme.Color.White}
      Tint="0.5"
    >
      <Block AlignItems="flex-start" Width={1} maxWidth={0.75}>
        <Bread
          Crumbs={[{ Destination: '/specials', Label: 'Specials' }]}
          TextColor={node.color_primary}
        />
        <h1>{node.title.text}</h1>
        {node.description ? <p className="p-lg">{node.description} </p> : null}
        <SocialStrip
          Margin={[0.45, 0, 0, 0]}
          Location={data.location.href}
          TextColor={
            node.color_primary ? node.color_primary : Theme.Color.White
          }
        />
      </Block>
    </SimpleHero>

    {/* ///////////// */}

    <WidgetSection
      BgColor={Theme.Color.White}
      Widgets={[
        {
          // Begin WidgetContent
          Flex: 1,
          WidgetContent: [
            {
              Destination: '/menu',
              Style: 'Generic',
              Meta: {
                Generic: {
                  BgColor: Theme.Color.Nightsky,
                  BgImage: '',
                  Subhead: '',
                  Headline: 'Menu',
                  TextColor: Theme.Color.White,
                  IconColor: Theme.Color.Primary,
                  IconName: 'plus', // FontAwesome Icon Name
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
              Destination: '/locations',
              Style: 'Generic',
              Meta: {
                Generic: {
                  BgColor: Theme.Color.Tahoe,
                  BgImage: '',
                  Subhead: '',
                  Headline: 'Locations',
                  TextColor: Theme.Color.White,
                  IconColor: Theme.Color.White,
                  IconName: 'map-marker-alt', // FontAwesome Icon Name
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
              Destination: '/learn',
              Style: 'Generic',
              Meta: {
                Generic: {
                  BgColor: Theme.Color.Mint,
                  BgImage: '',
                  Subhead: '',
                  Headline: 'Q&A',
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
              Destination: '/specials',
              Style: 'Generic',
              Meta: {
                Generic: {
                  BgColor: Theme.Color.Primary,
                  BgImage: '',
                  Subhead: '',
                  Headline: 'Specials',
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

    {/* ///////////// */}
  </>
);

// The Question Template
const SpecialArticleTemplate = ({ data, node, elements }) => (
  <Layout
    BgColor={
      node.color_background ? node.color_background : Theme.Color.Background
    }
    PrimaryColor={
      node.color_primary ? node.color_primary : Theme.Color.Nightsky
    }
    SecondaryColor={
      node.color_secondary ? node.color_secondary : Theme.Color.Nightsky
    }
    TertiaryColor={
      node.color_tertiary ? node.color_tertiary : Theme.Color.White
    }
  >
    <SubLevelPage
      BgColor={
        node.color_background ? node.color_background : Theme.Color.Background
      }
      PrimaryColor={
        node.color_primary ? node.color_primary : Theme.Color.Nightsky
      }
      SecondaryColor={
        node.color_secondary ? node.color_secondary : Theme.Color.Nightsky
      }
      TertiaryColor={
        node.color_tertiary ? node.color_tertiary : Theme.Color.White
      }
    >
      {/* Schema.org BlogPosting */}
      {/* Read more: https://schema.org/BlogPosting */}

      {/* ///////////// */}
      {/* Begin page content. */}
      {/* ///////////// */}
      <SubLevelPageContent
        BgColor={node.color_background}
        TextColor={node.color_primary}
        ItemProp="articleBody"
      >
        {/* ///////////// */}

        {/* Check if elements exist. If so, run Castle. If not, display the default layout. */}
        {elements ? (
          <Castle Bricks={elements} Location={data.location.href} />
        ) : (
          <DefaultTemplate data={data} node={node} />
        )}

        {console.log(elements)}

        {/* ///////////// */}
      </SubLevelPageContent>
      {/* End page content. */}
      {/* ///////////// */}
    </SubLevelPage>
  </Layout>
);

export default SpecialArticleTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
