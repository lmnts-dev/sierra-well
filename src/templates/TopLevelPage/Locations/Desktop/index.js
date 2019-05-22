// templates/Location/Menu/index.js:
// This is the Location Menu Landing page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Transformers
import { locationLandingTransformer } from 'templates/Location/Transformer';

// Data
import { graphql } from 'gatsby';
import MenuTemplate from './layout';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationMenuPage = props => {
  if (props.pageContext.NearbySlug) {
    // If it's a Nearby location:
    // This pageContext is passed from gatsby-node.js
    return (
      <MenuTemplate
        NearbySlug={props.pageContext.NearbySlug}
        OrderContext={props.pageContext.OrderContext}
        NearbyName={props.pageContext.NearbyName}
        LocationData={
          locationLandingTransformer(
            props.data.allPrismicLocation.edges[0].node
          ).edges.node
        }
      />
    );
  } else {
    // If it isn't a Nearby location:
    return (
      <MenuTemplate
        OrderContext={props.pageContext.OrderContext}
        LocationData={
          locationLandingTransformer(
            props.data.allPrismicLocation.edges[0].node
          ).edges.node
        }
      />
    );
  }
};

export default LocationMenuPage;

//////////////////////////////////////////////////////////////////////
// End Component
