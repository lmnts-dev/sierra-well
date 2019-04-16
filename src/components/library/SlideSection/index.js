// SlideSection.js:

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import { Link } from 'gatsby';

// Components
import SectionWidgetContainer from 'components/library/Widgets/Container/SectionWidget';
import Btn from 'components/library/Btn';

// Constants
import { Theme } from 'constants/Theme';

// Styles
import SlideSectionStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Section Slider:
// For displaying widgets within a SlideSection.

class SectionSlider extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // Slick Settings
    const settings = {
      dots: true,
      speed: 550,
      arrows: false,
      autoplaySpeed: 4000,
      slidesToShow: 1.1,
      // autoplay: true,
      infinite: false,
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
        <Slider ref={h => (this.slider = h)} {...settings}>
          {this.props.children}
        </Slider>
      </>
    );
  }
}

// The SubLevel Page Itself
const SlideSection = ({ Widgets, SectionSize }) => (
  <SlideSectionStyle>
    <SlideSectionStyle.Inner>
      <SlideSectionStyle.SectionHeader>
        <SlideSectionStyle.Headline>
          <i className="fas fa-ghost" />
          <span>Header</span>
        </SlideSectionStyle.Headline>
        <SlideSectionStyle.CallToAction>
          <Btn
            Destination="/"
            BgColor="inherit"
            Label="View All"
            IconClass="carat"
          />
        </SlideSectionStyle.CallToAction>
      </SlideSectionStyle.SectionHeader>

      <SectionSlider>
        {Widgets.map((Widget, index) => (
          <SectionWidgetContainer
            WidgetContent={Widget}
            SectionSize={SectionSize}
            key={index}
          />
        ))}
      </SectionSlider>
    </SlideSectionStyle.Inner>
  </SlideSectionStyle>
);

export default SlideSection;
