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
  console.log(props.data.allPrismicLocation.edges[0].node.data.elements)
  return (
    <LocationLandingTemplate
      LocationData={
        locationLandingTransformer(props.data.allPrismicLocation.edges[0].node)
          .edges.node
      }
      elements={props.data.allPrismicLocation.edges[0].node.data.elements}
      Location={props.location}
      Headline={
        locationLandingTransformer(props.data.allPrismicLocation.edges[0].node)
          .edges.node.about.headline
      }
    />
  );
};

export default LocationLandingPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

// The post template's GraphQL query. Notice the slug
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const query = graphql`
  query($Id: String!) {
    allPrismicLocation(filter: { id: { eq: $Id } }) {
      edges {
        node {
          id
          tags
          uid

          # Load our Castle Component data.
          # ...PrismicLocationElementsHeroData
          # ...PrismicLocationElementsFullSplitSectionData
          # ...PrismicLocationElementsSimpleSectionData
          ...PrismicLocationElementsSplitSectionData
          ...PrismicLocationElementsStickyGalleryData
          # ...PrismicLocationElementsSplitImageHeroData
          # ...PrismicLocationElementsPromotionalStripData
          ...PrismicLocationElementsWidgetRowData

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
