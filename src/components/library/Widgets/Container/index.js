// Widgets/Container.js
// This is the holder / wrapper around Widget Content.

// Core
import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Styles
import WidgetContainerStyle from './styles.scss';

// Components
import ArticleWidget from '../Library/Article';
import CrossWidget from '../Library/Cross';
import DefaultWidget from '../Library/Default';
import LogoWidget from '../Library/Logo';
import MenuWidget from '../Library/MenuWidget';
import SideHeaderWidget from '../Library/SideHeader';
import SideForecast from '../Library/SideForecast';
import SideWidget from '../Library/SideWidget';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Widget Slider:
// For WidgetContainers with multiple widgets
// inside of them.
class WidgetSlider extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // Slick Settings
    const settings = {
      dots: this.props.Dots ? this.props.Dots : true,
      speed: 1500,
      arrows: false,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      autoplay: true,
      infinite: true,
    };

    return (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/vendor/slick.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/slick-theme.min.css"
          />
        </Helmet>
        <Slider ref={g => (this.slider = g)} {...settings}>
          {this.props.children}
        </Slider>
      </>
    );
  }
}

// WidgetType
class WidgetType extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  // Render
  render() {
    const WidgetContent = this.props.WidgetContent;

    // If the Widget Content is > 1, then make a Slider.
    if (WidgetContent.length > 1) {
      return (
        // In this case we wrap the entire element in the
        // WidgetContainerStyle.Inner tag for the shadow and border-radii.
        //
        // We're only accepting the following Widgets for this section:
        // Article
        // SideForecast
        // SideWidget
        // Default

        <WidgetContainerStyle.Inner className="widget-inner">
          <WidgetSlider Dots={this.props.Dots}>
            {WidgetContent.map((Content, index) => {
              switch (Content.Style) {
                case 'Article':
                  return (
                    <DefaultWidget
                      BgColor={Content.Meta.Generic.BgColor}
                      BgImage={Content.Meta.Generic.BgImage}
                      BgQuery={Content.Meta.Generic.BgQuery}
                      TextColor={Content.Meta.Generic.TextColor}
                      TintColor={Content.Meta.Generic.TintColor}
                      TintOpacity={Content.Meta.Generic.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.Generic.Subhead}
                      Headline={Content.Meta.Generic.Headline}
                      IconName={Content.Meta.Generic.IconName}
                      IconColor={Content.Meta.Generic.IconColor}
                      CallToAction={Content.Meta.Generic.CallToAction}
                      key={index}
                    />
                  );
                case 'SideWidget':
                  return (
                    <SideWidget
                      BgColor={Content.Meta.SideWidget.BgColor}
                      BgImage={Content.Meta.SideWidget.BgImage}
                      BgQuery={Content.Meta.SideWidget.BgQuery}
                      TextColor={Content.Meta.SideWidget.TextColor}
                      TintColor={Content.Meta.SideWidget.TintColor}
                      TintOpacity={Content.Meta.SideWidget.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.SideWidget.Subhead}
                      Header={Content.Meta.SideWidget.Header}
                      IconName={Content.Meta.SideWidget.IconName}
                      IconColor={Content.Meta.SideWidget.IconColor}
                      BgImageFile={Content.Meta.SideWidget.BgImageFile}
                      key={index}
                    />
                  );
                case 'MenuWidget':
                  return (
                    <MenuWidget
                      BgColor={Content.Meta.MenuWidget.BgColor}
                      BgImage={Content.Meta.MenuWidget.BgImage}
                      BgQuery={Content.Meta.MenuWidget.BgQuery}
                      TextColor={Content.Meta.MenuWidget.TextColor}
                      TintColor={Content.Meta.MenuWidget.TintColor}
                      TintOpacity={Content.Meta.MenuWidget.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.MenuWidget.Subhead}
                      Headline={Content.Meta.MenuWidget.Headline}
                      IconName={Content.Meta.MenuWidget.IconName}
                      IconColor={Content.Meta.MenuWidget.IconColor}
                      CallToAction={Content.Meta.MenuWidget.CallToAction}
                      key={index}
                    />
                  );
                case 'SideForecast':
                  return (
                    <SideForecast
                      BgColor={Content.Meta.SideForecast.BgColor}
                      BgImage={Content.Meta.SideForecast.BgImage}
                      TextColor={Content.Meta.SideForecast.TextColor}
                      TintColor={Content.Meta.SideForecast.TintColor}
                      TintOpacity={Content.Meta.SideForecast.TintOpacity}
                      Destination={Content.Destination}
                      Location={Content.Meta.SideForecast.Location}
                      key={index}
                    />
                  );
                case 'Generic':
                  return (
                    <DefaultWidget
                      BgColor={Content.Meta.Generic.BgColor}
                      BgImageFile={Content.Meta.Generic.BgImageFile}
                      BgQuery={Content.Meta.Generic.BgQuery}
                      TextColor={Content.Meta.Generic.TextColor}
                      TintColor={Content.Meta.Generic.TintColor}
                      TintOpacity={Content.Meta.Generic.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.Generic.Subhead}
                      Headline={Content.Meta.Generic.Headline}
                      IconName={Content.Meta.Generic.IconName}
                      IconColor={Content.Meta.Generic.IconColor}
                      CallToAction={Content.Meta.Generic.CallToAction}
                      HideCarat={Content.Meta.Generic.HideCarat}
                      key={index}
                    />
                  );
                case 'LogoWidget':
                  return (
                    <LogoWidget
                      BgColor={Content.Meta.LogoWidget.BgColor}
                      BgImageFile={Content.Meta.LogoWidget.BgImageFile}
                      BgQuery={Content.Meta.LogoWidget.BgQuery}
                      TextColor={Content.Meta.LogoWidget.TextColor}
                      TintColor={Content.Meta.LogoWidget.TintColor}
                      TintOpacity={Content.Meta.LogoWidget.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.LogoWidget.Subhead}
                      Headline={Content.Meta.LogoWidget.Headline}
                      IconName={Content.Meta.LogoWidget.IconName}
                      IconColor={Content.Meta.LogoWidget.IconColor}
                      CallToAction={Content.Meta.LogoWidget.CallToAction}
                      key={index}
                    />
                  );
              }
            })}
          </WidgetSlider>
        </WidgetContainerStyle.Inner>
      );
    }

    // If there is only 1 Widget.
    else {
      return (
        // In this case we wrap the INDIVIDUAL elements in the
        // WidgetContainerStyle.Inner tag for the shadow and border-radii
        // if needed, allowing for more customized Widget Components.
        //
        // We're only accepting the following Widgets for this section:
        // Article
        // Cross
        // SideHeader
        // SideForecast
        // SideWidget
        // Default
        <>
          {WidgetContent.map((Content, index) => {
            switch (Content.Style) {
              case 'Cross':
                return <CrossWidget key={index} />;
              case 'Article':
                return (
                  <WidgetContainerStyle.Inner
                    className="widget-inner"
                    key={index}
                  >
                    <DefaultWidget
                      BgColor={Content.Meta.Generic.BgColor}
                      BgImage={Content.Meta.Generic.BgImage}
                      BgQuery={Content.Meta.Generic.BgQuery}
                      TextColor={Content.Meta.Generic.TextColor}
                      TintColor={Content.Meta.Generic.TintColor}
                      TintOpacity={Content.Meta.Generic.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.Generic.Subhead}
                      Headline={Content.Meta.Generic.Headline}
                      IconName={Content.Meta.Generic.IconName}
                      IconColor={Content.Meta.Generic.IconColor}
                    />
                  </WidgetContainerStyle.Inner>
                );
              case 'Generic':
                return (
                  <WidgetContainerStyle.Inner
                    className="widget-inner"
                    key={index}
                  >
                    <DefaultWidget
                      BgColor={Content.Meta.Generic.BgColor}
                      BgImageFile={Content.Meta.Generic.BgImageFile}
                      BgQuery={Content.Meta.Generic.BgQuery}
                      TextColor={Content.Meta.Generic.TextColor}
                      TintColor={Content.Meta.Generic.TintColor}
                      TintOpacity={Content.Meta.Generic.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.Generic.Subhead}
                      Headline={Content.Meta.Generic.Headline}
                      IconName={Content.Meta.Generic.IconName}
                      IconColor={Content.Meta.Generic.IconColor}
                      CallToAction={Content.Meta.Generic.CallToAction}
                      HideCarat={Content.Meta.Generic.HideCarat}
                    />
                  </WidgetContainerStyle.Inner>
                );
              case 'LogoWidget':
                return (
                  <WidgetContainerStyle.Inner
                    className="widget-inner"
                    key={index}
                  >
                    <LogoWidget
                      BgColor={Content.Meta.LogoWidget.BgColor}
                      BgImageFile={Content.Meta.LogoWidget.BgImageFile}
                      BgQuery={Content.Meta.LogoWidget.BgQuery}
                      TextColor={Content.Meta.LogoWidget.TextColor}
                      TintColor={Content.Meta.LogoWidget.TintColor}
                      TintOpacity={Content.Meta.LogoWidget.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.LogoWidget.Subhead}
                      Headline={Content.Meta.LogoWidget.Headline}
                      IconName={Content.Meta.LogoWidget.IconName}
                      IconColor={Content.Meta.LogoWidget.IconColor}
                      CallToAction={Content.Meta.LogoWidget.CallToAction}
                    />
                  </WidgetContainerStyle.Inner>
                );
              case 'MenuWidget':
                return (
                  <WidgetContainerStyle.Inner
                    className="widget-inner"
                    key={index}
                  >
                    <MenuWidget
                      BgColor={Content.Meta.MenuWidget.BgColor}
                      BgImage={Content.Meta.MenuWidget.BgImage}
                      BgQuery={Content.Meta.MenuWidget.BgQuery}
                      TextColor={Content.Meta.MenuWidget.TextColor}
                      TintColor={Content.Meta.MenuWidget.TintColor}
                      TintOpacity={Content.Meta.MenuWidget.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.MenuWidget.Subhead}
                      Headline={Content.Meta.MenuWidget.Headline}
                      IconName={Content.Meta.MenuWidget.IconName}
                      IconColor={Content.Meta.MenuWidget.IconColor}
                      CallToAction={Content.Meta.MenuWidget.CallToAction}
                      key={index}
                    />
                  </WidgetContainerStyle.Inner>
                );
              case 'SideWidget':
                return (
                  <WidgetContainerStyle.Inner
                    className="widget-inner"
                    key={index}
                  >
                    <SideWidget
                      BgColor={Content.Meta.SideWidget.BgColor}
                      BgImage={Content.Meta.SideWidget.BgImage}
                      BgQuery={Content.Meta.SideWidget.BgQuery}
                      TextColor={Content.Meta.SideWidget.TextColor}
                      TintColor={Content.Meta.SideWidget.TintColor}
                      TintOpacity={Content.Meta.SideWidget.TintOpacity}
                      Destination={Content.Destination}
                      Subhead={Content.Meta.SideWidget.Subhead}
                      Header={Content.Meta.SideWidget.Header}
                      IconName={Content.Meta.SideWidget.IconName}
                      BgImageFile={Content.Meta.SideWidget.BgImageFile}
                      IconColor={Content.Meta.SideWidget.IconColor}
                    />
                  </WidgetContainerStyle.Inner>
                );
              case 'SideForecast':
                return (
                  <WidgetContainerStyle.Inner
                    className="widget-inner"
                    key={index}
                  >
                    <SideForecast
                      BgColor={Content.Meta.SideForecast.BgColor}
                      BgImage={Content.Meta.SideForecast.BgImage}
                      TextColor={Content.Meta.SideForecast.TextColor}
                      TintColor={Content.Meta.SideForecast.TintColor}
                      TintOpacity={Content.Meta.SideForecast.TintOpacity}
                      Destination={Content.Destination}
                      Location={Content.Meta.SideForecast.Location}
                      key={index}
                    />
                  </WidgetContainerStyle.Inner>
                );
              case 'SideHeader':
                return (
                  <SideHeaderWidget
                    Header={Content.Meta.SideHeader.Header}
                    IntroCopy={Content.Meta.SideHeader.IntroCopy}
                    BodyCopy={Content.Meta.SideHeader.BodyCopy}
                    TextColor={Content.Meta.SideHeader.TextColor}
                    key={index}
                  />
                );
            }
          })}
        </>
      );
    }
  }
}

const WidgetContainer = ({ WidgetContent, Flex, Dots, Width }) => (
  <WidgetContainerStyle className="widget" Flex={Flex} Width={Width}>
    <WidgetType Dots={Dots} WidgetContent={WidgetContent} />
  </WidgetContainerStyle>
);

export default WidgetContainer;
