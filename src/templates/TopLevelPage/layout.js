// templates/Question.js:
// This is the Question template of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';

// Components
import { HorizontalContent } from 'components/core/HorizontalContent';
import VerticalContent from 'components/core/VerticalContent';
import SlideGroup from 'components/core/HorizontalContent/SlideGroup';
import SlideSection from 'components/library/Section/SlideSection';

// Data Transfomers
import { columnDataTransformer } from 'components/core/HorizontalContent/SlideColumn';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const LargeContent = ({ node, id }) => {
  const columns = node.dashboard_link.document[0].data.body;

  return (
    <HorizontalContent>
      <SlideGroup
        className={id}
        SlidesData={[{ Name: id, Columns: columnDataTransformer(columns) }]}
      />
      {console.log(columnDataTransformer(columns))}
    </HorizontalContent>
  );
};

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
                  ? item.widget_background_image.localFile.childImageSharp.fluid
                  : false,
                Subhead: item.widget_subheadline,
                Headline: item.widget_headline.text,
                TextColor: item.widget_text_color,
                IconColor: item.widget_text_color,
                IconName: item.widget_icon_class, // FontAwesome Icon Name
                TintColor: item.widget_tint_color
                  ? item.widget_tint_color
                  : Theme.Color.Black,
                TintOpacity: item.tint_opacity,
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

// Small Device Content
const SmallContent = ({ node, id }) => {
  const sections = node.body;

  return (
    <VerticalContent>
      {sections.map((section, index) => {
        return (
          <SlideSection
            key={index}
            Widgets={widgetContentTransformer(section.items)}
            SectionSize={
              section.primary.section_height_multiple
                ? section.primary.section_height_multiple
                : 10
            }
            Header={section.primary.section_headline.text}
            Theme={{
              TextColor: Theme.Color.Nightsky,
              BgColor: 'none',
            }}
            SliderSettings={{
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:
                section.primary.section_autoplay == 'Yes' ? true : false,
              arrows: section.primary.section_arrows == 'Yes' ? true : false,
            }}
          />
        );
      })}

      {/* {console.log(sections)}
      {console.log(widgetContentTransformer(sections[0].items))} */}
    </VerticalContent>
  );
};

// The Question Template
const TopLevelPageTemplate = ({ data, node, id, elements }) => (
  <Layout
    BgColor={
      node.color_background ? node.color_background : Theme.Color.Background
    }
    PrimaryColor={
      node.color_primary ? node.color_primary : Theme.Color.Nightsky
    }
    SecondaryColor={
      node.color_secondary ? node.color_secondary : Theme.Color.Nightsky
    }
    TertiaryColor={
      node.color_tertiary ? node.color_tertiary : Theme.Color.White
    }
  >
    <Device Query="Desktop">
      <LargeContent node={node} id={id} />
    </Device>

    <Device Query="Mobile">
      <SmallContent node={node} id={id} />
    </Device>
  </Layout>
);

export default TopLevelPageTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
