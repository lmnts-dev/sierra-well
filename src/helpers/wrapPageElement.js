// WrapPageeElement.js:
// This helper is to wrap a full page transition around the site,
// so we can do page transitions in / out. It also aids with SSR.

// Begin Helper
//////////////////////////////////////////////////////////////////////

import React from 'react';
import Transition from 'components/core/Transition';
import Navigation from 'components/sitewide/Navigation';
import Footer from 'components/sitewide/Footer';

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Navigation />
      <Transition {...props}>{element}</Transition>
      <Footer />
    </>
  );
};

export default wrapPageElement;

//////////////////////////////////////////////////////////////////////
// End Helper
