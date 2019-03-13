import React from 'react';
import AppProvider from 'store/provider';
import WrapPageElementWithTransition from 'helpers/wrapPageElement';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = WrapPageElementWithTransition;
