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
    case 'Carat':
      return (
        <IconStyle Color={props.Color}>
          <Carat />
        </IconStyle>
      );
    default:
      return (
        <IconStyle Color={props.Color}>
          <Error />
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
