// templates/Question.js:
// This is the Question template of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import Device from 'components/core/DeviceQuery';
import Layout from 'components/core/Layout';

// Components
import { HorizontalContent } from 'components/core/HorizontalContent';
import SlideGroup from 'components/core/HorizontalContent/SlideGroup';

// Data Transfomers
import { columnDataTransformer } from 'components/core/HorizontalContent/SlideColumn';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Large Device Content
const LargeContent = ({ node, id }) => {
  const columns = node.dashboard_link.document[0].data.body;

  return (
    <HorizontalContent>
      <SlideGroup
        className={id}
        SlidesData={[{ Name: id, Columns: columnDataTransformer(columns) }]}
      />
      {console.log(node)}
      {console.log('columnDataTransformer(columns):')}
      {console.log(columnDataTransformer(columns))}
      {console.log('columns:')}
      {console.log(columns)}
    </HorizontalContent>
  );
};

// Small Device Content
const SmallContent = () => (
  <div>
    <h1>Mobile content</h1>
  </div>
);

// The Question Template
const TopLevelPageTemplate = ({ data, node, id, elements }) => (
  <Layout
    BgColor={
      node.color_background ? node.color_background : Theme.Color.Background
    }
    PrimaryColor={
      node.color_primary ? node.color_primary : Theme.Color.Nightsky
    }
    SecondaryColor={
      node.color_secondary ? node.color_secondary : Theme.Color.Nightsky
    }
    TertiaryColor={
      node.color_tertiary ? node.color_tertiary : Theme.Color.White
    }
  >
    <Device Query="Desktop">
      <LargeContent node={node} id={id} />
    </Device>

    <Device Query="Mobile">
      <SmallContent />
    </Device>
  </Layout>
);

export default TopLevelPageTemplate;

//////////////////////////////////////////////////////////////////////
// End Component
