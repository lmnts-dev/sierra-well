// SideForecastStyle.js:

// Core
import React from 'react';
import { Link } from 'gatsby';

// Styles
import SideForecastStyle from './styles.scss';

// Components
import Forecast from '../../../Forecast';
import Icon from 'elements/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SideForecast = ({
  BgColor,
  BgImage,
  Location,
  Subhead,
  TextColor,
  TintColor,
  TintOpacity,
  Destination,
  IconName,
  IconColor,
}) => (
  <SideForecastStyle
    BgColor={BgColor}
    BgImage={BgImage}
    TextColor={TextColor}
    TintColor={TintColor}
    TintOpacity={TintOpacity}
    className="widget-content"
  >
    <Link to={Destination}>
      <Icon className="svg-carat" Name="carat" Color={IconColor} />
      <SideForecastStyle.Header>{Location}</SideForecastStyle.Header>
      <SideForecastStyle.Body>
        <Forecast Location={Location} />
      </SideForecastStyle.Body>
    </Link>
  </SideForecastStyle>
);

export default SideForecast;
