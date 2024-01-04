import React, { Component } from 'react';

class LifecycleMount extends Component {
  render() {
    console.log("render");
    return (
      <>
        <h3>Mounting Phase lifecycle methods :</h3>
        <ol>
          <li>
            <b>constructor()</b> method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state.
            <br/>
            Method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent.
          </li>
          <li>
            <b>getDerivedStateFromProps()</b> method is called right before rendering the element(s) in the DOM.
            <br/>
            This is the natural place to set the state object based on the initial props.
            <br/>
            It takes state as an argument, and returns an object with changes to the state.
          </li>
          <li>
            <b>render()</b> method is required and will always be called, the others are optional and will be called if you define them.
            <br/>
            Method outputs the HTML to the DOM.  
          </li>
          <li>
            <b>componentDidMount()</b> method is called after the component is rendered.
            <br/>
            This is where you run statements that requires that the component is already placed in the DOM.
          </li>
        </ol>
      </>
    );
  }
}

export default LifecycleMount;