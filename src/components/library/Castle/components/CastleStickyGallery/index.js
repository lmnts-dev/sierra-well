// StickyGallery component:
// slice_type: sticky_gallery

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import StickyScrollSection from 'components/library/Section/StickyScrollSection';

// Elements
import Block from 'components/library/Block';

// Style Overrides
import CastleStickyGalleryStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleSimpleSection Component
const CastleSimpleSection = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items;

  return (
    <CastleStickyGalleryStyle>
      <StickyScrollSection
        BgColor={Theme.Color.White}
        TextColor={Theme.Color.Nightsky}
        Content={{
          Subheadline: 'Elements',
          Headline: 'Hello Castle',
          Body: 'Lorem ipsum solor sit dit imet...',
        }}
        Gallery={[
          {
            Src: 'placeholder_bg_3.jpg',
            Alt: 'Lorem Ipsum',
          },
          {
            Src: 'placeholder_bg_3.jpg',
            Alt: 'Lorem Ipsum',
          },
          {
            Src: 'placeholder_bg_3.jpg',
            Alt: 'Lorem Ipsum',
          },
          {
            Src: 'placeholder_bg_3.jpg',
            Alt: 'Lorem Ipsum',
          },
        ]}
      />
    </CastleStickyGalleryStyle>
  );
};

export default CastleSimpleSection;

// GraphQL Queries:
// This is where you specify what data you need. It's fragment is
// used in the templated page query and passed into the Castle component.
// Example from the Special.js Template: https://www.dropbox.com/s/7d8hlm7yuqrlyi9/Screenshot%202019-05-08%2019.25.50.png?dl=0
//
// Basic Process:s
// 1. We run createPage() in gatsby-node.js
// 2. Query the needed data and pass it to a specified template.js. In the case
// above, it's Special/index.js. That template holds the GraphQL Query to pass said
// data and our fragment we make below down into the <Castle /> level component
// to identify the elements needed to build out the page content.
// 3. Rejoice.
//
// ///////////////////////////////////////////////////////////////////

export const query = graphql`
  fragment PrismicSpecialElementsStickyGalleryData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsStickyGallery {
          slice_type
        }
      }
    }
  }

  fragment PrismicQuestionElementsStickyGalleryData on PrismicQuestion {
    data {
      elements {
        ... on PrismicQuestionElementsStickyGallery {
          slice_type
        }
      }
    }
  }

  fragment PrismicGenericPageElementsStickyGalleryData on PrismicGenericPage {
    data {
      elements {
        ... on PrismicGenericPageElementsStickyGallery {
          slice_type
        }
      }
    }
  }

  fragment PrismicLocationElementsStickyGalleryData on PrismicLocation {
    data {
      elements {
        ... on PrismicLocationElementsStickyGallery {
          slice_type
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
