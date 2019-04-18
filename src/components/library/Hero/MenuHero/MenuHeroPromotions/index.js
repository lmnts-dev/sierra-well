// Widgets/Container.js
// This is the holder / wrapper around Widget Content.

// Core
import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Styles
import PromotionSliderStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Promotion Slider:
// For Promotions on the Deskotop Menu Page.
class PromotionSlider extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // Slick Settings
    const settings = {
      dots: true,
      speed: 500,
      arrows: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      fade: true,
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

const MenuHeroPromotions = ({}) => (
  <PromotionSliderStyle>
    <PromotionSlider>
      <PromotionSliderStyle.Slide>
        <div>
          <span>100% Free Delivery.</span>
          <span>No Minimum Order.</span>
        </div>
        <div className="promo-button">
          <Link to="/specials">View all Deals</Link>
        </div>
      </PromotionSliderStyle.Slide>
      <PromotionSliderStyle.Slide>
        <div>
          <span>Post-420 Sale.</span>
          <span>No Minimum Order.</span>
        </div>
        <div className="promo-button">
          <Link to="/specials">View all Deals</Link>
        </div>
      </PromotionSliderStyle.Slide>
      <PromotionSliderStyle.Slide>
        <div>
          <span>Loyalty Program.</span>
          <span>Get More as You Keep Ordering.</span>
        </div>
        <div className="promo-button">
          <Link to="/specials">View all Deals</Link>
        </div>
      </PromotionSliderStyle.Slide>
    </PromotionSlider>
  </PromotionSliderStyle>
);

export default MenuHeroPromotions;
