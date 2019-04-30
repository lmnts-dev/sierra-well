// Icons Component:
//
// https://fontawesome.com/icons/

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import IconStyle from './styles.scss';

// Icon Files
import Carat from './SVG/Carat';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const Icon = props => {
  switch (props.Name) {
    case 'carat':
      return (
        <IconStyle className="ico">
          <Carat />
        </IconStyle>
      );
    default:
      return (
        <IconStyle Color={props.Color} className="ico">
          <i className={'fas fab fa-' + props.Name} />
        </IconStyle>
      );
  }
};

// const Icon = ({ name }) => {
//   <IconStyle>
//     <IconsLibrary name={name} />
//   </IconStyle>;
// };

export default Icon;

///////////////
