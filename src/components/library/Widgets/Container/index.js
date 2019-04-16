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
import DefaultWidget from '../Library/Default';
import ArticleWidget from '../Library/Article';
import SideHeaderWidget from '../Library/SideHeader';

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
      dots: true,
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
    return (
      <WidgetSlider>
        {WidgetContent.map((Content, index) => {
          switch (Content.Style) {
            case 'Article':
              return (
                <DefaultWidget
                  BgColor={Content.Meta.Generic.BgColor}
                  BgImage={Content.Meta.Generic.BgImage}
                  TextColor={Content.Meta.Generic.TextColor}
                  TintColor={Content.Meta.Generic.TintColor}
                  TintOpacity={Content.Meta.Generic.TintOpacity}
                  Destination={Content.Destination}
                  Subhead={Content.Meta.Generic.Subhead}
                  Headline={Content.Meta.Generic.Headline}
                  IconName={Content.Meta.Generic.IconName}
                  IconColor={Content.Meta.Generic.IconColor}
                  key={index}
                />
              );
            case 'Generic':
              return (
                <DefaultWidget
                  BgColor={Content.Meta.Generic.BgColor}
                  BgImage={Content.Meta.Generic.BgImage}
                  TextColor={Content.Meta.Generic.TextColor}
                  TintColor={Content.Meta.Generic.TintColor}
                  TintOpacity={Content.Meta.Generic.TintOpacity}
                  Destination={Content.Destination}
                  Subhead={Content.Meta.Generic.Subhead}
                  Headline={Content.Meta.Generic.Headline}
                  IconName={Content.Meta.Generic.IconName}
                  IconColor={Content.Meta.Generic.IconColor}
                  key={index}
                />
              );
          }
        })}
      </WidgetSlider>
    );
  }
}

const WidgetContainer = ({ WidgetContent, Flex }) => (
  <WidgetContainerStyle className="widget" Flex={Flex}>
    <WidgetContainerStyle.Inner>
      <WidgetType WidgetContent={WidgetContent} />
    </WidgetContainerStyle.Inner>
  </WidgetContainerStyle>
);

export default WidgetContainer;
