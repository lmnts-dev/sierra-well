// Media.js:
// For switching between Media contexts and screen
// widths. For example, Mobile vs Desktop content.
// Learn more: https://github.com/contra/react-responsive

// Core
import React from 'react';
import Media from 'react-media';

// Constants
import { Base } from 'constants/styles/Base';

// Begin Component
//////////////////////////////////////////////////////////////////////

class DeviceContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    let Small = this.props.Small;
    let Large = this.props.Large;

    return (
      <div>
        <Media query={{ maxWidth: Base.Media.Width.Md }}>
          {matches => (matches ? Small : Large)}
        </Media>
      </div>
    );
  }
}

export default DeviceContent;
