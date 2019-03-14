// Transition.js:
// For page transitions and transition groups.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';

// Vendor
import posed, { PoseGroup } from 'react-pose';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: {
        x: 0,
        opacity: 1,
        delay: 0,
        beforeChildren: true,
        transition: {
          ease: Theme.Base.Transition.Ease,
        },
      },
      exit: {
        opacity: 0,
        x: 0,
        transition: {
          ease: Theme.Base.Transition.Ease,
        },
      },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup animateOnMount={false}>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;

//////////////////////////////////////////////////////////////////////
// End Component
