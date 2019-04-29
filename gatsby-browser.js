import React from 'react';
import AppProvider from 'store/provider';
import WrapPageElementWithTransition from 'helpers/wrapPageElement';

import { transitionDelay } from 'components/core/Transition/Transition.js';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
  s;
};

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   if (location.action === 'PUSH') {
//     window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
//     console.log('PUSH');
//   } else {
//     const savedPosition = getSavedScrollPosition(location);
//     window.setTimeout(
//       () => window.scrollTo(...(savedPosition || [0, 0])),
//       transitionDelay
//     );
//   }
//   return false;
// };

export const shouldUpdateScroll = () => false;

export const onRouteUpdate = () =>
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);

// Page Transitions
export const wrapPageElement = WrapPageElementWithTransition;
