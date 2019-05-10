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
        imgLeft={primaryData.direction == 'normal' ? null : '0'}
        imgRight={primaryData.direction == 'normal' ? '0' : null}
        imgBottom="0"
        imgWidth="50%"
        Size="2"
        className="simple-hero"
        Background={primaryData.background_color}
        JustifyContent={primaryData.direction == 'normal' ? null : 'flex-end'}
        BgQuery={
          primaryData.background_image.localFile
            ? primaryData.background_image.localFile.childImageSharp.fluid
            : false
        }
        TextColor={primaryData.text_color}
        Tint={primaryData.tint_opacity}
      >
        <Block AlignItems="flex-start" Width={0.5}>
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
          <h1>
            {primaryData.headline.text
              ? primaryData.headline.text
              : 'Enter a headline...'}
          </h1>

          {/* Check for Body Text */}
          {primaryData.body_text ? (
            <p className="p-lg">{primaryData.body_text} </p>
          ) : null}

          {/* Check for CTA */}
          {repeatableData[0].cta_destination != null
            ? repeatableData.map((item, index) => {
                return (
                  <Btn
                    Label={item.cta_label}
                    BgColor={item.cta_bg_color}
                    TextColor={item.cta_text_color}
                    Destination={item.cta_destination}
                    IconPosition={item.cta_icon ? 'left' : null}
                    IconClass={item.cta_icon ? item.cta_icon : null}
                    IconFas
                  />
                );
              })
            : null}
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
          primary {
            headline {
              text
            }
            image {
              alt
              localFile {
                id
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
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
            body_text
            background_color
            text_color
            direction
            breadcrumb_label
            breadcrumb_url
            social_sharing
            tint_color
            tint_opacity
            padding
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
