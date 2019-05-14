// SideHeaderWidgetStyle.js:

// Core
import React from 'react';

// Styles
import SideHeaderWidgetStyle from './styles.scss';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SideHeaderWidget = ({ Header, IntroCopy, BodyCopy, TextColor }) => (
  <SideHeaderWidgetStyle TextColor={TextColor} className="widget-content">
    <SideHeaderWidgetStyle.Inner>
      <SideHeaderWidgetStyle.Header>{Header}</SideHeaderWidgetStyle.Header>
      <SideHeaderWidgetStyle.Body>
        <SideHeaderWidgetStyle.IntroCopy>
          {IntroCopy}
        </SideHeaderWidgetStyle.IntroCopy>
        <SideHeaderWidgetStyle.BodyCopy>
          {BodyCopy}
        </SideHeaderWidgetStyle.BodyCopy>
      </SideHeaderWidgetStyle.Body>
    </SideHeaderWidgetStyle.Inner>
  </SideHeaderWidgetStyle>
);

export default SideHeaderWidget;

// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Function to create the Title Widget Map inside the Columns Map.
export const sideHeaderWidgetDataTransformer = data => {
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
