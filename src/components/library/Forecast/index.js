// Forecast Component:
// This is the component to display a
// Forecast from a specific location.

// TODO: Fix CORS Console Error

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import axios from 'axios';

// Components
import Icon from 'elements/Icons';

// Styles
import ForecastStyle from 'components/library/Forecast/styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

class Forecast extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  state = {
    forecast: [],
  };

  // componentDidMount() {
  //   axios
  //     .get(
  //       'https://api.darksky.net/forecast/20fcdf5192dab046a8b9303c6f6d2667/37.8267,-122.4233'
  //     )
  //     .then(res => {
  //       const forecast = res.data;
  //       this.setState({ forecast });
  //     });
  // }

  render() {
    return (
      <ForecastStyle>
        <ForecastStyle.Top>
          <span>64</span>
        </ForecastStyle.Top>
        <ForecastStyle.Bottom>
          <span>Overcast Clouds</span>
          <span>45% Humidity</span>
        </ForecastStyle.Bottom>
      </ForecastStyle>
    );
  }
}

// const Forecast = ({}) => (
//   <ForecastStyle>
//     <ForecastStyle.Top>
//       <span>64</span>
//     </ForecastStyle.Top>
//     <ForecastStyle.Bottom>
//       <span>Overcast Clouds</span>
//       <span>45% Humidity</span>
//     </ForecastStyle.Bottom>
//   </ForecastStyle>
// );

export default Forecast;

//////////////////////////////////////////////////////////////////////
// End Component
