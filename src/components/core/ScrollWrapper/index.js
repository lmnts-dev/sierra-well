// ScrollWrapper.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Styles
import ScrollArea from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Body Scroll
// Why? : Because it jumps on page transitions. Emulating the <body> tag using
// a scroll wrapper gives us much more flexibility in our content and transitions.
const BodyLock = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    /* overflow: hidden; */
  }
`;

// Scroll Wrapper Itself
class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetop: true,
    };
  }

  // Handle Navigation Scroll for Sticky Nav
  handleScroll = e => {
    const top = e.target.scrollTop > 36;
    if (top) {
      this.setState({
        pagetop: false,
      });
    } else {
      this.setState({
        pagetop: true,
      });
    }
  };

  // Render component.
  render() {
    const { children } = this.props;
    return (
      <>
        <BodyLock />
        <ScrollArea className="wrapper" onScroll={this.handleScroll}>
          {children}
        </ScrollArea>
      </>
    );
  }
}

export default ScrollWrapper;
