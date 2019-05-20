// templates/Location/Landing/index.js:
// This is the main / default Menu page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
// import LearnTagTemplate from './layout';

// Transformers
import { locationLandingTransformer } from 'templates/Location/Transformer';

// Data
import { graphql } from 'gatsby';
import MenuTemplate from 'templates/Location/Menu/layout';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MainMenuPage = props => {
  if (props.pageContext.NearbySlug) {
    // If it's a Nearby location:
    // &This pageContext is passed from gatsby-node.js
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

export default MainMenuPage;

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
