// SlideColumn.js

// Core
import React from 'react';
import { graphql } from 'gatsby';

// Componentss
import WidgetContainer from 'components/library/Widgets/Container/';

// Styles
import HorizontalContentStyle from './../styles.scss';

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
    const children = this.props.children;

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
                >
                </WidgetContainer>
              );
            })}
          </HorizontalContentStyle.Column.Inner>
        </HorizontalContentStyle.Column>
      );
    }
  }
}

export default SlideColumn;
