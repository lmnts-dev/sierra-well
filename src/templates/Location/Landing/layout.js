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

// Castle.js by L&M
import Castle from 'components/library/Castle';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// TemplateLayout Component to pass data where it needs to go for
// the theming of the hero as well as the LearnSection and what
// to display in those cards.
const TemplateLayout = ({ LocationData, Location, Headline, elements }) => {
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
      {/* Check if elements exist. If so, run Castle. If not, display nothing. */}
      {elements ? <Castle Bricks={elements} Location={Location.href} /> : null}

      {/* ///////////// */}
    </LocationPageWrapper>
  );
};

// The Template itself. Where it all begins.
const LocationLandingTemplate = ({ LocationData, Location, elements }) => {
  return (
    <TemplateLayout
      LocationData={LocationData}
      Location={Location}
      elements={elements}
    />
  );
};

export default LocationLandingTemplate;
