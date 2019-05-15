// SlideContainer.js:
// For displaying and looping through data for
// SlideColumns.

// Core
import React from 'react';

// Styles
import HorizontalContentStyle from '../styles.scss';
import SlideColumn from '../SlideColumn';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Slide Itself
const SlideContainer = ({ Columns }) => (
  <>
    {/* {console.log('Columns:')}
    {console.log(Columns)} */}
    {/* Map our Columns data. */}
    {Columns.map((Column, index) => {
      // If our Column isn't a Divider
      if (Column.Type != 'divider') {
        // Pass our Widgets data to our Columns
        return <SlideColumn key={index} Widgets={Column.Widgets} />;
      }

      // If our Column is a Divider
      else {
        return <SlideColumn key={index} Divider />;
      }
    })}
  </>
);

export default SlideContainer;
