// Default Widget.js:

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import WidgetStyle from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Components
import Icon from 'elements/Icons';
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import MenuOverlayToggle from 'components/library/ContentOverlay/Menu';
import Btn from 'components/library/Btn/';

// Begin Component
//////////////////////////////////////////////////////////////////////

const MenuWidget = ({
  BgColor,
  BgImage,
  BgQuery,
  TextColor,
  TintColor,
  TintOpacity,
  Subhead,
  Headline,
  IconColor,
  IconName,
  BgImageFile,
  BgImageAltText,
  CallToAction,
}) => (
  <WidgetStyle
    BgColor={BgColor}
    BgImage={BgImage}
    TextColor={BgImageFile ? Theme.Color.White : TextColor}
    TintColor={TintColor}
    TintOpacity={TintOpacity}
    className="widget-content"
  >
    {TintColor || TintOpacity ? <figure className="tint" /> : null}
    <span className="widget-inner-wrapper">
      <MenuOverlayToggle>
        <WidgetStyle.Subhead className="widget-subheadline">
          {Subhead}
        </WidgetStyle.Subhead>
        <WidgetStyle.Headline className="widget-headline">
          {Headline}
        </WidgetStyle.Headline>
        <Btn
          IconClass="expand"
          Label="View Menu"
          BgColor={IconColor}
          TextColor={Theme.Color.White}
          IconPosition="left"
          Pseudo
          IconFas
        />
        <Icon className="svg-carat" Name="carat" Color={IconColor} />
        <WidgetStyle.Icon className={'fas fa-' + IconName} Color={IconColor} />
        {CallToAction ? <span class="cta-btn">{CallToAction}</span> : null}
      </MenuOverlayToggle>
    </span>

    {BgImageFile ? (
      <ImgMatch src={BgImageFile} AltText={BgImageAltText} />
    ) : null}
    {BgQuery ? <ImgQuery src={BgQuery} AltText={BgImageAltText} /> : null}
  </WidgetStyle>
);

export default MenuWidget;

// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Function to create the Default Widget Map inside the Columns Map.
export const MenuWidgetDataTransformer = data => {
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
