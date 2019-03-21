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
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Slide = styled.div`
  width: 100%;
  height: 100vh;
`;

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/vendor/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="/vendor/slick-theme.min.css" />
        </Helmet>
        <Slider {...settings}>{this.props.children}</Slider>
      </>
    );
  }
}

const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>
      <SimpleSlider>
        <div>
          <Slide>
            <h3>1</h3>
          </Slide>
        </div>
        <div>
          <Slide>
            <h3>2</h3>
          </Slide>
        </div>
        <div>
          <Slide>
            <h3>3</h3>
          </Slide>
        </div>
        <div>
          <Slide>
            <h3>4</h3>
          </Slide>
        </div>
        <div>
          <Slide>
            <h3>5</h3>
          </Slide>
        </div>
        <div>
          <Slide>
            <h3>6</h3>
          </Slide>
        </div>
      </SimpleSlider>
    </HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent;
