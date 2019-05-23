// locations.js:
// This is the locations page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Templates
import LocationsTemplate from 'templates/TopLevelPage/Locations/';

// Transformers
import { locationLandingTransformer } from 'templates/Location/Transformer';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Render Page
const LocationsPage = props => (
  <LocationsTemplate
    LocationData={
      locationLandingTransformer(props.data.allPrismicLocation.edges[0].node)
        .edges.node
    }
  />
);

export default LocationsPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

// The post template's GraphQL query. Notice the slug
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const query = graphql`
  query {
    allPrismicLocation(filter: { uid: { eq: "brooklyn" } }) {
      edges {
        node {
          id
          tags
          uid
          data {
            name {
              text
            }
            status_delivery
            status_store
            geo_city
            geo_state
            geo_country
            geo_location_address
            geo_location_state
            phone
            hours {
              days
              start_time
              end_time
            }
            meta_reserve_spot_link {
              url
            }
            meta_menu {
              url
            }
            meta_google_maps_url {
              url
            }
            nearby_locations {
              nearby_name
              nearby_slug
              color_background
              color_primary
              color_secondary
              color_tertiary
            }
            about_headline {
              text
            }
            color_background
            color_primary
            color_secondary
            color_tertiary
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
