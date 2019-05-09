// Castle.js
// This is the page builder for Elements.
// Future regex for matching {{ variables }} https://regex101.com/r/xgOodL/1

// Core
import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Styles
import CastleStyle from './styles.scss';

// Components
import CastleHero from './components/CastleHero';
import CastleFullSplitSection from './components/CastleFullSplitSection';
import CastleSimpleSection from './components/CastleSimpleSection';
import CastleSplitSection from './components/CastleSplitSection';
import CastleSplitImageHero from './components/CastleSplitImageHero';
import CastlePromotionalStrip from './components/CastlePromotionalStrip';
import CastleStickyGallery from './components/CastleStickyGallery';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Castle
class CastleBuilder extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  // Render
  render() {
    const bricks = this.props.Bricks;
    const location = this.props.Location;

    return (
      <>
        {bricks.map((brick, index) => {
          switch (brick.slice_type) {
            case 'hero':
              return (
                <CastleHero data={brick} location={location} key={index} />
              );
            case 'full_split_section':
              return (
                <CastleFullSplitSection
                  data={brick}
                  location={location}
                  key={index}
                />
              );
            case 'split_section':
              return (
                <CastleSplitSection
                  data={brick}
                  location={location}
                  key={index}
                />
              );
            case 'split_image_hero':
              return (
                <CastleSplitImageHero
                  data={brick}
                  location={location}
                  key={index}
                />
              );
            case 'promotional_strip':
              return (
                <CastlePromotionalStrip
                  data={brick}
                  location={location}
                  key={index}
                />
              );
            case 'sticky_gallery':
              return (
                <CastleStickyGallery
                  data={brick}
                  location={location}
                  key={index}
                />
              );
            case 'simple_section':
              return (
                <CastleSimpleSection
                  data={brick}
                  location={location}
                  key={index}
                />
              );
          }
        })}
      </>
    );
  }
}

const Castle = ({ Bricks, Location }) => (
  <CastleStyle>
    <CastleBuilder Bricks={Bricks} Location={Location} />
  </CastleStyle>
);

export default Castle;
