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
import { node } from 'prop-types';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Function to create our Categories Map
export const tagDataTransformer = tags => {
  if (tags) {
    let tagsMap = tags.map((tag, index) => {
      return {
        Name: tag.tag_name,
        Icon: tag.tag_icon,
        Slug: tag.tag_slug,
      };
    });

    return tagsMap;
  } else {
    return null;
  }
};

// Function to create our Categories Map
export const categoryDataTransformer = categories => {
  if (categories) {
    let categoriesMap = categories.map((category, index) => {
      return {
        node: {
          id: category.node.id,
          Name: category.node.data.name ? category.node.data.name.text : '',
          Icon: category.node.data.icon,
          Headline: category.node.data.headline,
          Slug: category.node.uid,
          Breadcrumb: {
            Destination: '/learn/all/',
            Label: 'All Questions',
          },
          PageTheme: {
            Color: {
              Background: category.node.data.color_background,
              Primary: category.node.data.color_primary,
              Secondary: category.node.data.color_secondary,
              Tertiary: category.node.data.color_tertiary,
            },
          },
          Tags: tagDataTransformer(category.node.data.tags),
        },
      };
    });

    return categoriesMap;
  } else {
    return 'null';
  }
};

//////////////////////////////////////////////////////////////////////
// End Component
