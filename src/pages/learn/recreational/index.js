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

const LearnPageRecreational = ({ data }) => (
  <LearnTemplate
    Headline="What would you like to know about Recreational Cannabis?"
    Icon="cannabis"
  />
);

export default LearnPageRecreational;

//////////////////////////////////////////////////////////////////////
// End Component
