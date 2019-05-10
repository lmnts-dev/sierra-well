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
import CastleSimpleSectionStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleSimpleSection Component
const CastleSimpleSection = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items;

  return (
    <CastleSimpleSectionStyle>
      <SimpleSection
        BgColor={primaryData.background_color}
        BgMatch="placeholder_bg_4.jpg"
        BgTint={primaryData.tint_opacity}
        BgAlt="Our Awesome Alt Tag"
        TextColor={primaryData.text_color}
        Style={primaryData.text_alignment}
      >
        <Block
          Style="centered"
          Padding={
            primaryData.padding
              ? primaryData.padding.replace(/\s/g, '').split(',')
              : null
          }
          maxWidth={0.5}
        >
          {/* Check for Headline */}
          <h2>
            {primaryData.headline.text
              ? primaryData.headline.text
              : 'Enter a headline...'}
          </h2>

          {/* Check for Body Text */}
          {primaryData.body_text ? (
            <p className="p-md">{primaryData.body_text} </p>
          ) : null}

          {/* Check for CTA */}
          <div className="cta-wrap">
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
                      key={index}
                    />
                  );
                })
              : null}
          </div>
        </Block>
      </SimpleSection>
    </CastleSimpleSectionStyle>
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
  fragment PrismicSpecialElementsSimpleSectionData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsSimpleSection {
          slice_type
          primary {
            headline {
              text
            }
            body_text
            subheadline
            text_color
            background_color
            text_alignment
            padding
            tint_color
            tint_opacity
            bg_image {
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
