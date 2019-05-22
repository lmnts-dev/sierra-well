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

// Begin Component
//////////////////////////////////////////////////////////////////////

const WidgetInnerWrapper = ({ children, Destination }) => {
  if (Destination) {
    return (
      <Link className="widget-inner-wrapper" to={Destination}>
        {children}
      </Link>
    );
  } else {
    return <span className="widget-inner-wrapper">{children}</span>;
  }
};

const DefaultWidget = ({
  BgColor,
  BgImage,
  BgQuery,
  TextColor,
  TintColor,
  TintOpacity,
  Destination,
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

    <WidgetInnerWrapper Destination={Destination}>
      <WidgetStyle.Subhead className="widget-subheadline">
        {Subhead}
      </WidgetStyle.Subhead>
      <WidgetStyle.Headline className="widget-headline">
        {Headline}
      </WidgetStyle.Headline>
      <Icon className="svg-carat" Name="carat" Color={IconColor} />
      <WidgetStyle.Icon className={'fas fa-' + IconName} Color={IconColor} />
      {CallToAction ? <span class="cta-btn">{CallToAction}</span> : null}
    </WidgetInnerWrapper>
    {BgImageFile ? (
      <ImgMatch src={BgImageFile} AltText={Headline} />
    ) : null}
    {BgQuery ? <ImgQuery src={BgQuery} AltText={Headline} /> : null}
  </WidgetStyle>
);

export default DefaultWidget;

// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Function to create the Default Widget Map inside the Columns Map.
export const defaultWidgetDataTransformer = data => {
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
