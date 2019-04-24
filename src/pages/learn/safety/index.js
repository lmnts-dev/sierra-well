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

const LearnPageSafety = ({ data }) => (
  <LearnTemplate
    Headline="What would you like to know about Cannabis Safety?"
    Icon="shield"
  />
);

export default LearnPageSafety;

//////////////////////////////////////////////////////////////////////
// End Component
