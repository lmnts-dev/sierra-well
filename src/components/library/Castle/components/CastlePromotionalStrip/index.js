// PromotionalStrip component:
// slice_type: simple_section

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import HeroStrip from 'components/library/HeroStrip';

// Elements
import Block from 'components/library/Block';

// Style Overrides
import CastleSplitSectionStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleSplitSection Component
const CastleSplitSection = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items.length > 0 ? data.items : 0;

  // Function to create our Items map.
  const promotionalItemsTransformer = data => {
    if (data != 0) {
      // Create a new map from Prismic Data.
      let itemList = data.map((item, index) => {
        return {
          Caption: item.caption,
          Label: item.label,
          Destination: item.destination ? item.destination : null,
        };
      });

      // Return new map.
      return itemList;
    } else {
      // Else, don't return anything.
      return null;
    }
  };

  return (
    <CastleSplitSectionStyle>
      <HeroStrip
        BgColor={
          primaryData.bg_color ? primaryData.bg_color : Theme.Color.White
        }
        TextColor={
          primaryData.text_color ? primaryData.text_color : Theme.Color.Nightsky
        }
        Items={promotionalItemsTransformer(repeatableData)}
      />
    </CastleSplitSectionStyle>
  );
};

export default CastleSplitSection;

// GraphQL Queries:
// This is where you specify what data you need. It's fragment is
// used in the templated page query and passed into the Castle component.
// Example from the Special.js Template: https://www.dropbox.com/s/7d8hlm7yuqrlyi9/Screenshot%202019-05-08%2019.25.50.png?dl=0

// Basic Process:s
// 1. We run createPage() in gatsby-node.js
// 2. Query the needed data and pass it to a specified template.js. In the case
// above, it's Special/index.js. That template holds the GraphQL Query to pass said
// data and our fragment we make below down into the <Castle /> level component
// to identify the elements needed to build out the page content.
// 3. Rejoice.

///////////////////////////////////////////////////////////////////

export const query = graphql`
  fragment PrismicSpecialElementsPromotionalStripData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsPromotionalStrip {
          slice_type
          primary {
            bg_color
            text_color
          }
          items {
            caption
            label
            destination
          }
        }
      }
    }
  }

  fragment PrismicLocationElementsPromotionalStripData on PrismicLocation {
    data {
      elements {
        ... on PrismicLocationElementsPromotionalStrip {
          slice_type
          primary {
            bg_color
            text_color
          }
          items {
            caption
            label
            destination
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
