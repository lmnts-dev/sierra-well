// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTemplate from 'templates/Learn';

// Data
import { QuestionsData } from 'data/questions';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnPage = ({ data }) => (
  <LearnTemplate Filter="all" Data={QuestionsData} />
);

export default LearnPage;

//////////////////////////////////////////////////////////////////////
// End Component
