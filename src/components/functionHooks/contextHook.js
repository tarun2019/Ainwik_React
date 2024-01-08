import React from 'react';
import useContextParentImg from '../../images/useContextParentSyntax.png';
import useContextChildImg from '../../images/useContextChildSyntax.png';

function ContextHook() {
  return (
    <>
      <h4>React Context is a way to manage state globally.</h4> 
      <p>To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state. To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>
      <h4>How to use :</h4>
      <ol>
        <li>Import createContext and initialize it (in Parent component).</li>
        <li>Wrap child components in the Context Provider and supply the state value.</li>
        <li>Now, all components in this tree will have access to the supplied state.</li>
        <li>To access, import useContext ( in relevant child component ) and access the supplied state.</li>
      </ol>
      <h5>Parent Syntax: </h5>
      <img src={useContextParentImg} alt='useContextParentSyntax' />
      <br/><br/><h5>Child Syntax: </h5>
      <img src={useContextChildImg} alt='useContextChildSyntax' />
    </>
  );
}

export default ContextHook;