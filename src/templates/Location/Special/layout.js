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
import PageTabs from 'components/library/PageTabs';

// Template Specific Components
import LocationPageWrapper from '../Components/LocationPageWrapper';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// TemplateLayout Component to pass data where it needs to go for
// the theming of the hero as well as the LearnSection and what
// to display in those cards.
const TemplateLayout = ({ LocationData, Location, Headline }) => {
  return (
    <LocationPageWrapper
      Headline={Headline}
      LocationData={LocationData}
      Location={Location}
    >

      {/* ///////////// */}

      {/* ///////////// */}

      <QuestionFooter HideCategories />

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
