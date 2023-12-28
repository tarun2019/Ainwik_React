// #1. How to create/ define a functional component.
// #2. export default  vs  named export  vs  export as  vs  export * as 
// export default prefix is a standard JavaScript syntax). It lets you mark the main function in a file 

// Notice I have commented React import, as it not required for creating functional comps
// import React from 'react';

// function declaration is prefered, as it supports JS hoisting. We can call function before declaring it.
export default function FunDeclaration() {
  // component markup below that will render ---
  return (
    <h4>
      Component created using function declaration is the standard.
      As hoisting is only possible for declarations.
      {/* inside JSX comment must be wrapped inside curly braces, single line comment is not supported here */}
    </h4>
  );
}

// function expression,
const FunExpression = function() {
  // component markup below that will render ---
  return (
    <h4>
      Demo of Functional component using function expression.
    </h4>
  );
}

// Arrow function, 
const ArrowFunction = () => {
  // component markup below that will render ---
  return (
    <>
      <h4>
        Demo of Functional component using arrow function
      </h4>
      <ChildFunction />
    </>
  );
}

function ChildFunction() {
  return(
    <h3>
      Function can be nested 
    </h3>
  );
}

export {FunExpression as ExpressionComp, ArrowFunction};