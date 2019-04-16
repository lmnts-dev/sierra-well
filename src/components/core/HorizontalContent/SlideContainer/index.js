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
  <HorizontalContentStyle.Slide>
    <HorizontalContentStyle.Slide.Inner>
      {console.log('From SlideContainer.js:')}
      {console.log(Columns)}
      
      {/* Map our Columns data. */}
      {Columns.map((Column, index) => {

        // Pass our Widgets data to our Columns
        return <SlideColumn key={index} Widgets={Column.Widgets} />;
      })}
    </HorizontalContentStyle.Slide.Inner>
  </HorizontalContentStyle.Slide>
);

export default SlideContainer;
