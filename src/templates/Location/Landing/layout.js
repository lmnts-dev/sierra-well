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

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// PageWrapper component for page theming.
const PageWrapper = ({ children, LocationData, Location }) => {
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

        <SimpleHero
          Padding={[2, 0, 0, 0]}
          Flex="column"
          TextColor={LocationTheme.Color.Primary}
        >
          <Block maxWidth={0.5}>
            <Bread
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
            />
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
              className="btn-address"
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
            Padding={[1, 0, 0, 0]}
          />
        </SimpleHero>
        {/* Begin page content. */}
        {/* ///////////// */}
        <SubLevelPageContent
          BgColor={Theme.Color.Background}
          TextColor={Theme.Color.Nightsky}
        >
          {/* ///////////// */}

          {children}

          {/* ///////////// */}
        </SubLevelPageContent>
        {/* End page content. */}
      </SubLevelPage>
    </Layout>
  );
};

// TemplateLayout Component to pass data where it needs to go for
// the theming of the hero as well as the LearnSection and what
// to display in those cards.
const TemplateLayout = ({ LocationData, Location }) => {
  return (
    <PageWrapper LocationData={LocationData} Location={Location}>
      {console.log(LocationData)}

      {/* ///////////// */}

      <SimpleSection
        BgColor={Theme.Color.Snow}
        BgQuery="placeholder_bg_4.jpg"
        BgAlt="Our Awesome Alt Tag"
        FluidHeight={true}
        Gutter={[0, 0, 0, 0]}
      />

      {/* ///////////// */}
    </PageWrapper>
  );
};

// The Template itself. Where it all begins.
const LocationLandingTemplate = ({ LocationData, Location }) => {
  return <TemplateLayout LocationData={LocationData} Location={Location} />;
};

export default LocationLandingTemplate;
