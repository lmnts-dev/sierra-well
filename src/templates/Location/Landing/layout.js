// templates/Learn.js:
// This is the template for Learn pages.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import SimpleSection from 'components/library/Section/SimpleSection';
import SplitSection from 'components/library/Section/SplitSection';
import WidgetSection from 'components/library/Section/WidgetSection';
import StickyScrollSection from 'components/library/Section/StickyScrollSection';
import QuestionFooter from 'components/library/QuestionFooter';
import Block from 'components/library/Block';
import Btn from 'components/library/Btn';

// Template Specific Components
import LocationPageWrapper from '../Components/LocationPageWrapper';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// TemplateLayout Component to pass data where it needs to go for
// the theming of the hero as well as the LearnSection and what
// to display in those cards.
const TemplateLayout = ({ LocationData, Location, Headline }) => {
  // Build our automatic summary headline.
  let SummaryHeadlineString =
    LocationData.name +
    // eslint-disable-next-line
    "'s leading cannabis dispensary — where humans come first.";

  // Check if a headline exists. If it does, display it. If it doesn't, use SummaryHeadlineString.
  let SummaryHeadline =
    LocationData.about.summary.headline != ''
      ? LocationData.about.summary.headline
      : SummaryHeadlineString;

  return (
    <LocationPageWrapper
      Headline={Headline}
      LocationData={LocationData}
      Location={Location}
    >
      {/* ///////////// */}

      <SimpleSection
        BgColor={Theme.Color.Snow}
        BgQuery="placeholder_bg_4.jpg"
        BgAlt="Our Awesome Alt Tag"
        FluidHeight={true}
        Gutter={[0, 0, 0, 0]}
      />

      {/* ///////////// */}

      {/* ///////////// */}

      <StickyScrollSection
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
        Content={{
          Subheadline: 'Sierra Well ' + LocationData.name,
          Headline: SummaryHeadline,
          Body: LocationData.about.summary.body,
        }}
        Gallery={LocationData.about.summary.gallery}
      />

      {/* ///////////// */}

      {/* ///////////// */}

      <SplitSection Flex="row-reverse">
        <Block
          Padding={[1, 1, 1, 1]}
          Width={0.5}
          BgColor={Theme.Color.Nightsky}
          TextColor={Theme.Color.White}
        >
          <h2>From Seed to Soul.</h2>
          <Btn
            Label="Our Values"
            Destination="/company"
            BgColor={Theme.Color.Primary}
            TextColor={Theme.Color.White}
          />
        </Block>

        <Block
          Style="centered"
          BgColor={Theme.Color.White}
          BgQuery="placeholder_bg_4.jpg"
          BgAlt="Our Awesome Alt Tag"
          Width={0.5}
        />
      </SplitSection>

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
    </LocationPageWrapper>
  );
};

// The Template itself. Where it all begins.
const LocationLandingTemplate = ({ LocationData, Location }) => {
  return <TemplateLayout LocationData={LocationData} Location={Location} />;
};

export default LocationLandingTemplate;
