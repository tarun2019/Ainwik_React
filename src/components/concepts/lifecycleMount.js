import React, { Component } from 'react';
import constructorSyntaxImg from '../../images/constructorSyntax.png';
import renderSyntaxImg from '../../images/renderSyntax.png';

class LifecycleMount extends Component {
  render() {
    return (
      <>
        <h3>Mounting Phase lifecycle methods :</h3>
        <ol>
          {/* constructor method ----------------------- */}
          <li>
            <b>constructor()</b>
            <br/>
            * Method is called before anything else, when the component is initiated.
            <br/>
            * Method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent.
            <br/>
            * If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component..
            <br/><br/>
            <img src={constructorSyntaxImg} alt='constructorSyntax' />
            <br/>
          </li><br/>
          {/* static getDerivedStateFromProps ------------ */}
          <li>
            static getDerivedStateFromProps()
            <br/>
            * method is called right before rendering the element(s) in the DOM.
            <br/>
            * This method accepts two arguments: props and state, and returns an object, or null if no change is needed.
          </li><br/>
          {/* render method ------- */}
          <li>
            <b>render()</b>
            <br/>
            * Method is only required method all other are optional.
            <br/>
            * Method outputs the HTML markup/null to the DOM.
            <br/>
            * The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
            <br/>
            * If you need to interact with the browser, any side-effects or subscriptions do it in componentDidMount().
            <br/><br/>
            <img src={renderSyntaxImg} alt='renederSyntax' />
            <br/><br/>
            <h4 style={{color:'red'}}>
              !!! Remember !!! , you can not define setState() inside render() function. Why??? Because setState() function changes the state of the application and causing a change in the state called the render() function again and again.
            </h4>
          </li><br/>
          {/* componentDidMount ---------- */}
          <li>
            <b>componentDidMount()</b> 
            <br/>
            * Method is called after the component is rendered.
            <br/>
            * This is where you run statements that requires that the component is already placed in the DOM.
            i.e.-  fetch the data from An External API, can call the setState() , 
            <br/>
            * set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
          </li>
        </ol>
      </>
    );
  }
}

export default LifecycleMount;