// HeroStrip Component:
// The HeroStrip component, typically used in Hero components.
// Example: https://www.dropbox.com/s/fkq5n663abznqpt/Screenshot%202019-04-19%2018.20.13.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';
import { Link } from 'gatsby';

// Styles
import HeroStripStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const HeroStrip = ({ Items, BgColor, TextColor }) => (
  <HeroStripStyle BgColor={BgColor} TextColor={TextColor}>
    <HeroStripStyle.Inner TextColor={TextColor}>
      {Items.map((Item, index) => {
        if (Item.Destination) {
          return (
            <div key={index} className="hero-strip-item focus">
              <Link to={Item.Destination}>
                <span>{Item.Caption}</span>
                <span>{Item.Label}</span>
              </Link>
            </div>
          );
        } else {
          return (
            <div key={index} className="hero-strip-item">
              <div>
                <span>{Item.Caption}</span>
                <span>{Item.Label}</span>
              </div>
            </div>
          );
        }
      })}
    </HeroStripStyle.Inner>
  </HeroStripStyle>
);

export default HeroStrip;

//////////////////////////////////////////////////////////////////////
// End Component
