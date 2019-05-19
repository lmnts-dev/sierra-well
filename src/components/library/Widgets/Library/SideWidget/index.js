// SideWidgetStyle.js:

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import SideWidgetStyle from './styles.scss';

// Components
import Icon from 'elements/Icons';
import ImgQuery from 'components/core/ImgQuery';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SideWidget = ({
  BgColor,
  BgQuery,
  BgImage,
  Header,
  Subhead,
  TextColor,
  TintColor,
  TintOpacity,
  Destination,
  IconName,
  IconColor,
}) => (
  <SideWidgetStyle
    BgColor={BgColor}
    BgImage={BgImage}
    TextColor={TextColor}
    TintColor={TintColor}
    TintOpacity={TintOpacity}
    className="widget-content"
  >
    <Link to={Destination}>
      <SideWidgetStyle.Header>{Header}</SideWidgetStyle.Header>
      <Icon className="svg-carat" Name="carat" Color={IconColor} />
      <SideWidgetStyle.Body>
        <SideWidgetStyle.Subhead>{Subhead}</SideWidgetStyle.Subhead>
      </SideWidgetStyle.Body>
      <SideWidgetStyle.Icon
        className={'fas fa-' + IconName}
        Color={IconColor}
      />
    </Link>
    {BgQuery ? <ImgQuery src={BgQuery} AltText={BgImageAltText} /> : null}
  </SideWidgetStyle>
);

export default SideWidget;

// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Function to create the Default Widget Map inside the Columns Map.
export const sideWidgetDataTransformer = data => {
  if (data) {
    let widgetMap = [
      {
        // Begin WidgetContent
        Flex: data.widget_height_fraction ? data.widget_height_fraction : 1,
        Width: data.widget_width_multiple ? data.widget_width_multiple : 6,
        WidgetContent: [
          {
            Destination: data.widget_destination,
            Style: 'SideWidget',
            Meta: {
              SideWidget: {
                BgColor: data.widget_bg_color,
                BgImage: '',
                BgQuery: data.widget_background_image.localFile
                  ? data.widget_background_image.localFile.childImageSharp.fluid
                  : false,
                Subhead: data.widget_subheadline,
                Header: data.widget_headline.text,
                TextColor: data.widget_text_color,
                IconColor: data.widget_text_color,
                IconName: data.widget_icon_class,
                TintColor: data.tint_color ? data.tint_color : '',
                TintOpacity: data.tint_opacity ? data.tint_opacity : '',
                IconSize: '',
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
