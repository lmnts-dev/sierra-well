// templates/Learn.js:
// This is the template for Learn pages.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import SpecialsListings from 'components/library/SpecialsListings';

// Template Specific Components
import LocationPageWrapper from '../Components/LocationPageWrapper';

// Castle.js by L&M
import Castle from 'components/library/Castle';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// TemplateLayout Component to pass data where it needs to go for
// the theming of the hero as well as the LearnSection and what
// to display in those cards.
const TemplateLayout = ({
  LocationData,
  Location,
  Headline,
  SpecialsPage,
  elements,
}) => {
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

  if (SpecialsPage == true) {
    return (
      <LocationPageWrapper
        Headline={Headline}
        LocationData={LocationData}
        Location={Location}
        SpecialsPage={SpecialsPage}
      >
        <SpecialsListings
          BgColor={LocationData.about.PageTheme.Color.Background}
          TextColor={LocationData.about.PageTheme.Color.Primary}
          LocationData={LocationData}
          PageLocation={Location}
        />
        {/* ///////////// */}
      </LocationPageWrapper>
    );
  } else {
    return (
      <LocationPageWrapper
        Headline={Headline}
        LocationData={LocationData}
        Location={Location}
        SpecialsPage={SpecialsPage}
      >
        {/* Check if elements exist. If so, run Castle. If not, display nothing. */}
        {elements ? (
          <Castle Bricks={elements} Location={Location.href} />
        ) : null}

        {/* ///////////// */}
      </LocationPageWrapper>
    );
  }
};

// The Template itself. Where it all begins.
const LocationLandingTemplate = ({
  LocationData,
  Location,
  elements,
  SpecialsPage,
}) => {
  return (
    <TemplateLayout
      LocationData={LocationData}
      Location={Location}
      elements={elements}
      SpecialsPage={SpecialsPage}
    />
  );
};

export default LocationLandingTemplate;
