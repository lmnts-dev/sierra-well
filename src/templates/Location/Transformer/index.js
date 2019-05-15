// Transformer:
// This is for taking Prismic location.data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any location.data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Function to create our Columns Map
export const locationLandingTransformer = location => {
  if (location) {
    let locationMap = {
      edges: {
        node: {
          id: location.id,
          slug: location.uid,
          name: location.data.name.text,
          geography: {
            city: location.data.geo_city,
            state: location.data.geo_state,
            country: location.data.geo_country,
          },
          status: {
            delivery: location.data.status_delivery,
            store: location.data.status_store,
          },
          meta: {
            reserveSpot: location.data.meta_reserve_spot_link,
            menu: location.data.meta_menu,
            maps: location.data.meta_google_maps_url,
          },
          contactDetails: {
            phone: location.data,
            location: {
              address: location.data.geo_location_address,
              state: location.data.geo_location_state,
            },
            hours: location.data.hours,
          },
          nearby: location.data.nearby_locations,
          about: {
            headline: location.data.about_headline.text,
            PageTheme: {
              Color: {
                Background: location.data.color_background,
                Primary: location.data.color_primary,
                Secondary: location.data.color_secondary,
                Tertiary: location.data.color_tertiary,
              },
            },
            summary: {
              headline: location.data.about_headline.text,
              body: 'Lorem ipsum solor sit dit imet',
              gallery: [
                {
                  Src: 'placeholder_bg_5.png',
                  Alt: 'Where humans come first.',
                },
                {
                  Src: 'placeholder_bg_5.png',
                  Alt: 'Where humans come first.',
                },
              ],
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
