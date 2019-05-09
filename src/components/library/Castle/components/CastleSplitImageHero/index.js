// SplitImageHero component:
// slice_type: split_image_hero

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import Btn from 'components/library/Btn/';
import Bread from 'components/library/Breadcrumb/';
import SimpleHero from 'components/library/Hero/SimpleHero';
import ImgMatch from 'components/core/ImgMatch';

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
      <SimpleHero
        imgRight="0"
        imgBottom="0"
        imgWidth="50%"
        Size="2"
        Background={Theme.Color.Tahoe}
        TextColor={Theme.Color.White}
      >
        <Block AlignItems="flex-start" Width={0.5}>
          <Bread
            Crumbs={[
              {
                Destination: '/specials',
                Label: 'Specials',
              },
            ]}
            TextColor={Theme.Color.White}
          />
          <h1>100% Free Delivery</h1>
          <p className="p-md">Any size order, no minimum required.</p>
          <Btn
            Label="View Our Menu"
            Destination="/menu"
            BgColor={Theme.Color.Primary}
            TextColor={Theme.Color.White}
          />
        </Block>
        <Block className="hero-img">
          <ImgMatch src="hero-phone.png" alt="100% Free Delivery" />
        </Block>
      </SimpleHero>
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
  fragment PrismicSpecialElementsSplitImageHeroData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsSplitImageHero {
          slice_type
        }
      }
    }
  }

  fragment PrismicQuestionElementsSplitImageHeroData on PrismicQuestion {
    data {
      elements {
        ... on PrismicQuestionElementsSplitImageHero {
          slice_type
        }
      }
    }
  }

  fragment PrismicGenericPageElementsSplitImageHeroData on PrismicGenericPage {
    data {
      elements {
        ... on PrismicGenericPageElementsSplitImageHero {
          slice_type
        }
      }
    }
  }

  fragment PrismicLocationElementsSplitImageHeroData on PrismicLocation {
    data {
      elements {
        ... on PrismicLocationElementsSplitImageHero {
          slice_type
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
