import React, { Component } from 'react';

class ErrorhandlingMethods extends Component {
  render() {
    return (
      <>
        <p>
        These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
        </p>
        <ol>
          <li><h3>static getDerivedStateFromError()</h3></li>
          <li><h3>componentDidCatch()</h3></li>
        </ol>
      </>
    );
  }
}

export default ErrorhandlingMethods;