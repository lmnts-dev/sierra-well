// SlideGroup.js:
// For displaying SlideGroups.

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import WidgetContainer from 'components/library/Widgets/Container/';
import SlideContainer from './../SlideContainer';
import WrapperLock from './../WrapperLock';

// Styles
import { createGlobalStyle } from 'styled-components';
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

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
    // Slick Settings
    const settings = {
      dots: false,
      speed: 1500,
      arrows: false,
      slidesToShow: 1.15,
      infinite: false,
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
