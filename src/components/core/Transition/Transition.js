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
        transition: {
          opacity: { ease: 'easeIn', delay: 500, duration: 250 },
        },
      },
      exit: {
        opacity: 0,
        transition: {
          delay: 0,
          duration: 250,
          ease: Theme.Base.Transition.Ease,
        },
      },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup animateOnMount={true}>
        <RoutesContainer
          // For our .wrapper's flex behavior.
          style={{ flex: 1 }}
          className="transition-wrapper"
          key={location.pathname}
        >
          {children}
        </RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;

//////////////////////////////////////////////////////////////////////
// End Component
