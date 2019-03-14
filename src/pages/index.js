// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';

// Blocks
import Section from 'elements/Section';
// import Inner from 'elements/Inner';
// import Block from 'elements/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PageColor = Theme.Color.Snow;

const Index = ({ data }) => <Layout PageColor={PageColor} />;

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
