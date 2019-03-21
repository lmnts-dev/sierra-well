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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1.04,
      slidesToScroll: 1,
    };

    const Scroll = e => {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
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
          <link
            rel="stylesheet"
            type="text/css"
            href="/vendor/slick.horizontal.js"
          />
        </Helmet>
        <Slider
          onWheel={e => this.Scroll(e)}
          className="side-scroll"
          {...settings}
        >
          {this.props.children}
        </Slider>
      </>
    );
  }
}

const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>
      <SimpleSlider>
        <Slide>
          <h3>1</h3>
        </Slide>
        <Slide>
          <h3>2</h3>
        </Slide>
        <Slide>
          <h3>3</h3>
        </Slide>
        <Slide>
          <h3>4</h3>
        </Slide>
        <Slide>
          <h3>5</h3>
        </Slide>
        <Slide>
          <h3>6</h3>
        </Slide>
      </SimpleSlider>
    </HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent;
