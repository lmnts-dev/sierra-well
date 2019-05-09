// SimpleSection component:
// slice_type: simple_section

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import SimpleSection from 'components/library/Section/SimpleSection';

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
  const repeatableData = data.items;

  return (
    <CastleSplitSectionStyle>
      <SimpleSection
        BgColor={Theme.Color.Snow}
        TextColor={Theme.Color.Nightsky}
        Gutter={[1, 0, 1, 1]}
      >
        <Block
          Style="centered"
          BgColor={Theme.Color.Snow}
          BgMatch="placeholder_bg_4.jpg"
          BgAlt="Our Awesome Alt Tag"
          Width={0.5}
        />

        <Block
          Padding={[1, 1, 1, 1]}
          Width={0.5}
          TextColor={Theme.Color.Nightsky}
        >
          <h2>Discretion is our first priority — so why not make it free?</h2>
          <p className="p-md">
            Free delivery available within 15 miles of our Reno and Carson City
            stores, Nevada addresses only.
          </p>
          <Btn
            Label="View Our Menu"
            Destination="/menu"
            BgColor={Theme.Color.Primary}
            TextColor={Theme.Color.White}
          />
        </Block>
      </SimpleSection>
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
  fragment PrismicSpecialElementsSplitSectionData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsSplitSection {
          slice_type
        }
      }
    }
  }

  fragment PrismicQuestionElementsSplitSectionData on PrismicQuestion {
    data {
      elements {
        ... on PrismicQuestionElementsSplitSection {
          slice_type
        }
      }
    }
  }

  fragment PrismicGenericPageElementsSplitSectionData on PrismicGenericPage {
    data {
      elements {
        ... on PrismicGenericPageElementsSplitSection {
          slice_type
        }
      }
    }
  }

  fragment PrismicLocationElementsSplitSectionData on PrismicLocation {
    data {
      elements {
        ... on PrismicLocationElementsSplitSection {
          slice_type
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
