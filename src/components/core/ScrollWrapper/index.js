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

//
import { UserAgentProvider, UserAgent } from '@quentin-sommer/react-useragent';
import { Agent } from 'https';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Lock Body Scroll
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

  // Check for Window and User Agent.
  userAgentCheck = () => {
    if (typeof window !== 'undefined') {
      this.userAgent = window.navigator.userAgent;
    }

    return this.userAgent;
  };

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
      <UserAgentProvider ua={this.userAgentCheck()}>
        <ScrollArea className="wrapper" onScroll={this.handleScroll}>
          <BodyLock />
          {children}
          {console.log("this.userAgent:")}
          {console.log(this.userAgent)}
        </ScrollArea>
      </UserAgentProvider>
    );
  }
}

export default ScrollWrapper;
