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
        opacity: 1,
        beforeChildren: true,
        transition: {
          opacity: { ease: 'easeIn', delay: 400, duration: 400 },
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 500,
          ease: Theme.Base.Transition.Ease,
        },
      },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup animateOnMount={true}>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;

//////////////////////////////////////////////////////////////////////
// End Component
