// templates/Location/Landing/index.js:
// This is the Location Landing page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LocationLandingTemplate from './layout';

// Transformers
import { locationLandingTransformer } from 'templates/Location/Transformer';

// Load Castle Fragments
import 'components/library/Castle';

// Data
import { graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationLandingPage = props => {
  return (
    <LocationLandingTemplate
      LocationData={
        locationLandingTransformer(props.data.allPrismicLocation.edges[0].node)
          .edges.node
      }
      elements={props.data.allPrismicLocation.edges[0].node.data.elements}
      Location={props.location}
      SpecialsPage={props.pageContext.Specials}
      Headline={
        locationLandingTransformer(props.data.allPrismicLocation.edges[0].node)
          .edges.node.about.headline
      }
    />
  );
};

export default LocationLandingPage;

//////////////////////////////////////////////////////////////////////
// End Component
