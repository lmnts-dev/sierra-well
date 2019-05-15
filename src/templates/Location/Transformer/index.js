// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Function to create our Columns Map
export const locationLandingTransformer = data => {
  if (data) {
    let locationMap = {
      edges: {
        node: {
          id: '',
          slug: '',
          name: '',
          geography: {
            city: '',
            state: '',
            country: '',
          },
          status: {
            delivery: '',
            store: '',
          },
          meta: {
            reserveSpot: '',
            menu: '',
            maps: '',
          },
          contactDetails: {
            phone: '',
            location: {
              address: '',
              state: '',
            },
            hours: {
              days: '',
              startTime: '',
              endTime: '',
            },
          },
          nearby: {
            name: '',
            slug: '',
          },
          about: {
            headline: '',
            PageTheme: {
              Color: {
                Background: '',
                Primary: '',
                Secondary: '',
                Tertiary: '',
              },
            },
            summary: {
              headline: '',
              body: '',
              gallery: {
                Src: '',
                Alt: '',
              },
            },
          },
        },
      },
    };

    return locationMap;
  } else {
    return 'null';
  }
};

//////////////////////////////////////////////////////////////////////
// End Component
