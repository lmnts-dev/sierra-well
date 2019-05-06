// SimpleListComponent:
// The SimpleList component.
// Example: https://www.dropbox.com/s/620exg22uz5bkyy/Screenshot%202019-05-06%2016.24.58.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';
import ImgMatch from 'components/core/ImgMatch';

// Styles
import AwardBadgeStyle from './styles.scss';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const AwardHours = ({ Text, TextColor, BgColor }) => (
  <AwardBadgeStyle TextColor={TextColor} BgColor={BgColor}>
    <ImgMatch src="logos/leafly.png" AltText="Leafly" />
    <span>{Text}</span>
  </AwardBadgeStyle>
);

export default AwardHours;

//////////////////////////////////////////////////////////////////////
// End Component
