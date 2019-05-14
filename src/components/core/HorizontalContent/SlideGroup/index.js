// SlideGroup.js:
// For displaying SlideGroups.

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Constants
// import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import SlideContainer from './../SlideContainer';
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
      speed: 1500,
      arrows: true,
      slidesToShow: 1.15,
      variableWidth: true,
      infinite: false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 0.8,
            slidesToScroll: 1.1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 0.5,
            slidesToScroll: 1.5,
          },
        },
      ],
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
            {console.log(SlidesData)}
            {SlidesData.map((Slide, index) => {
              // Pass our Slide Columns data to the Slide
              return <SlideContainer Columns={Slide.Columns} key={index} />;
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default SlideGroup;
