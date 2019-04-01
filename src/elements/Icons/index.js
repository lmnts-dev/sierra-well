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

const Error = () => {
  <i className="fas fa-exclamation-circle" />;
};

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
        <IconStyle className="ico">
          <i className={'fas fa-' + props.Name} />
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
