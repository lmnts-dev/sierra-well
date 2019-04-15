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
import posed, { PoseGroup } from 'react-pose';

// Constants
import { Theme } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Styles
import { createGlobalStyle } from 'styled-components';
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Wrapper Scroll
const WrapperLock = createGlobalStyle`
  .wrapper {
    @media (min-width: ${Base.Media.Width.Md + 1 + 'px'}) {
      overflow: hidden;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      overflow-y: scroll; /* has to be scroll, not auto */
      -webkit-overflow-scrolling: touch;
    }
  }

  .slick-slider {
    touch-action: none !important;
  }
`;

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
      infinite: false,
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

export const SlideDivider = () => (
  <HorizontalContentStyle.Column Divider className="divider">
    <HorizontalContentStyle.Column.Inner Divider />
  </HorizontalContentStyle.Column>
);

// The SlideColumn Itself
export const SlideColumn = ({ children }) => (
  <HorizontalContentStyle.Column className="col">
    <HorizontalContentStyle.Column.Inner className="col-inner">
      {children}
    </HorizontalContentStyle.Column.Inner>
  </HorizontalContentStyle.Column>
);

// The Slide Itself
export const Slide = ({ children }) => (
  <HorizontalContentStyle.Slide>
    <HorizontalContentStyle.Slide.Inner>
      {children}
    </HorizontalContentStyle.Slide.Inner>
  </HorizontalContentStyle.Slide>
);

// The Horizontal Content Itself
export const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>{children}</HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent