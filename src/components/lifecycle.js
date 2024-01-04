import React, { Component } from 'react';

class Lifecycle extends Component {

  render() {
    console.log("render");
    return (
      <>
        <h3>The three phases are:</h3>
        <ul>
          <li>
            <b>Mounting</b> means putting elements into the DOM.</li>
          <li>
            <b>Updating</b>when a component is updated.
            <br/>
            A component is updated whenever there is a change in the component's state or props.
          </li>
          <li>
            <b>Unmounting</b> when a component is removed from the DOM.
          </li>
        </ul>
      </>
    );
  }
}

export default Lifecycle;