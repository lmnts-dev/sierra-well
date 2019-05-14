// SlideColumn.js

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Componentss
import WidgetContainer from 'components/library/Widgets/Container/';

// Styles
import HorizontalContentStyle from './../styles.scss';

// Data Transformers
import { defaultWidgetDataTransformer } from 'components/library/Widgets/Library/Default';
import { sideHeaderWidgetDataTransformer } from 'components/library/Widgets/Library/SideHeader';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The SlideColumn Itself
// <SlideColumn Divider /> returns a Divider
class SlideColumn extends React.Component {
  constructor(props) {
    // Get our this.props
    super(props);
  }

  render() {
    const Divider = this.props.Divider;
    const Widgets = this.props.Widgets;

    // If it's a Divider:
    if (Divider == true) {
      return (
        <HorizontalContentStyle.Column Divider className="divider">
          <HorizontalContentStyle.Column.Inner Divider />
        </HorizontalContentStyle.Column>
      );
    }

    // If it's not:
    else {
      return (
        <HorizontalContentStyle.Column className="col">
          <HorizontalContentStyle.Column.Inner className="col-inner">
            {/* Map our Widgets data. */}
            {Widgets.map((Widget, index) => {
              // Pass our Widgets data to our WidgetContainers
              return (
                <WidgetContainer
                  key={index}
                  WidgetContent={Widget.WidgetContent}
                  Flex={Widget.Flex}
                  Width={Widget.Width}
                />
              );
            })}
          </HorizontalContentStyle.Column.Inner>
        </HorizontalContentStyle.Column>
      );
    }
  }
}

export default SlideColumn;

// Transformer:
// This is for taking Prismic data and transforming it into something that
// this component would like to handle. The Transformer is typically used
// in /template/ pages where a GraphQL query from Prismic (or any data) source
// is involved.
//////////////////////////////////////////////////////////////////////

// Function to create our Columns Map
export const columnDataTransformer = data => {
  if (data) {
    let columnMap = data.map((column, index) => {
      switch (column.slice_type) {
        case 'title_column':
          return {
            Type: column.slice_type,
            Widgets: sideHeaderWidgetDataTransformer(column.primary),
          };
        case 'column':
          return {
            Type: column.slice_type,
            Widgets: defaultWidgetDataTransformer(column.items),
          };
        case 'divider':
          return {
            Type: column.slice_type,
            Widgets: defaultWidgetDataTransformer(column.items),
          };
      }
    });

    return columnMap;
  } else {
    return 'null';
  }
};
