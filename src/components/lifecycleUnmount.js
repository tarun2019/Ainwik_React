import React from 'react';

function LifecycleUnmount() {
  return (
    <>
      <h3>Unmounting phase lifecycle method :</h3> 
      <ol>
        <li>
          <b>componentWillUnmount()</b> method is called when the component is about to be removed from the DOM.
          <br/>
          It is invoked immediately before a component is unmounted. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
          <br/>
          Do not call setState() in componentWillUnmount() because the component will never be re-rendered.
        </li>
      </ol>
    </>
  );
}

export default LifecycleUnmount;