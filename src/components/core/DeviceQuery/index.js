// DeviceQuery.js:
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

class DeviceQuery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Large = this.props.Large;
    const Small = this.props.Small;

    console.log(this.props);

    return (
      <div>
        <Media
          query={{ maxWidth: Base.Media.Width.Md }}
          render={() => <Small />}
        />

        <Media
          query={{ minWidth: Base.Media.Width.Md }}
          render={() => <Large />}
        />
      </div>
    );
  }
}

export default DeviceQuery;
