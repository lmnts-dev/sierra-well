// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTemplate from 'templates/Learn';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnPageMedical = ({ data }) => (
  <LearnTemplate
    Headline="What would you like to know about Medical Cannabis?"
    Icon="plus"
  />
);

export default LearnPageMedical;

//////////////////////////////////////////////////////////////////////
// End Component
