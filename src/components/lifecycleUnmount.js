import React from 'react';

function LifecycleUnmount() {
  return (
    <>
      <h3>Unmounting phase lifecycle method :</h3> 
      <ol>
        <li>
          <b>componentWillUnmount()</b> method is called when the component is about to be removed from the DOM.
        </li>
      </ol>
    </>
  );
}

export default LifecycleUnmount;