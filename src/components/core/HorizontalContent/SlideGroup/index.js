// SlideGroup.js:
// For displaying SlideGroups.

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Constants
// import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Styles
import HorizontalContentStyle from '../styles.scss';

// Components
import SlideColumn from '../SlideColumn';
import SlideTransformer from '../SlideTransformer';
import { WrapperLock } from './../../WrapperControl';
import Icon from 'elements/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Slider Arrows
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
      // These are eslint errors for accessibility below.
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <Icon className="svg-carat" Name="carat" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
      // These are eslint errors for accessibility below.
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      <Icon className="svg-carat" Name="carat" />
    </div>
  );
}

// The SlideGroup Itself
export class SlideGroup extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleWheel = this.handleWheel.bind(this);
  }

  handleWheel(e) {
    // Disable defaults:
    // e.preventDefault();

    // Previous / Next Slide based on mouse scroll
    if (e.deltaY < 0 || e.deltaX < 0 || e.deltaX > 0) {
      this.slider.slickPrev();
    } else {
      this.slider.slickNext();
    }
  }

  render() {
    // React-Slick Settings
    // Read more: https://react-slick.neostack.com/
    const settings = {
      dots: false,
      speed: 1200,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      variableWidth: true,
      infinite: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    // Slides Data
    const SlidesData = this.props.SlidesData;

    // Return Slides
    return (
      <>
        <WrapperLock />

        {/* Helmet to initiate Slick Styles */}
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/vendor/slick.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/slick-theme.min.css"
          />
        </Helmet>

        {/* Initiate our Previous / Next Slide based on mouses scroll */}
        <div onWheel={e => this.handleWheel(e)}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {/* Loop through our Slide Data */}
            {/* Pass our Slide Columns data to the Slide */}
            {SlidesData[0].Columns.map((Column, index) => {
              // If our Column isn't a Divider
              if (Column.Type != 'divider') {
                // Pass our Widgets data to our Columns
                return <SlideColumn key={index} Widgets={Column.Widgets} />;
              }

              // If our Column is a Divider
              else {
                return <SlideColumn key={index} Divider />;
              }
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default SlideGroup;
