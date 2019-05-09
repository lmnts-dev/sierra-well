// Simple Hero component:
// slice_type: hero
// example: https://www.dropbox.com/s/vp50dnga8ix2n8t/Screenshot%202019-05-07%2018.37.41.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import SimpleHero from 'components/library/Hero/SimpleHero';
import SocialStrip from 'components/library/SocialStrip';
import Bread from 'components/library/Breadcrumb';
import Btn from 'components/library/Btn/';

// Elements
import Block from 'components/library/Block';

// Style Overrides
import CastleHeroStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleHero Component
const CastleHero = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items;

  return (
    <CastleHeroStyle>
      <SimpleHero
        Padding={
          primaryData.padding
            ? primaryData.padding.replace(/\s/g, '').split(',')
            : null
        }
        Background={primaryData.background_color}
        BgQuery={
          primaryData.background_image.localFile
            ? primaryData.background_image.localFile.childImageSharp.fluid
            : false
        }
        TextColor={primaryData.text_color}
        Tint={primaryData.tint_opacity}
      >
        <Block AlignItems="flex-start" Width={1} maxWidth={0.75}>
          {/* Check for Breadcrumbs */}
          {primaryData.breadcrumb_url ? (
            <Bread
              Crumbs={[
                {
                  Destination: primaryData.breadcrumb_url,
                  Label: primaryData.breadcrumb_label,
                },
              ]}
              TextColor={primaryData.text_color}
            />
          ) : null}

          {/* Check for Headline */}
          <h1 itemProp="name">
            {primaryData.headline.text
              ? primaryData.headline.text
              : 'Enter a headline...'}
          </h1>
          {primaryData.body_text ? (
            <p className="p-lg">{primaryData.body_text} </p>
          ) : null}

          {/* Check for CTA */}
          {repeatableData[0].cta_destination != null
            ? repeatableData.map((item, index) => {
                return (
                  <>
                    <Btn
                      Label={item.cta_label}
                      BgColor={item.cta_bg_color}
                      TextColor={item.cta_text_color}
                      Destination={item.cta_destination}
                      IconPosition={item.cta_icon ? 'left' : null}
                      IconClass={item.cta_icon ? item.cta_icon : null}
                      IconFas
                    />
                  </>
                );
              })
            : null}

          {/* Check if Social Sharing is enabled */}
          {primaryData.social_sharing.toLowerCase() == 'yes' ? (
            <SocialStrip
              Margin={[0.35, 0, 0, 0]}
              Location={location}
              TextColor={primaryData.text_color}
            />
          ) : null}
        </Block>
      </SimpleHero>
    </CastleHeroStyle>
  );
};

export default CastleHero;

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
  fragment PrismicSpecialElementsHeroData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsHero {
          slice_type
          primary {
            headline {
              text
            }
            body_text
            text_alignment
            background_color
            text_color
            tint_color
            tint_opacity
            padding
            social_sharing
            breadcrumb_url
            breadcrumb_label
            background_image {
              localFile {
                id
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          items {
            cta_label
            cta_destination
            cta_bg_color
            cta_text_color
            cta_icon
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
