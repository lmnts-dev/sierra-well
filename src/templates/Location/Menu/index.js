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

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationMenuPage = props => {
  // Define our Slugs
  // let CategorySlug = props.pageContext.CategorySlug;
  // let TagSlug = props.pageContext.TagSlug;

  // Define our Data Objects
  // let CategoryData = {};
  // let TagData = {};

  return (
    <h1>
      The menu is alive!
      {console.log(props.data.allLocationsJson.edges)}
    </h1>
  );
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
