import React from 'react';
import didUpdateSyntaxImg from '../images/componentDidUpdateSyntax.png';

function LifecycleUpdate() {
  return (
    <>
     <h3>Methods in Updating Phase :</h3> 
     <p>A component is updated whenever there is a change in the component's state or props.</p>
     <ol>
      {/* getDerivedStateFromProps -------------- rarely used*/}
      <li>
        static getDerivedStateFromProps()
        <br/>
        is the first method that is called when a component gets updated.
        <br/>
        * This is still the natural place to set the state object based on the initial props.
      </li><br/>
      {/* shouldComponentUpdate ---------------- rarely used*/}
      <li>
        shouldComponentUpdate()
        <br/>
        method you can return a Boolean value that specifies whether React should continue with the rendering or not.
        <br/>
        The default value is true.
        <br/>
        This method is not called for the initial render or when forceUpdate() is used.
        <br/>
        Consider using the built-in PureComponent instead of writing shouldComponentUpdate().
        <br/>
        Note that returning false does not prevent child components from re-rendering when their state changes.
      </li><br/>
      {/* render --------------------------------------------*/}
      <li>
        <b>render()</b> it has to re-render the HTML to the DOM, with the new changes.
      </li><br/>
      {/* getSnapshotBeforeUpdate --------------- rarely used*/}
      <li>
        getSnapshotBeforeUpdate() 
        <br/>
        method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
        <br/>
        If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
      </li><br/>
      {/* componentDidUpdate ------------------------------*/}
      <li>
        <b>componentDidUpdate()</b>
        <br/>
        method is called after the component is updated in the DOM.
        <br/>
        * This is also a good place to do network requests as long as you compare the current props to previous props.
        <br/><br/>
        <img src={didUpdateSyntaxImg} alt='didUpdateSyntaxImg' />
        <br/><br/>
        You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, or you’ll cause an infinite loop.
        <br/>
        componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
      </li>
     </ol>
    </>
  );
}

export default LifecycleUpdate;