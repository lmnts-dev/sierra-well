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

// Widget Itself
const WidgetContainer = ({ WidgetContent }) => (
  <WidgetContainerStyle className="widget">
    <WidgetContainerStyle.Inner>
      <WidgetSlider>
        {WidgetContent.map((Content, index) => (
          <DefaultWidget
            BgColor={Content.BgColor}
            BgImage={Content.BgImage}
            TextColor={Content.TextColor}
            TintColor={Content.TintColor}
            TintOpacity={Content.TintOpacity}
            Destination={Content.Destination}
            Subhead={Content.Subhead}
            Headline={Content.Headline}
            IconName={Content.IconName}
            IconColor={Content.IconColor}
            key={index}
          />
        ))}
      </WidgetSlider>
    </WidgetContainerStyle.Inner>
  </WidgetContainerStyle>
);

export default WidgetContainer;
