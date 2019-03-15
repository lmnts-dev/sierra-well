// ScrollWrapper.js:
// This is prevent page jumping of page transitions.
// The concept is to replicate a 'body' tag so it's scroll
// position isn't reset for a simple and smooth page
// transition without jumping to the top of the page.

// It's used in the wrapPageElement component.

// Core
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ScrollArea = styled.main`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const BodyLock = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetop: true,
    };
  }

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

  render() {
    const { children } = this.props;
    return <ScrollArea onScroll={this.handleScroll}>{children}</ScrollArea>;
  }
}

export default ScrollWrapper;
