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

// Constants
import { Theme } from 'constants/Theme';

// Styles
import { createGlobalStyle } from 'styled-components';
import HorizontalContentStyle from 'components/core/HorizontalContent/styles.scss';
import Widget from 'components/library/Widgets/Default';
import posed, { PoseGroup } from 'react-pose';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Wrapper Scrollssss
const WrapperLock = createGlobalStyle`
  .wrapper {
    overflow: hidden;
  }
`;

// Pose Animation
const WidgetItem = posed(Widget)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

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

const SlideColumns = () => (
  <>
    <HorizontalContentStyle.Column className="col">
      <HorizontalContentStyle.Column.Inner>
        <Widget
          BgColor={Theme.Color.Gunmetal}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="rocket"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Dank}
          BgImage="https://source.unsplash.com/1600x1200/?cannabis"
          TintColor={Theme.Color.Black}
          TintOpacity=".5"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="graduation-cap"
          Destination="/subpage"
        />
      </HorizontalContentStyle.Column.Inner>
    </HorizontalContentStyle.Column>

    <HorizontalContentStyle.Column className="col">
      <HorizontalContentStyle.Column.Inner>
        <Widget
          BgColor={Theme.Color.Tahoe}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.Snow}
          IconColor={Theme.Color.Snow}
          IconName="guitar"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.White}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.Black}
          IconColor={Theme.Color.Black}
          IconName="eye"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Sunset}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="smile"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Flower}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="fire"
          Destination="/subpage"
        />
      </HorizontalContentStyle.Column.Inner>
    </HorizontalContentStyle.Column>

    <HorizontalContentStyle.Column Divider className="divider">
      <HorizontalContentStyle.Column.Inner Divider />
    </HorizontalContentStyle.Column>

    <HorizontalContentStyle.Column className="col">
      <HorizontalContentStyle.Column.Inner>
        <Widget
          BgColor={Theme.Color.Slate}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.Black}
          IconColor={Theme.Color.Black}
          IconName="clock"
          Destination="/subpage"
        />
      </HorizontalContentStyle.Column.Inner>
    </HorizontalContentStyle.Column>

    <HorizontalContentStyle.Column className="col">
      <HorizontalContentStyle.Column.Inner>
        <Widget
          BgColor={Theme.Color.Nightsky}
          BgImage="https://source.unsplash.com/1600x1200/?marijuana"
          TintColor={Theme.Color.Black}
          TintOpacity=".5"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="moon"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Leaf}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="sun"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Dank}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.Black}
          IconColor={Theme.Color.Black}
          IconName="cloud"
          Destination="/subpage"
        />
      </HorizontalContentStyle.Column.Inner>
    </HorizontalContentStyle.Column>

    <HorizontalContentStyle.Column Divider className="divider">
      <HorizontalContentStyle.Column.Inner Divider />
    </HorizontalContentStyle.Column>

    <HorizontalContentStyle.Column className="col">
      <HorizontalContentStyle.Column.Inner>
        <Widget
          BgColor={Theme.Color.Black}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="rocket"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Sunset}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.Black}
          IconColor={Theme.Color.Black}
          IconName="rocket"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Tahoe}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.White}
          IconColor={Theme.Color.White}
          IconName="rocket"
          Destination="/subpage"
        />
        <Widget
          BgColor={Theme.Color.Dank}
          BgImage="none"
          Subhead="Subhead"
          Headline="Headline"
          TextColor={Theme.Color.Black}
          IconColor={Theme.Color.Black}
          IconName="rocket"
          Destination="/subpage"
        />
      </HorizontalContentStyle.Column.Inner>
    </HorizontalContentStyle.Column>
  </>
);

// The Content Itself
const HorizontalContent = ({ children }) => (
  <HorizontalContentStyle>
    <HorizontalContentStyle.Inner>
      <SimpleSlider>
        <HorizontalContentStyle.Slide>
          <HorizontalContentStyle.Slide.Inner>
            <SlideColumns />
          </HorizontalContentStyle.Slide.Inner>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide>
          <HorizontalContentStyle.Slide.Inner>
            <SlideColumns />
          </HorizontalContentStyle.Slide.Inner>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide>
          <HorizontalContentStyle.Slide.Inner>
            <SlideColumns />
          </HorizontalContentStyle.Slide.Inner>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide>
          <HorizontalContentStyle.Slide.Inner>
            <SlideColumns />
          </HorizontalContentStyle.Slide.Inner>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide>
          <HorizontalContentStyle.Slide.Inner>
            <SlideColumns />
          </HorizontalContentStyle.Slide.Inner>
        </HorizontalContentStyle.Slide>
        <HorizontalContentStyle.Slide>
          <HorizontalContentStyle.Slide.Inner>
            <SlideColumns />
          </HorizontalContentStyle.Slide.Inner>
        </HorizontalContentStyle.Slide>
      </SimpleSlider>
    </HorizontalContentStyle.Inner>
  </HorizontalContentStyle>
);

export default HorizontalContent;
