// templates/Location/Landing/index.js:
// This is the Location Landing page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
// import LearnTagTemplate from './layout';

// Data
import { graphql } from 'gatsby';
import MenuTemplate from './layout';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationMenuPage = props => {
  if (props.pageContext.NearbySlug) {
    // If it's a Nearby location:
    // &This pageContext is passed from gatsby-node.js
    return (
      <MenuTemplate
        NearbySlug={props.pageContext.NearbySlug}
        NearbyName={props.pageContext.NearbyName}
        LocationData={props.data.allLocationsJson.edges[0].node}
      />
    );
  } else {
    // If it isn't a Nearby location:
    return (
      <MenuTemplate LocationData={props.data.allLocationsJson.edges[0].node} />
    );
  }
};

export default LocationMenuPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

// The post template's GraphQL query. Notice the slug
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const query = graphql`
  query($Slug: String!) {
    allLocationsJson(filter: { slug: { eq: $Slug } }) {
      edges {
        node {
          id
          slug
          name
          headline
          geography {
            city
            state
            country
          }
          status {
            delivery
            store
          }
          meta {
            reserveSpot
            menu
            maps
          }
          contactDetails {
            phone
            location {
              address
              state
            }
            hours {
              days
              startTime
              endTime
            }
          }
          nearby {
            name
            slug
          }
          about {
            PageTheme {
              Color {
                Background
                Primary
                Secondary
                Tertiary
              }
            }
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
