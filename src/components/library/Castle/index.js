// Castle.js
// This is the page builder for Elements.

// Core
import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles

// Styles
import CastleStyle from './styles.scss';

// Components
import CastleHero from './components/CastleHero';

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

    console.log(location);

    return (
      <>
        {bricks.map((brick, index) => {
          switch (brick.slice_type) {
            case 'hero':
              return (
                <CastleHero
                  data={brick.primary}
                  location={location}
                  key={index}
                />
              );
            case 'simple_section':
              return (
                <>
                </>
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
