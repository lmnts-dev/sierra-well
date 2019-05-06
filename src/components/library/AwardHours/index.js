// SimpleListComponent:
// The SimpleList component.
// Example: https://www.dropbox.com/s/620exg22uz5bkyy/Screenshot%202019-05-06%2016.24.58.png?dl=0

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';
import AwardBadge from 'components/library/AwardBadge';
import SimpleList from 'components/library/SimpleList';

// Styles
import AwardHoursStyle from './styles.scss';
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const AwardHours = ({ Hours, TextColor }) => (
  <AwardHoursStyle TextColor={TextColor}>
    <AwardBadge
      Logo="leafly"
      Text="2018 Voted Best Boutique Dispensary"
      BgColor={Theme.Color.Primary}
      TextColor={Theme.Color.White}
    />
    <SimpleList
      TextColor={TextColor}
      List={Hours}
    />
  </AwardHoursStyle>
);

export default AwardHours;

//////////////////////////////////////////////////////////////////////
// End Component

