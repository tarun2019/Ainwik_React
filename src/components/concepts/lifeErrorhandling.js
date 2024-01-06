import React, { Component } from 'react';

class ErrorhandlingMethods extends Component {
  render() {
    return (
      <>
        <p>By default, if your application throws an error during rendering, React will remove its UI from the screen. To prevent this, you can wrap a part of your UI into an error boundary.</p>
        <p>An error boundary is a special component that lets you display some fallback UI instead of the part that crashed</p>
        <p>These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.</p>
        <p>To implement an error boundary component, you need to provide static getDerivedStateFromError which lets you update state in response to an error and display an error message to the user.</p>
        <ol>
          <li><h3>static getDerivedStateFromError()</h3></li>
          <li><h3>componentDidCatch()</h3></li>
        </ol>
      </>
    );
  }
}

export default ErrorhandlingMethods;