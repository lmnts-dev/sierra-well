// CastleWidgetRow component:
// slice_type: widget_row

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Components
import SlideSection from 'components/library/Section/SlideSection';

// Style Overrides
import CastleWidgetRowStyle from './styles.scss';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The CastleWidgetRow Component
const CastleWidgetRow = ({ data, location }) => {
  const primaryData = data.primary;
  const repeatableData = data.items.length > 0 ? data.items : 0;

  // Function to create our Items map.
  const widgetContentTransformer = data => {
    if (data != 0) {
      // Create a new map from Prismic Data.
      let itemList = data.map((item, index) => {
        return {
          // Begin WidgetContent
          Flex: 1,
          WidgetContent: [
            {
              Destination: item.widget_destination,
              Style: 'Generic',
              Meta: {
                Generic: {
                  BgColor: item.widget_bg_color,
                  BgQuery: item.widget_background_image.localFile
                    ? item.widget_background_image.localFile.childImageSharp
                        .fluid
                    : false,
                  Subhead: item.widget_subheadline,
                  Headline: item.widget_headline.text,
                  TextColor: item.widget_text_color,
                  IconColor: item.widget_text_color,
                  IconName: item.widget_icon_class, // FontAwesome Icon Name
                  TintColor: item.widget_tint_color
                    ? item.widget_tint_color
                    : Theme.Color.Black,
                  TintOpacity: item.widget_tint_opacity,
                  IconSize: '',
                },
              },
            },
          ],
          // End WidgetContent
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
    <CastleWidgetRowStyle>
      <Block maxWidth="100%">
        <SlideSection
          Widgets={widgetContentTransformer(repeatableData)}
          SectionSize={primaryData.section_size}
          Header={
            primaryData.headline.text
              ? primaryData.headline.text
              : 'Keep Browsing'
          }
          Gutter={
            primaryData.padding
              ? primaryData.padding.replace(/\s/g, '').split(',')
              : null
          }
          Theme={{
            TextColor: primaryData.text_color,
            BgColor: primaryData.bg_color,
          }}
          SliderSettings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: primaryData.autoplay == 'On' ? true : false,
            arrows: true,
          }}
        />
      </Block>
    </CastleWidgetRowStyle>
  );
};

export default CastleWidgetRow;

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
  fragment PrismicSpecialElementsWidgetRowData on PrismicSpecial {
    data {
      elements {
        ... on PrismicSpecialElementsWidgetRow {
          slice_type
          primary {
            headline {
              text
            }
            section_size
            text_color
            bg_color
            padding
            autoplay
          }
          items {
            widget_headline {
              text
            }
            widget_background_image {
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
            widget_destination
            widget_subheadline
            widget_icon_class
            widget_text_color
            widget_bg_color
            widget_tint_color
            widget_tint_opacity
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
