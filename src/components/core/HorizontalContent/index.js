// ScrollWrapper.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Styles
import styled from 'styled-components';
import './slider.scss';
import { createGlobalStyle } from 'styled-components';
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Wrapper Scrollssss
const WrapperLock = createGlobalStyle`
  .wrapper {
    overflow: hidden;
  }
`;

// The Slider Itself
class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleWheel = this.handleWheel.bind(this);
  }

  handleWheel(e) {
    // Disable defaultss
    e.preventDefault();

    // Previous / Next Slide based on mouse scroll
    if (e.deltaY < 0) {
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
      slidesToShow: 1.05,
      infinite: false
    };

    return (
      <>
        <WrapperLock />
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/vendor/slick.min.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/slick-theme.min.css"
          />
        </Helmet>
        <div onWheel={e => this.handleWheel(e)}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.children}
          </Slider>
        </div>
      </>
    );
  }
}

// The Content Itself
const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>
      <SimpleSlider>
        <HorizontalContentStyle.Slide bg="pink">
          <h3>1</h3>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide bg="palevioletred">
          <h3>2</h3>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide bg="red">
          <h3>3</h3>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide bg="maroon">
          <h3>4</h3>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide bg="black">
          <h3>5</h3>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide bg="lightblue">
          <h3>6</h3>
        </HorizontalContentStyle.Slide>
      </SimpleSlider>
    </HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent;
