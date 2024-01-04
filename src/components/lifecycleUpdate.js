import React from 'react';

function LifecycleUpdate() {
  return (
    <>
     <h3>Methods in Updating Phase :</h3> 
     <p>A component is updated whenever there is a change in the component's state or props.</p>
     <ol>
      <li>
        <b>getDerivedStateFromProps()</b> is the first method that is called when a component gets updated.
        <br/>
        This is still the natural place to set the state object based on the initial props.
      </li>
      <li>
        <b>shouldComponentUpdate()</b> method you can return a Boolean value that specifies whether React should continue with the rendering or not.
        <br/>
        The default value is true.
      </li>
      <li>
        <b>render()</b> method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
      </li>
      <li>
        <b>getSnapshotBeforeUpdate()</b> method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
        <br/>
        If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
      </li>
      <li>
        <b>componentDidUpdate()</b> method is called after the component is updated in the DOM.
      </li>
     </ol>
    </>
  );
}

export default LifecycleUpdate;