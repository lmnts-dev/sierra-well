// templates/Learn.js:
// This is the template for Learn pages.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import { SubLevelPageContent, SubLevelPage } from 'templates/SubLevelPage';
import SimpleHero from 'components/library/Hero/SimpleHero';
import AwardHours from 'components/library/AwardHours';
import WidgetSection from 'components/library/Section/WidgetSection';
import SimpleSection from 'components/library/Section/SimpleSection';
import SlideSection from 'components/library/Section/SlideSection';
import QuestionListings from 'components/library/QuestionListings';

//// Misc. Components
import Bread from 'components/library/Breadcrumb';
import SocialStrip from 'components/library/SocialStrip';
import QuestionFooter from 'components/library/QuestionFooter';
import Btn from 'components/library/Btn/';
import SuggestionList from 'components/library/SuggestionList';
import PageTabs from 'components/library/PageTabs';
import SimpleList from 'components/library/SimpleList';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// LocationPageWrapper component for page theming.
const LocationPageWrapper = ({
  children,
  Headline,
  LocationData,
  Location,
}) => {
  const LocationTheme = LocationData.about.PageTheme;

  return (
    <Layout
      BgColor={LocationTheme.Color.Background}
      PrimaryColor={LocationTheme.Color.Primary}
      SecondaryColor={LocationTheme.Color.Secondary}
      TertiaryColor={LocationTheme.Color.Tertiary}
    >
      <SubLevelPage
        BgColor={LocationTheme.Color.Background}
        PrimaryColor={LocationTheme.Color.Primary}
        SecondaryColor={LocationTheme.Color.Secondary}
        TertiaryColor={LocationTheme.Color.Tertiary}
      >
        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleHero
          Padding={[3, 1, 1.45, 1]}
          Flex="row"
          TextColor={LocationTheme.Color.Primary}
        >
          <Block maxWidth={0.5}>
            {/* <Bread
              Crumbs={[
                {
                  Destination: 'locations/',
                  Label: 'Locations',
                },
                {
                  Destination: 'locations/',
                  Label: LocationData.geography.state,
                },
                {
                  Destination:
                    'locations/' +
                    LocationData.geography.state.toLowerCase() +
                    '/' +
                    LocationData.slug,
                  Label: LocationData.name,
                },
              ]}
              TextColor={LocationTheme.Color.Primary}
            /> */}
            <h1 className="h2">{LocationData.about.headline}</h1>
            <Btn
              IconClass="plus"
              Label="View Menu"
              BgColor={LocationTheme.Color.Primary}
              TextColor={LocationTheme.Color.Tertiary}
              Destination={
                '/menu/' +
                LocationData.geography.state.toLowerCase() +
                '/' +
                LocationData.slug
              }
              IconPosition="left"
              IconFas
            />
            <Btn
              AddClass="btn-secondary"
              IconClass="map-marker-alt"
              Label={LocationData.contactDetails.location.address}
              BgColor="none"
              TextColor={LocationTheme.Color.Tertiary}
              Destination={LocationData.meta.maps}
              IconPosition="left"
              External
              IconFas
            />
            {/* <SocialStrip
              Margin={[0.5, 0, 0, 0]}
              Location={Location}
              TextColor={LocationTheme.Color.Primary}
            /> */}
          </Block>
          <Block Flex="row" maxWidth={0.5}>
            <AwardHours
              TextColor={LocationTheme.Color.Primary}
              Hours={LocationData.contactDetails.hours.map((time, index) => {
                return {
                  Label: time.days,
                  Data: time.start_time,
                };
              })}
            />
          </Block>
        </SimpleHero>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleHero
          Padding={[0, 1, 0, 1]}
          Flex="column"
          TextColor={LocationTheme.Color.Primary}
        >
          <PageTabs
            Location={Location}
            BaseUrl={
              '/locations' +
              '/' +
              LocationData.geography.state.toLowerCase() +
              '/' +
              LocationData.slug +
              '/'
            }
            List={[
              { name: 'About', slug: '' },
              { name: 'Specials', slug: 'specials' },
              { name: 'Menu', slug: 'menu' },
            ]}
            TextColor={LocationTheme.Color.Primary}
            Padding={[0, 0, 0, 0]}
          />
        </SimpleHero>

        {/* ///////////// */}

        {/* ///////////// */}

        <SimpleHero
          Padding={[0, 1, 0, 1]}
          Flex="column"
          TextColor={LocationTheme.Color.Primary}
          Tint={0}
          TintBorder
        >
          <SuggestionList
            BaseUrl={
              '/locations' +
              '/' +
              LocationData.geography.state.toLowerCase() +
              '/' +
              LocationData.slug +
              '/'
            }
            List={LocationData.nearby}
            Affix="/menu"
            Label="Nearby"
            TextColor={LocationTheme.Color.Primary}
            GradientColor={LocationTheme.Color.Background}
            Padding={[0, 0, 0, 0]}
          />
        </SimpleHero>

        {/* ///////////// */}

        {/* ///////////// */}

        {/* Begin page content. */}

        {/* ///////////// */}

        {/* ///////////// */}
        <SubLevelPageContent
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Nightsky}
        >
          {/* ///////////// */}

          {/* ///////////// */}

          {children}

          {/* ///////////// */}

          {/* ///////////// */}
        </SubLevelPageContent>
        {/* End page content. */}
      </SubLevelPage>
    </Layout>
  );
};

export default LocationPageWrapper;
