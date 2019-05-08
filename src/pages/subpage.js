// Index.js:
// This is the home page of the website.

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
import HeroStrip from 'components/library/HeroStrip';

//// Section Components
import SimpleSection from 'components/library/Section/SimpleSection';
import WidgetSection from 'components/library/Section/WidgetSection';
import SplitSection from 'components/library/Section/SplitSection';

//// Misc. Components
import Bread from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';
import ImgMatch from 'components/core/ImgMatch';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Page Theme
const PageTheme = {
  Color: {
    Background: Theme.Color.PurpleHaze,
    Primary: Theme.Color.Dank,
    Secondary: Theme.Color.White,
    Tertiary: Theme.Color.Black,
  },
};

const Index = props => (
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
      {/* ///////////// */}

      <SimpleHero
        imgRight="0"
        imgBottom="0"
        imgWidth="50%"
        Size="2"
        Background="none"
        TextColor={Theme.Color.White}
      >
        <Block AlignItems="flex-start" Width={0.5}>
          <Bread
            Crumbs={[
              {
                Destination: '/specials',
                Label: 'Specials',
              },
            ]}
            TextColor={Theme.Color.White}
          />
          <h1>100% Free Delivery</h1>
          <p className="p-md">Any size order, no minimum required.</p>
          <Btn
            Label="View Our Menu"
            Destination="/menu"
            BgColor={Theme.Color.Primary}
            TextColor={Theme.Color.White}
          />
        </Block>
        <Block className="hero-img">
          <ImgMatch src="hero-phone.png" alt="100% Free Delivery" />
        </Block>
      </SimpleHero>

      {/* ///////////// */}

      <HeroStrip
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.NightSky}
        Items={[
          {
            Caption: 'Seniors',
            Label: '5% off',
          },
          {
            Caption: 'Senior Veterans',
            Label: '15% off',
          },
          {
            Caption: 'Veterans',
            Label: '10% off',
          },
          {
            Caption: 'Industry',
            Label: '15% off',
          },
          {
            Caption: 'More details',
            Label: 'View all',
            Destination: '/specials',
          },
        ]}
      />

      {/* ///////////// */}

      {/* Begin page content. */}
      {/* ///////////// */}
      <SubLevelPageContent
        BgColor={Theme.Color.Background}
        TextColor={Theme.Color.White}
      >
        {/* ///////////// */}

        <SplitSection Flex="row-reverse">
          <Block
            Padding={[1, 1, 1, 1]}
            Width={0.5}
            BgColor={Theme.Color.White}
            TextColor={Theme.Color.Nightsky}
          >
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
            <Btn
              Label="View Our Menu"
              Destination="/menu"
              BgColor={Theme.Color.Primary}
              TextColor={Theme.Color.White}
            />
          </Block>

          <Block
            Style="centered"
            BgColor={Theme.Color.White}
            BgMatch="placeholder_bg_4.jpg"
            BgAlt="Our Awesome Alt Tag"
            Width={0.5}
          />
        </SplitSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <SplitSection>
          <Block
            Padding={[1, 1, 1, 0]}
            Width={0.5}
            BgColor={Theme.Color.White}
            TextColor={Theme.Color.Nightsky}
          >
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>

          <Block
            Style="centered"
            BgColor={Theme.Color.White}
            BgMatch="placeholder_bg_4.jpg"
            BgAlt="Our Awesome Alt Tag"
            Width={0.5}
          />
        </SplitSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.Snow}
          TextColor={Theme.Color.Nightsky}
          Gutter={[1, 0, 1, 1]}
        >
          <Block
            Padding={[1, 1, 1, 0]}
            Width={0.5}
            TextColor={Theme.Color.Nightsky}
          >
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>

          <Block
            Style="centered"
            BgColor={Theme.Color.Snow}
            BgMatch="placeholder_bg_4.jpg"
            BgAlt="Our Awesome Alt Tag"
            Width={0.5}
          />
        </SimpleSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.Snow}
          TextColor={Theme.Color.Nightsky}
          Gutter={[1, 0, 1, 1]}
        >
          <Block
            Style="centered"
            BgColor={Theme.Color.Snow}
            BgMatch="placeholder_bg_4.jpg"
            BgAlt="Our Awesome Alt Tag"
            Width={0.5}
          />

          <Block
            Padding={[1, 1, 1, 1]}
            Width={0.5}
            TextColor={Theme.Color.Nightsky}
          >
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
            <Btn
              Label="View Our Menu"
              Destination="/menu"
              BgColor={Theme.Color.Primary}
              TextColor={Theme.Color.White}
            />
          </Block>
        </SimpleSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.White}
          TextColor={Theme.Color.Nightsky}
          Style="centered"
        >
          <Block Style="centered" Padding={[1, 0, 1, 0]} maxWidth={0.5}>
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>
        </SimpleSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.Black}
          BgMatch="placeholder_bg_4.jpg"
          BgTint={0.3}
          BgAlt="Our Awesome Alt Tag"
          TextColor={Theme.Color.White}
          Style="centered"
        >
          <Block Style="centered" Padding={[1, 0, 1, 0]} maxWidth={0.5}>
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
            <Btn
              Label="View Our Menu"
              Destination="/menu"
              BgColor={Theme.Color.Primary}
              TextColor={Theme.Color.White}
            />
          </Block>
        </SimpleSection>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.Black}
          TextColor={Theme.Color.White}
          Style="centered"
        >
          <Block Style="centered" Top={3} Bottom={3} maxWidth={0.5}>
            <h2>Discretion is our first priority — so why not make it free?</h2>
            <p className="p-md">
              Free delivery available within 15 miles of our Reno and Carson
              City stores, Nevada addresses only.
            </p>
          </Block>
        </SimpleSection>

        {/* ///////////// */}

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

        {/* ///////////// */}

        <SimpleSection
          BgColor={Theme.Color.Snow}
          BgMatch="placeholder_bg_4.jpg"
          BgAlt="Our Awesome Alt Tag"
          FluidHeight={true}
          Gutter={[0, 0, 0, 0]}
        />

        {/* ///////////// */}
      </SubLevelPageContent>
      {/* End page content. */}
      {/* ///////////// */}
    </SubLevelPage>
  </Layout>
);

export default Index;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// End Component
