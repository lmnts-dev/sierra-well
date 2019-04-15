// DeviceQuery.js:
// For switching between Media contexts and screen
// widths. For example, Mobile vs Desktop content.
// We're using Pure CSS for this method.

// Core
import React from 'react';

// Styles
import DeviceQuery from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

class Device extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Query = this.props.Query;

    if (Query == 'Mobile') {
      return <DeviceQuery.Mobile>{this.props.children}</DeviceQuery.Mobile>;
    }

    if (Query == 'Desktop') {
      return <DeviceQuery.Desktop>{this.props.children}</DeviceQuery.Desktop>;
    }
  }
}
export default Device;
