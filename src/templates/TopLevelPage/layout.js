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
import SlideGroup from 'components/core/HorizontalContent/SlideGroup';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Function to create the Default Widget Map inside the Columns Map.
const defaultWidgetDataTransformer = data => {
  if (data) {
    let widgetMap = data.map((widget, index) => {
      return {
        // Begin WidgetContent
        Flex: widget.widget_height_fraction ? widget.widget_height_fraction : 1,
        Width: widget.widget_width_multiple ? widget.widget_width_multiple : 6,
        WidgetContent: [
          {
            Destination: widget.widget_destination,
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: widget.widget_bg_color,
                BgImage: '',
                BgQuery: widget.widget_background_image.localFile
                  ? widget.widget_background_image.localFile.childImageSharp
                      .fluid
                  : false,
                Subhead: widget.widget_subheadline,
                Headline: widget.widget_headline.text,
                TextColor: widget.widget_text_color,
                IconColor: widget.widget_text_color,
                IconName: widget.widget_icon_class,
                TintColor: widget.tint_color ? widget.tint_color : '',
                TintOpacity: widget.tint_opacity ? widget.tint_opacity : '',
                IconSize: '',
              },
            },
          },
        ],
        // End WidgetContent
      };
    });

    return widgetMap;
  } else {
    let widgetMap = [];
    return widgetMap;
  }
};

// Function to create the Title Widget Map inside the Columns Map.
const titleWidgetDataTransformer = data => {
  if (data) {
    let widgetMap = [
      {
        // Begin WidgetContent
        Flex: 1,
        Width: 6,
        WidgetContent: [
          {
            Destination: null,
            Style: 'SideHeader',
            Meta: {
              SideHeader: {
                Header: data.widget_headline.text,
                IntroCopy: data.widget_intro_copy,
                BodyCopy: data.widget_body_copy,
                TextColor: Theme.Color.Nightsky,
              },
            },
          },
        ],
        // End WidgetContent
      },
    ];

    return widgetMap;
  } else {
    let widgetMap = [];
    return widgetMap;
  }
};

// Large Device Content
const LargeContent = ({ node, id }) => {
  const columns = node.dashboard_link.document[0].data.body;

  // Function to create our Columns Map
  const columnDataTransformer = data => {
    if (columns.length > 0) {
      let columnMap = data.map((column, index) => {
        switch (column.slice_type) {
          case 'title_column':
            return {
              Type: column.slice_type,
              Widgets: titleWidgetDataTransformer(column.primary),
            };
          case 'column':
            return {
              Type: column.slice_type,
              Widgets: defaultWidgetDataTransformer(column.items),
            };
          case 'divider':
            return {
              Type: column.slice_type,
              Widgets: defaultWidgetDataTransformer(column.items),
            };
        }
      });

      return columnMap;
    } else {
      return 'null';
    }
  };

  return (
    <HorizontalContent>
      <SlideGroup
        className={id}
        SlidesData={[{ Name: id, Columns: columnDataTransformer(columns) }]}
      />
      {console.log(node)}
      {console.log('columnDataTransformer(columns):')}
      {console.log(columnDataTransformer(columns))}
      {console.log('columns:')}
      {console.log(columns)}
    </HorizontalContent>
  );
};

// Small Device Content
const SmallContent = () => (
  <div>
    <h1>Mobile content</h1>
  </div>
);

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
      <SmallContent />
    </Device>
  </Layout>
);

export default TopLevelPageTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
